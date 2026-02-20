import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name } = await request.json();

        const response = await fetch(
            `https://dundam.xyz/dat/searchData.jsp?name=${encodeURIComponent(name)}&server=adven`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: "{}",
            },
        );

        if (!response.ok) {
            throw new Error(`던담 API 요청 실패: ${response.status}`);
        }

        return new NextResponse(await response.text(), {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        });
    } catch (error) {
        console.error("API Proxy Error:", error);
        return NextResponse.json(
            { error: "서버 내부 오류가 발생했습니다." },
            { status: 500 },
        );
    }
}
