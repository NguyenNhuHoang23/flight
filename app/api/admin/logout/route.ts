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

    const authorization = request.headers.get("Authorization");

    const response = await fetch(`${API_URL}/api/admin/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",

        ...(authorization
          ? {
              Authorization: authorization,
            }
          : {}),
      },
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("ADMIN LOGOUT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể đăng xuất",
      },
      { status: 500 },
    );
  }
}
