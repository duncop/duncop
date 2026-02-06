import { Check } from "lucide-react";
import Badge from "./Badge";
import CharacterListItem from "./CharacterListItem";

export default function AdventureCard() {
    return (
        <div className="w-full p-10 flex flex-col gap-4 border border-gray300 dark:border-none dark:bg-gray900 rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="w-full flex justify-between">
                <div>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-bold select-text cursor-default">
                            교복플레Ol
                        </h3>
                        <Badge type="시민상" />
                    </div>
                    <p className="text-sm text-gray600 dark:text-gray500">
                        이내&nbsp;<span className="t-main">149</span>
                        &nbsp;&nbsp;디레지에&nbsp;
                        <span className="t-main">48</span>
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
                        <span className="t-main font-bold text-3xl">3</span> 명
                    </p>
                </div>
                <div className="w-full bg-gray100 dark:bg-gray800 p-5 rounded-xl">
                    <p className="font-normal">컷 만족 버퍼</p>
                    <p className="font-semibold text-xl">
                        <span className="t-main font-bold text-3xl">5</span> 명
                    </p>
                </div>
            </div>

            <div className="w-full flex gap-3">
                <ul className="w-full flex flex-col gap-3">
                    <hr className="text-white/0" />
                    <CharacterListItem
                        name="토끼얏호"
                        job="眞 키메라"
                        power={373}
                        fame={79275}
                        isBuffer={false}
                    />
                    <hr className="text-gray200 dark:text-gray800" />
                    <CharacterListItem
                        name="0ㅐ기븝미"
                        job="眞 배틀메이지"
                        power={275}
                        fame={78883}
                        isBuffer={false}
                    />
                    <hr className="text-gray200 dark:text-gray800" />
                    <CharacterListItem
                        name="작고말랑해요"
                        job="眞 엘리멘탈마스터"
                        power={250}
                        fame={77878}
                        isBuffer={false}
                    />
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
