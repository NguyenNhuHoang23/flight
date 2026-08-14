import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

async function proxyUpdate(
  request: NextRequest,
  context: RouteContext,
) {
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

    const formData = await request.formData();

    console.log("PROXY FORM DATA:");

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(key, {
          name: value.name,
          size: value.size,
          type: value.type,
        });
      } else {
        console.log(key, value);
      }
    }

    const authorization = request.headers.get("Authorization");

    const response = await fetch(
      `${API_URL}/api/admin/orders/${encodeURIComponent(id)}`,
      {
        method: request.method,
        headers: {
          Accept: "application/json",

          ...(authorization
            ? {
                Authorization: authorization,
              }
            : {}),
        },
        body: formData,
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("UPDATE ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể cập nhật đơn hàng",
      },
      { status: 500 },
    );
  }
}

/**
 * GET DETAIL ORDER
 */
export async function GET(
  request: NextRequest,
  context: RouteContext,
) {
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

    const response = await fetch(
      `${API_URL}/api/admin/orders/${encodeURIComponent(id)}`,
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
    console.error("GET ORDER DETAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy chi tiết đơn hàng",
      },
      { status: 500 },
    );
  }
}

export async function POST(
  request: NextRequest,
  context: RouteContext,
) {
  return proxyUpdate(request, context);
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext,
) {
  return proxyUpdate(request, context);
}

export async function PUT(
  request: NextRequest,
  context: RouteContext,
) {
  return proxyUpdate(request, context);
}

/**
 * DELETE ORDER
 */
export async function DELETE(
  request: NextRequest,
  context: RouteContext,
) {
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

    const response = await fetch(
      `${API_URL}/api/admin/orders/${encodeURIComponent(id)}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          ...(authorization
            ? {
                Authorization: authorization,
              }
            : {}),
        },
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("DELETE ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể xóa đơn hàng",
      },
      { status: 500 },
    );
  }
}