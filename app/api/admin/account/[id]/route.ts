import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
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

    const { id } = await context.params;

    const response = await fetch(`${API_URL}/api/admin/accounts/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("GET /api/admin/account/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối đến server",
      },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
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

    const { id } = await context.params;

    const body = await request.json();

    const response = await fetch(`${API_URL}/api/admin/accounts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("PUT /api/admin/account/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể cập nhật tài khoản",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
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

    const { id } = await context.params;

    const response = await fetch(`${API_URL}/api/admin/accounts/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("DELETE /api/admin/account/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể xóa tài khoản",
      },
      { status: 500 },
    );
  }
}
