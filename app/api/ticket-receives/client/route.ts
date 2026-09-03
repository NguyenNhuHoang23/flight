import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function authHeaders(request: NextRequest) {
  const authorization = request.headers.get("authorization");

  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(authorization ? { Authorization: authorization } : {}),
  };
}

/**
 * GET /api/ticket-receives/client
 * Lịch sử nhận vé của khách đang đăng nhập
 */
export async function GET(request: NextRequest) {
  try {
    if (!API_URL) {
      return NextResponse.json(
        { success: false, message: "NEXT_PUBLIC_API_URL chưa được cấu hình" },
        { status: 500 },
      );
    }

    const authorization = request.headers.get("authorization");

    if (!authorization) {
      return NextResponse.json(
        { success: false, message: "Chưa đăng nhập" },
        { status: 401 },
      );
    }

    const { searchParams } = new URL(request.url);

    const params = new URLSearchParams({
      page: searchParams.get("page") || "1",
      per_page: searchParams.get("per_page") || "10",
    });

    const search = searchParams.get("search")?.trim();
    if (search) params.set("search", search);

    const response = await fetch(
      `${API_URL}/api/ticket-receives/client?${params.toString()}`,
      {
        method: "GET",
        headers: authHeaders(request),
        cache: "no-store",
      },
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("GET /api/ticket-receives/client error:", error);

    return NextResponse.json(
      { success: false, message: "Không thể lấy lịch sử nhận vé" },
      { status: 500 },
    );
  }
}

/**
 * POST /api/ticket-receives/client
 * Tạo yêu cầu nhận vé mới
 */
export async function POST(request: NextRequest) {
  try {
    if (!API_URL) {
      return NextResponse.json(
        { success: false, message: "NEXT_PUBLIC_API_URL chưa được cấu hình" },
        { status: 500 },
      );
    }

    const authorization = request.headers.get("authorization");

    if (!authorization) {
      return NextResponse.json(
        { success: false, message: "Chưa đăng nhập" },
        { status: 401 },
      );
    }

    const body = await request.json();

    const response = await fetch(`${API_URL}/api/ticket-receives`, {
      method: "POST",
      headers: authHeaders(request),
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("POST /api/ticket-receives/client error:", error);

    return NextResponse.json(
      { success: false, message: "Không thể gửi yêu cầu nhận vé" },
      { status: 500 },
    );
  }
}
