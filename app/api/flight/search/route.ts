// app/api/flight/search/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apiFlightUrl =
      process.env.API_FLIGHT ||
      "https://ibe.datacom.vn/api/flight/searchflight";

    // Bạn có thể giấu các thông tin bảo mật ở phía Server ở đây
    const payload = {
      RequestInfo: {
        PrivateKey: "M8jAubN75AXas2dfoOpx293Hg567sdLpB56iqc2CtTXgjVX8AQ",
        ApiAccount: "DTC14938",
        ApiPassword: "2MD0ExkdN6cP",
        Currency: "VND",
        Language: "vi",
        IpAddress: "116.96.46.43",
      },
      ...body, // Nhận các tham số ListRoute, Adt, Chd, Inf từ Frontend
    };

    const response = await fetch(apiFlightUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Datacom API Error: ${response.statusText}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
