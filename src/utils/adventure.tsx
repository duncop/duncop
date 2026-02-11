export const dealerFilter = (characters: Character[], cut: number) => {
    return characters
        .map((c) => ({ ...c, ozma: c.ozma?.match(/(\d+)\s*억/)?.[1] ?? "0" }))
        .filter((c) => !c.buffScore && cut <= +c.ozma)
        .sort((a, b) => +b.ozma - +a.ozma);
};

export const bufferFilter = (characters: Character[], cut: number) => {
    return characters
        .filter(
            (c) =>
                !c.buffScore &&
                cut <= +(c.buffScore?.match(/(\d+)\s*억/)?.[1] ?? 0),
        )
        .sort((a, b) => a.fame - b.fame);
};
