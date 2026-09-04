import { NextRequest, NextResponse } from "next/server";
import { getSelfRefundAvailability } from "@/lib/get-self-refund-availability";

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

    const token = request.headers.get("authorization");

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Chưa đăng nhập",
        },
        { status: 401 },
      );
    }

    const body = await request.json();
    const requestedAmount = Number(body?.amount);

    if (Number.isFinite(requestedAmount) && requestedAmount > 0) {
      const availability = await getSelfRefundAvailability(API_URL, token);

      if (availability && requestedAmount > availability.available) {
        return NextResponse.json(
          {
            success: false,
            message: "Số dư không đủ để tạo yêu cầu rút tiền",
          },
          { status: 422 },
        );
      }
    }

    const response = await fetch(`${API_URL}/api/client/refund`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Refund proxy error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối đến server",
      },
      { status: 500 },
    );
  }
}
