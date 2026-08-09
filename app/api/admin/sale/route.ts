import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  try {
    const response = await fetch(`${API_URL}/api/admin/airline-discounts`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();
    console.log("🚀 ~ GET ~ data:", data);

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("GET /admin/airline-discounts error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối đến server",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: Request) {
  const authorization = request.headers.get("Authorization");

  console.log("PROXY AUTH:", authorization);

  try {
    const body = await request.json();

    const response = await fetch(
      `${API_URL}/api/admin/airline-discounts/save-all`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(authorization ? { Authorization: authorization } : {}),
        },
        body: JSON.stringify(body),
        cache: "no-store",
      },
    );

    const data = await response.json();

    console.log("BACKEND STATUS:", response.status);
    console.log("BACKEND RESPONSE:", data);

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("POST /api/admin/sale error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể kết nối đến server backend",
      },
      { status: 500 },
    );
  }
}
