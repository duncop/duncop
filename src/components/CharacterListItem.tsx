import Image from "next/image";

export default function CharacterListItem({
    isBuffer,
    character,
}: {
    isBuffer?: boolean;
    character: Character;
}) {
    return (
        <li className="w-full flex justify-between px-2">
            <div>
                <p className="font-semibold text-xl">
                    {character.name}
                    {character.setname === "무리 사냥의 길잡이" &&
                        !isBuffer && (
                            <span className="text-blue-400">&nbsp;S</span>
                        )}
                </p>
                <p className="text-sm text-gray600 dark:text-gray500">
                    {character.job}
                </p>
            </div>
            <div>
                <p className="font-bold text-xl text-end">
                    {isBuffer
                        ? `${character.buffScore}만`
                        : `${character.ozma}억`}
                </p>
                <p className="text-sm flex items-center gap-1 text-yellow-600 dark:text-yellow-500 text-end opacity-85">
                    <Image
                        src="/fame.png"
                        alt="명성 아이콘"
                        width={16}
                        height={16}
                    />
                    {character.fame}
                </p>
            </div>
        </li>
    );
}
