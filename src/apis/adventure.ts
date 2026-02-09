/* 던담 모험단 검색 */
export const searchAdventure = async (name: string) => {
    const response = await fetch(`/api/adventure`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
    });

    if (!response.ok) {
        throw new Error("API 요청 실패");
    }

    return response.text();
};
