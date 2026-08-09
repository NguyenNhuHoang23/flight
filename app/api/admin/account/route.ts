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

    const searchParams = request.nextUrl.searchParams;

    const queryString = searchParams.toString();

    const response = await fetch(
      `${API_URL}/api/admin/accounts${queryString ? `?${queryString}` : ""}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: request.headers.get("Authorization") || "",
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("GET /api/admin/accounts error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối đến server",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!API_URL) {
      return NextResponse.json(
        { success: false, message: "NEXT_PUBLIC_API_URL chưa được cấu hình" },
        { status: 500 },
      );
    }
    const body = await request.json();
    const response = await fetch(`${API_URL}/api/admin/accounts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("POST /api/admin/account error:", error);
    return NextResponse.json(
      { success: false, message: "Không thể kết nối đến server" },
      { status: 500 },
    );
  }
}
