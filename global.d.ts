export declare global {
    interface FormType {
        dealerCut: string;
        bufferCut: string;
        setCount: string;
        babyCount: string;
        adventure: string;
    }

    interface Character {
        baseJob: string; // 직업군 ex)"마법사(여)"
        switching?: string; // 버프강화 ex)"10Lv 12"
        server: string; // 서버 ex)"hilder"
        setPoint: string; // 세트포인트 ex)"2765"
        advenInae: number; // 모험단 이내 클리어 수 ex)191
        adventrueName: string; // 모험단명 ex)"앎"
        ozma?: string; // 딜 ex)"501 억 4037 만" (없을 수도 있음)
        setname: string; // 장비세트 ex)"칠흑의 정화"
        advenDireHard: number; // 모험단 디레지에 하드 클리어 수 ex)6
        skillDamage: string; // ??? ex)"20.0"
        dire: number; // 캐릭터 디레지에 노말 클리어 수 ex)11
        name: string; // 캐릭터 이름 ex)"단비꺼"
        inae: number; // 캐릭터 이내 클리어 수 ex)26
        cri: string; // 크리티컬 ex)"158.8"
        fame: number; // 명성치 ex)81914
        job: string; // 직업 ex)"眞 배틀메이지"
        key: string; // 캐릭터ID ex)"f4e96a8fb11caeaa8707a44708497c08"
        advenDire: number; // 모험단 디레지에 노말 클리어 수 ex)93
        direHard: number; // 캐릭터 디레지에 하드 클리어 수 ex)2
        buffScore?: string; // 버프력/2인버프력 ex)"7,323,440"
        buffScore3?: string; //  3인버프력 ex)"6,737,305"
        buffScore4?: string; //  4인버프력 ex)"6,541,927"
    }
}
