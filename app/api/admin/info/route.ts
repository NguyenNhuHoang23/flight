import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
    try {
        if (!API_URL) {
            return NextResponse.json(
                {
                    success: false,
                    message: "NEXT_PUBLIC_API_URL chưa được cấu hình",
                },
                { status: 500 }
            );
        }

        const response = await fetch(`${API_URL}/api/info`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
        });

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });
    } catch (error) {
        console.error("GET /api/admin/info error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Không thể lấy thông tin website",
            },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        if (!API_URL) {
            return NextResponse.json(
                {
                    success: false,
                    message: "NEXT_PUBLIC_API_URL chưa được cấu hình",
                },
                { status: 500 }
            );
        }

        const body = await request.json();
const authorization = request.headers.get("Authorization");
        const response = await fetch(`${API_URL}/api/admin/info`, {
            method: "PUT",
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
        });

        const data = await response.json();

        return NextResponse.json(data, {
            status: response.status,
        });
    } catch (error) {
        console.error("PUT /api/admin/info error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Không thể cập nhật thông tin website",
            },
            { status: 500 }
        );
    }
}