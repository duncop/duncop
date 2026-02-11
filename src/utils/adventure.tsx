export const dealerFilter = (
    characters: Character[],
    cut: number,
    partyType: string,
) => {
    return characters
        .map((c) => ({ ...c, ozma: parseOzma(partyType, c.setname, c.ozma) }))
        .filter((c) => !c.buffScore && cut <= +c.ozma)
        .sort((a, b) => +b.ozma - +a.ozma);
};

export const bufferFilter = (characters: Character[], cut: number) => {
    return characters
        .map((c) => ({
            ...c,
            buffScore: c.buffScore?.replace(/,/g, "").slice(0, -4) ?? "-1",
        }))
        .filter((c) => c.buffScore && cut <= +c.buffScore)
        .sort((a, b) => +b.buffScore - +a.buffScore);
};

const parseOzma = (partyType: string, set: string, ozma?: string) => {
    if (!ozma) return "0";

    let ozma_num = +(
        ozma.match(/(\d+)\s*억/)?.[1] +
        (ozma.match(/(\d+)\s*만/)?.[1] ?? "0").padStart(4, "0")
    );

    if (set === "무리 사냥의 길잡이") {
        if (partyType === "4인")
            ozma_num = Math.floor((ozma_num / 1.08) * 1.24);
        if (partyType === "3인")
            ozma_num = Math.floor((ozma_num / 1.08) * 1.16);
    }
    return ozma_num.toString().slice(0, -4);
};
