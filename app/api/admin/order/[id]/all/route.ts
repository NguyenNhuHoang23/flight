import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

async function proxyUpdateAll(
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
    const body = await request.json();

    const response = await fetch(
      `${API_URL}/api/admin/orders/${encodeURIComponent(id)}/all`,
      {
        method: request.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(authorization
            ? {
                Authorization: authorization,
              }
            : {}),
        },
        body: JSON.stringify(body),
        cache: "no-store",
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("UPDATE ALL ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể cập nhật đơn hàng",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext,
) {
  return proxyUpdateAll(request, context);
}

export async function PUT(
  request: NextRequest,
  context: RouteContext,
) {
  return proxyUpdateAll(request, context);
}
