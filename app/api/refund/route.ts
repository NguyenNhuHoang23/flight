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

    const authorization = request.headers.get("authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          success: false,
          message: "Chưa đăng nhập",
        },
        { status: 401 },
      );
    }

    const response = await fetch(`${API_URL}/api/admin/refunds`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: authorization,
      },
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("GET /api/client/refund error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy lịch sử hoàn tiền",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
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

    // Lấy token từ request client
    const authorization = request.headers.get("authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          success: false,
          message: "Chưa đăng nhập",
        },
        { status: 401 },
      );
    }

    // Lấy body từ frontend
    const body = await request.json();

    // Call Laravel
    const response = await fetch(`${API_URL}/api/admin/refunds`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("POST /api/refund error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể gửi yêu cầu hoàn tiền",
      },
      { status: 500 },
    );
  }
}
