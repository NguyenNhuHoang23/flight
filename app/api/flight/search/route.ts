import { NextResponse } from "next/server";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apiFlightUrl =
      process.env.API_FLIGHT ||
      "https://ibe.datacom.vn/api/Flight/SearchFlight";

    const option = body.Option ?? {};

    const payload = {
      RequestInfo: {
        PrivateKey:
          process.env.DATACOM_PRIVATE_KEY ||
          "M8jAubN75AXas2dfoOpx293Hg567sdLpB56iqc2CtTXgjVX8AQ",
        ApiAccount: process.env.DATACOM_API_ACCOUNT || "DTC14938",
        ApiPassword: process.env.DATACOM_API_PASSWORD || "2MD0ExkdN6cP",
        Currency: process.env.DATACOM_CURRENCY || "VND",
        Language: process.env.DATACOM_LANGUAGE || "vi",
        IpAddress: getClientIp(request),
      },
      // Chuỗi rỗng = tìm tất cả hãng / hệ thống
      System: "",
      Adt: Number(body.Adt) || 1,
      Chd: Number(body.Chd) || 0,
      Inf: Number(body.Inf) || 0,
      Tourcode: body.Tourcode ?? "",
      ListRoute: body.ListRoute ?? [],
      Option: {
        DirectOnly: option.DirectOnly ?? false,
        NearByAirport: option.NearByAirport ?? true,
        PreferCabin: option.PreferCabin || "ECONOMY",
        NdcOnly: option.NdcOnly ?? false,
        CombineMode: option.CombineMode ?? "flight",
      },
    };

    const response = await fetch(apiFlightUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        data ?? { error: `Datacom API Error: ${response.statusText}` },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
