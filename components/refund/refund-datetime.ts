const VN_TIMEZONE = "Asia/Ho_Chi_Minh";

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

function extractDateOnly(value?: string | null) {
  if (!value) return "";

  const isoMatch = value.match(/^(\d{4}-\d{2}-\d{2})/);
  if (isoMatch) return isoMatch[1];

  return "";
}

function extractTimeOnly(value?: string | null) {
  if (!value) return "";

  const match = value.trim().match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";

  const hour = Math.min(Math.max(Number(match[1]), 0), 23);
  const minute = Math.min(Math.max(Number(match[2]), 0), 59);

  if (Number.isNaN(hour) || Number.isNaN(minute)) return "";

  return `${pad2(hour)}:${pad2(minute)}`;
}

function applyAmPm(hour24: number, ampm?: "AM" | "PM" | null) {
  if (hour24 > 12) return hour24;

  if (ampm === "PM" && hour24 < 12) return hour24 + 12;
  if (ampm === "AM" && hour24 === 12) return 0;

  return hour24;
}

function buildUtcDate(
  date?: string | null,
  time?: string | null,
  ampm?: "AM" | "PM" | null,
): Date | null {
  if (!date && !time) return null;

  const rawDate = (date || "").trim();
  const rawTime = (time || "").trim();

  if (/^\d{4}-\d{2}-\d{2}T/.test(rawDate)) {
    const parsed = new Date(rawDate);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  if (/^\d{4}-\d{2}-\d{2}T/.test(rawTime)) {
    const parsed = new Date(rawTime);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const datePart = extractDateOnly(rawDate);
  if (!datePart) return null;

  const timePart = extractTimeOnly(rawTime) || "00:00";
  const [hourText, minuteText] = timePart.split(":");
  const hour = applyAmPm(Number(hourText), ampm);
  const minute = Number(minuteText);

  const parsed = new Date(
    `${datePart}T${pad2(hour)}:${pad2(minute)}:00.000Z`,
  );

  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatInTimeZone(
  date: Date,
  timeZone: string,
): { date: string; time: string; ampm: "AM" | "PM" } {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value || "";

  const hour = Number(get("hour"));
  const safeHour = Number.isNaN(hour) ? 0 : hour % 24;

  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${pad2(safeHour)}:${get("minute")}`,
    ampm: safeHour >= 12 ? "PM" : "AM",
  };
}

/**
 * Convert date/time/ampm từ API (UTC) sang giờ Việt Nam để hiển thị.
 */
export function convertRefundDateTimeToVietnam(
  date?: string | null,
  time?: string | null,
  ampm?: "AM" | "PM" | null,
): { date: string; time: string; ampm: "AM" | "PM" } {
  const utcDate = buildUtcDate(date, time, ampm);

  if (!utcDate) {
    return {
      date: extractDateOnly(date) || "",
      time: extractTimeOnly(time) || "",
      ampm: ampm === "PM" ? "PM" : "AM",
    };
  }

  return formatInTimeZone(utcDate, VN_TIMEZONE);
}

/**
 * Convert giờ Việt Nam người dùng nhập về UTC để lưu state/API.
 */
export function convertVietnamDateTimeToUtc(
  date: string,
  time: string,
  ampm: "AM" | "PM" = "AM",
): { date: string; time: string; ampm: "AM" | "PM" } {
  const datePart = extractDateOnly(date);
  const timePart = extractTimeOnly(time) || "00:00";

  if (!datePart) {
    return {
      date: "",
      time: timePart,
      ampm,
    };
  }

  const [hourText, minuteText] = timePart.split(":");
  const hour = applyAmPm(Number(hourText), ampm);
  const minute = Number(minuteText);

  const vietnamDate = new Date(
    `${datePart}T${pad2(hour)}:${pad2(minute)}:00+07:00`,
  );

  if (Number.isNaN(vietnamDate.getTime())) {
    return {
      date: datePart,
      time: timePart,
      ampm,
    };
  }

  return formatInTimeZone(vietnamDate, "UTC");
}
