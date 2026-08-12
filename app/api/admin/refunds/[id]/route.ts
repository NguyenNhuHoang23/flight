import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

async function getId(context: RouteContext) {
  const { id } = await context.params;
  return id;
}

function getAuthHeaders(request: NextRequest) {
  const token = request.headers.get("authorization");

  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(token ? { Authorization: token } : {}),
  };
}

/**
 * GET /api/admin/refunds/:id
 */
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

    const id = await getId(context);

    const response = await fetch(`${API_URL}/api/refunds/${id}`, {
      method: "GET",
      headers: getAuthHeaders(request),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("GET refund detail error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy thông tin refund",
      },
      { status: 500 },
    );
  }
}

/**
 * PUT /api/admin/refunds/:id
 */
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

    const id = await getId(context);
    const body = await request.json();

    const response = await fetch(`${API_URL}/api/admin/refunds/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(request),
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("UPDATE refund error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Cập nhật refund thất bại",
      },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/admin/refunds/:id
 */
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

      const id = await getId(context);

      const response = await fetch(`${API_URL}/api/admin/refunds/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(request),
      });

      const data = await response.json();

      return NextResponse.json(data, {
        status: response.status,
      });
    } catch (error) {
      console.error("DELETE refund error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Xóa refund thất bại",
        },
        { status: 500 },
      );
    }
  }
