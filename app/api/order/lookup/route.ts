import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

    const body = await request.json();

    const orderCode =
      typeof body.order_code === "string" ? body.order_code.trim() : "";
    const contactName =
      typeof body.contact_name === "string" ? body.contact_name.trim() : "";

    if (!orderCode || !contactName) {
      return NextResponse.json(
        {
          success: false,
          message: "Vui lòng nhập đầy đủ mã đơn và họ tên liên hệ.",
        },
        { status: 422 },
      );
    }

    const response = await fetch(`${API_URL}/api/orders/lookup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_code: orderCode,
        contact_name: contactName,
      }),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("ORDER LOOKUP ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể tra cứu đặt vé. Vui lòng thử lại sau.",
      },
      { status: 500 },
    );
  }
}
