import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function POST(request: NextRequest, context: RouteContext) {
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

    const token = request.headers.get("authorization");
    let body: unknown = {};

    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const response = await fetch(`${API_URL}/api/admin/refunds/${id}/approve`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: token } : {}),
      },
      body: JSON.stringify(body ?? {}),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("APPROVE refund error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Duyệt refund thất bại",
      },
      { status: 500 },
    );
  }
}
