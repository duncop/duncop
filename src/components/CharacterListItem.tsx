import Image from "next/image";

export default function CharacterListItem({
    name,
    job,
    power,
    fame,
    isBuffer,
}: {
    name: string;
    job: string;
    power: number;
    fame: number;
    isBuffer?: boolean;
}) {
    return (
        <li className="w-full flex justify-between px-2">
            <div>
                <p className="font-semibold text-xl">{name}</p>
                <p className="text-sm text-gray600 dark:text-gray500">{job}</p>
            </div>
            <div>
                <p className="font-bold text-xl  text-end">
                    {power}
                    {isBuffer ? "만" : "억"}
                </p>
                <p className="text-sm flex items-center gap-1 text-yellow-600 dark:text-yellow-500 text-end opacity-85">
                    <Image
                        src="/fame.png"
                        alt="명성 아이콘"
                        width={16}
                        height={16}
                    />
                    {fame}
                </p>
            </div>
        </li>
    );
}
