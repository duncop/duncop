import { Check } from "lucide-react";
import Badge from "./Badge";
import CharacterListItem from "./CharacterListItem";
import { dealerFilter, bufferFilter } from "@/utils/adventure";

export default function AdventureCard({
    badge,
    characters,
    form,
}: {
    badge?: Badge;
    characters: Character[];
    form: Form;
}) {
    const dealer_list = dealerFilter(
        characters,
        +form.dealerCut,
        form.partyType,
    );
    const buffer_list = bufferFilter(
        characters,
        +form.bufferCut,
        form.partyType,
    );

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
                            <CharacterListItem isBuffer={false} character={d} />
                        </div>
                    ))}
                </ul>
                <ul className="w-full flex flex-col gap-3">
                    {buffer_list.map((b, i) => (
                        <div key={b.key} className="w-full flex flex-col gap-3">
                            {i === 0 ? (
                                <hr className="text-white/0" />
                            ) : (
                                <hr className="text-gray200 dark:text-gray800" />
                            )}
                            <CharacterListItem isBuffer={true} character={b} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
