import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(request: NextRequest) {
  try {
    if (!API_URL) {
      return NextResponse.json(
        {
          success: false,
          message: "NEXT_PUBLIC_API_URL chưa được cấu hình",
        },
        { status: 500 },
      );
    }

    const authorization = request.headers.get("Authorization");

    const { searchParams } = new URL(request.url);

    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("per_page") || "15";

    const response = await fetch(
      `${API_URL}/api/admin/orders?page=${page}&per_page=${perPage}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...(authorization
            ? {
                Authorization: authorization,
              }
            : {}),
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("GET ORDERS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy danh sách đơn hàng",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const authorization = request.headers.get("Authorization");
  try {
    if (!API_URL) {
      return NextResponse.json(
        {
          success: false,
          message: "NEXT_PUBLIC_API_URL chưa được cấu hình",
        },
        { status: 500 },
      );
    }

    const formData = await request.formData();

    const response = await fetch(`${API_URL}/api/admin/orders`, {
      method: "POST",
      headers: {
        ...(authorization ? { Authorization: authorization } : {}),
      },
      body: formData,
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Create order proxy error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối đến server",
      },
      { status: 500 },
    );
  }
}
