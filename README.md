# DUNCOP
<img width="1920" height="953" alt="image" src="https://github.com/user-attachments/assets/1ef2c9c7-03bd-4f6b-8321-4bdef4eed0e2" />

### DUNDAM 기반 벞교 컷 확인 서비스
[🔗 DUNCOP 바로가기]("duncop.xyz")

## 프로젝트 개요
**DUNCOP(던캅)** 은
던전앤파이터 유저들이 벞교(버프 교환) 파티를 구성할 때 발생하는 문제를 해결하기 위해 만들어진 서비스입니다.<br/>
던전앤파이터 유저들은 일반적으로 DUNDAM(던담) 데이터를 기준으로 캐릭터의 전투력(딜/버프력)을 확인한 뒤 구인·구직을 진행합니다.

하지만 기존 방식에는 몇 가지 한계가 존재합니다:
1. 던담에서 여러 캐릭터를 직접 확인해야 하므로, 해당 모험단이 컷 이상의 캐릭터를 충분히 보유하고 있는지 한눈에 파악하기 어려움
2. 과거에 비매너 행동(컷 미달 잠입, 업둥이 먹튀 등)을 했던 유저를 사전에 확인하기 어려움

이러한 문제를 해결하기 위해 DUNCOP은 던담 기반 전투력 데이터와 자체 신고 DB를 결합하여 다음과 같은 기능을 제공합니다:
1. 입력한 딜러컷 / 버퍼컷 충족 여부 검증
2. 신고 및 박제 이력 기반 불량 유저 식별

### 📅 개발 기간
2026.02.02 ~ 진행중

### 🛠 기술 스택
| 항목       | 사용 기술                                                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | ![Next](https://img.shields.io/badge/Next-20232a?style=flat&logo=next.js&logoColor=ffffff) + ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| Language       | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)                                                                            |
| Database | ![Supabase](https://img.shields.io/badge/Supabase-3ecf8e?style=flat&logo=supabase&logoColor=white)                                                                                     |
| Style     | ![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwind-css&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide-f56565?style=flat&logo=lucide&logoColor=white)   |
| Deploy     | ![Vercel](https://img.shields.io/badge/Vercel-20232a?style=flat&logo=vercel&logoColor=white)                                                                      |
| Analysis  | ![Google Analytics](https://img.shields.io/badge/Google_Analytics-e37808?style=flat&logo=google-analytics&logoColor=white) |

<br/>

## 주요 기능
### 🔍 모험단 검색
![chrome-capture-2026-2-21](https://github.com/user-attachments/assets/cf953e9a-871d-4ece-85c1-db433d0ad76d)

검색창에 아래 내용을 입력한 뒤 검색을 진행합니다:
- 딜러컷
- 버퍼컷
- 딜러 수
- 버퍼 수
- 파티 타입(실질적 파티 인원 수)
- 모험단명

검색 결과에는 다음 정보가 출력됩니다:
- 모험단명
- 시민상 / 전과자 뱃지 (Optional)
  - 전과자 뱃지가 존재할 경우 컷 통과 여부와 무관하게 경고 표시
- 컨텐츠 클리어 수
  - 이내, 디레지에, 악연
- 컷 통과 여부 인디케이터
- 컷 만족 딜러, 컷 만족 버퍼 수
- 컷 만족 캐릭터 정보 리스트
  - 이름
  - 시너지 여부 (Optional)
  - 직업
  - 전투력 (딜, 버프력)
    - 파티 타입에 따라 전투력이 변동되는 "무리 사냥의 길잡이" 세트 딜러, 인챈트리스는 선택한 파티 타입에 맞게 전투력이 계산됨
  - 명성치

### 🚨 벞교 불량유저 신고
<img width="1920" height="1366" alt="image" src="https://github.com/user-attachments/assets/8eb8f5d6-4e7d-4c91-aee6-2f4ea91396be" />

벞교 불량 유저를 직접 신고할 수 있습니다.

입력 정보는 다음과 같습니다:
- 피신고자 서버, 캐릭터 이름, 모험단 이름
- 상황 설명, 증빙 이미지
- 신고자 정보 (Optional)

신고된 내용은 검토 후 뱃지가 부여됩니다.
