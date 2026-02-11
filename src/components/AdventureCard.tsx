import { Check } from "lucide-react";
import Badge from "./Badge";
import CharacterListItem from "./CharacterListItem";
import { dealerFilter, bufferFilter } from "@/utils/adventure";

export default function AdventureCard({
    badge,
    characters,
    dealerCut,
    bufferCut,
    dealerCount,
    bufferCount,
}: {
    badge?: Badge;
    characters: Character[];
    dealerCut: number;
    bufferCut: number;
    dealerCount: number;
    bufferCount: number;
}) {
    const dealer_list = dealerFilter(characters, dealerCut);
    const buffer_list = bufferFilter(characters, bufferCut);

    return (
        <div className="w-full p-10 flex flex-col gap-4 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="w-full flex justify-between">
                <div>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-bold select-text cursor-default">
                            {characters[0].adventrueName}
                        </h3>
                        {badge?.type === "전과자" ? (
                            <Badge type="전과자" />
                        ) : (
                            badge?.type === "시민상" && <Badge type="시민상" />
                        )}
                    </div>
                    <p className="text-sm text-gray600 dark:text-gray500">
                        이내&nbsp;
                        <span className="t-main">
                            {characters[0].advenInae}
                        </span>
                        &nbsp;&nbsp;디레지에&nbsp;
                        <span className="t-main">
                            {characters[0].advenDire}
                        </span>
                        &nbsp;&nbsp;악연&nbsp;
                        <span className="t-main">
                            {characters[0].advenDireHard}
                        </span>
                    </p>
                </div>
                <div className="w-9 h-9 flex justify-center items-center b-main rounded-full text-white dark:text-gray900">
                    <Check strokeWidth={3} />
                </div>
            </div>

            <div className="w-full flex gap-3">
                <div className="w-full bg-gray100 dark:bg-gray800 p-5 rounded-xl">
                    <p className="font-normal">컷 만족 딜러</p>
                    <p className="font-semibold text-xl">
                        <span className="t-main font-bold text-3xl">
                            {dealer_list.length}
                        </span>{" "}
                        명
                    </p>
                </div>
                <div className="w-full bg-gray100 dark:bg-gray800 p-5 rounded-xl">
                    <p className="font-normal">컷 만족 버퍼</p>
                    <p className="font-semibold text-xl">
                        <span className="t-main font-bold text-3xl">
                            {buffer_list.length}
                        </span>{" "}
                        명
                    </p>
                </div>
            </div>

            <div className="w-full flex gap-3">
                <ul className="w-full flex flex-col gap-3">
                    {dealer_list.map((d, i) => (
                        <div key={d.key} className="w-full flex flex-col gap-3">
                            {i === 0 ? (
                                <hr className="text-white/0" />
                            ) : (
                                <hr className="text-gray200 dark:text-gray800" />
                            )}
                            <CharacterListItem
                                name={d.name}
                                job={d.job}
                                power={+d.ozma}
                                fame={+d.fame}
                                isBuffer={false}
                            />
                        </div>
                    ))}
                </ul>
                <ul className="w-full flex flex-col gap-3">
                    <hr className="text-white/0" />
                    <CharacterListItem
                        name="애기븝미"
                        job="眞 인챈트리스"
                        power={675}
                        fame={80938}
                        isBuffer={true}
                    />
                    <hr className="text-gray200 dark:text-gray800" />
                    <CharacterListItem
                        name="애기끰끰"
                        job="眞 크루세이더"
                        power={633}
                        fame={78762}
                        isBuffer={true}
                    />
                    <hr className="text-gray200 dark:text-gray800" />
                    <CharacterListItem
                        name="○ㅐ기븝미"
                        job="眞 인챈트리스"
                        power={632}
                        fame={79221}
                        isBuffer={true}
                    />
                    <hr className="text-gray200 dark:text-gray800" />
                    <CharacterListItem
                        name="Oㅐ기븝미"
                        job="眞 인챈트리스"
                        power={624}
                        fame={78854}
                        isBuffer={true}
                    />
                    <hr className="text-gray200 dark:text-gray800" />
                    <CharacterListItem
                        name="Oㅐ기뮤즈"
                        job="眞 뮤즈"
                        power={501}
                        fame={75413}
                        isBuffer={true}
                    />
                </ul>
            </div>
        </div>
    );
}
