import { supabase } from "@/utils/supabase";

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

    return response.json();
};

/* 모험단 뱃지 조회 */
export const getAdventureBadge = async (adventureName: string) => {
    const { data, error } = await supabase
        .from("Adventure")
        .select("award, criminal")
        .eq("adventure_name", adventureName)
        .maybeSingle();

    if (error || !data) {
        return { award: false, criminal: false } as const;
    }
    return {
        award: data.award,
        criminal: data.criminal,
    };
};
