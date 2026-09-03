import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function getAuthHeaders(request: NextRequest) {
  const token = request.headers.get("authorization");

  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token ? { Authorization: token } : {}),
  };
}

/**
 * GET /api/admin/ticket-receives?search=&status=&page=&per_page=
 */
export async function GET(request: NextRequest) {
  try {
    if (!API_URL) {
      return NextResponse.json(
        { success: false, message: "NEXT_PUBLIC_API_URL chưa được cấu hình" },
        { status: 500 },
      );
    }

    const { searchParams } = new URL(request.url);

    const params = new URLSearchParams({
      page: searchParams.get("page") || "1",
      per_page: searchParams.get("per_page") || "10",
    });

    const search = searchParams.get("search")?.trim();
    const status = searchParams.get("status")?.trim();

    if (search) params.set("search", search);
    if (status && status !== "all") params.set("status", status);

    const response = await fetch(
      `${API_URL}/api/admin/ticket-receives?${params.toString()}`,
      {
        method: "GET",
        headers: getAuthHeaders(request),
        cache: "no-store",
      },
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("GET ticket-receives error:", error);

    return NextResponse.json(
      { success: false, message: "Không thể lấy danh sách nhận vé" },
      { status: 500 },
    );
  }
}

/**
 * POST /api/admin/ticket-receives
 */
export async function POST(request: NextRequest) {
  try {
    if (!API_URL) {
      return NextResponse.json(
        { success: false, message: "NEXT_PUBLIC_API_URL chưa được cấu hình" },
        { status: 500 },
      );
    }

    const body = await request.json();

    const response = await fetch(`${API_URL}/api/admin/ticket-receives`, {
      method: "POST",
      headers: getAuthHeaders(request),
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("POST ticket-receives error:", error);

    return NextResponse.json(
      { success: false, message: "Không thể tạo yêu cầu nhận vé" },
      { status: 500 },
    );
  }
}
