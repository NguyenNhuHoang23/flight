import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

// GET /api/admin/banks/{id}
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

    const authorization = request.headers.get("Authorization");

    const response = await fetch(`${API_URL}/api/admin/banks/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        ...(authorization ? { Authorization: authorization } : {}),
      },
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("GET BANK DETAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy thông tin ngân hàng",
      },
      { status: 500 },
    );
  }
}

// PUT /api/admin/banks/{id}
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

    const authorization = request.headers.get("Authorization");

    const response = await fetch(`${API_URL}/api/admin/banks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(authorization ? { Authorization: authorization } : {}),
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("UPDATE BANK ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể cập nhật ngân hàng",
      },
      { status: 500 },
    );
  }
}

// DELETE /api/admin/banks/{id}
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

    const authorization = request.headers.get("Authorization");

    const response = await fetch(`${API_URL}/api/admin/banks/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        ...(authorization ? { Authorization: authorization } : {}),
      },
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("DELETE BANK ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể xóa ngân hàng",
      },
      { status: 500 },
    );
  }
}
