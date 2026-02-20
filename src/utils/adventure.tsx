export const dealerFilter = (
    characters: Character[],
    cut: number,
    partyType: string,
) => {
    return characters
        .map((c) => ({ ...c, ozma: parseOzma(partyType, c) }))
        .filter((c) => !c.buffScore && cut <= +c.ozma)
        .sort((a, b) => +b.ozma - +a.ozma);
};

export const bufferFilter = (
    characters: Character[],
    cut: number,
    partyType: string,
) => {
    return characters
        .map((c) => ({
            ...c,
            buffScore: parseBuffScore(partyType, c),
        }))
        .filter((c) => c.buffScore && cut <= +c.buffScore)
        .sort((a, b) => +b.buffScore - +a.buffScore);
};

const parseOzma = (partyType: string, character: Character) => {
    if (!character.ozma) return "0";

    let ozma_num = +(
        character.ozma.match(/(\d+)\s*억/)?.[1] +
        (character.ozma.match(/(\d+)\s*만/)?.[1] ?? "0").padStart(4, "0")
    );

    if (character.setname === "무리 사냥의 길잡이") {
        if (partyType === "4인")
            ozma_num = Math.floor((ozma_num / 1.08) * 1.24);
        if (partyType === "3인")
            ozma_num = Math.floor((ozma_num / 1.08) * 1.16);
    }
    return ozma_num.toString().slice(0, -4) || "0";
};

const parseBuffScore = (partyType: string, character: Character) => {
    if (!character.buffScore) return "-1";

    let buffScore = character.buffScore;

    if (character.job.includes("인챈트리스")) {
        if (partyType === "4인") buffScore = character.buffScore4!;
        if (partyType === "3인") buffScore = character.buffScore3!;
    }

    return buffScore.replace(/,/g, "").slice(0, -4);
};
