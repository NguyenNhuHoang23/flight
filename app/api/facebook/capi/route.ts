import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "1085438737245448";
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

const ALLOWED_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "InitiateCheckout",
  "Lead",
  "Purchase",
]);

export async function POST(request: NextRequest) {
  try {
    if (!ACCESS_TOKEN) {
      return NextResponse.json(
        { success: false, message: "FACEBOOK_ACCESS_TOKEN chưa được cấu hình" },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { eventName, eventId, eventSourceUrl, fbp, fbc } = body as {
      eventName?: string;
      eventId?: string;
      eventSourceUrl?: string;
      fbp?: string;
      fbc?: string;
    };

    if (!eventName || !eventId || !ALLOWED_EVENTS.has(eventName)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: eventName,
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              event_source_url: eventSourceUrl,
              action_source: "website",
              user_data: {
                ...(ip ? { client_ip_address: ip } : {}),
                ...(userAgent ? { client_user_agent: userAgent } : {}),
                ...(typeof fbp === "string" && fbp ? { fbp } : {}),
                ...(typeof fbc === "string" && fbc ? { fbc } : {}),
              },
            },
          ],
          access_token: ACCESS_TOKEN,
        }),
      },
    );

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("FACEBOOK CAPI ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
