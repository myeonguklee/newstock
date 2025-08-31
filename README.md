# Newstock
뉴스와 함께 하는 똑똑한 투자! “**NewStock**”

경제 뉴스로 투자 안목을 키우고, 모의 투자로 실전 감각까지 다지는 빅데이터 플랫폼

`SSAFY 11th 빅데이터(분산) PJT`

`개발기간: 24.08.26 ~ 24.10.11 (7주)`

## [프로젝트 전체 리드미](https://github.com/ssafy-newstock/newstock)

![image (21).png](Picture/blueLogo.png)

## 목차

1. [주요 기능](#-주요-기능)
2. [개발 사항](#-개발-사항)
3. [AI, 빅데이터 서비스 최적화](#-AI,-빅데이터-서비스-최적화)
4. [기술 스택](#-기술-스택)
5. [배운점](#-배운점)

## 🔍 주요기능

### 📌 뉴스 제공 기능

    - Newstock은 경제 뉴스를 "시황 뉴스"와 "종목 뉴스"로 구분하여 제공합니다.
      - 시황 뉴스: 경제와 금융 시장의 거시적인 흐름을 보여주는 뉴스
      - 종목 뉴스: 특정 기업이나 종목의 실적, 이슈와 관련된 뉴스
    - 감정 분석 기술을 통해 뉴스가 긍정적인지 부정적인지를 파악하여 사용자가 더 나은 투자 결정을 할 수 있도록 지원합니다.

### 📌 모의 투자 기능

    - 실제 주식 시장 데이터를 기반으로 가상 포인트를 사용해 모의 투자를 할 수 있습니다.
    - 차트 검색 기능: 사용자가 설정한 기간의 뉴스와 시황을 자동으로 분석 및 요약하여 복잡한 시장 정보를 한눈에 파악할 수 있습니다.
    - 차트 유사도 분석: 과거 주가 패턴과 유사한 차트를 찾아 제공하며, 당시의 뉴스와 시황도 요약해서 보여줍니다.

### 📌 편의 기능

    - 스크랩 기능: 원하는 뉴스를 저장할 수 있습니다.
    - AI 챗봇 기능: 검색 증강 생성을 활용해 필요한 정보를 빠르게 찾을 수 있도록 돕습니다.
    - 랭킹 시스템: 모의 투자에서 높은 수익을 기록한 사용자를 위한 게이미피케이션 요소를 추가했습니다.

</div>

## 💻 개발 사항
### 비용 효율성 개선 및 성능 최적화
- Tanstack query 도입, 캐싱 전략 구현으로 LLM 활용한 **API 호출 최적화** 및 **토큰 비용 30% 감소** (주식 차트 분석, 주식 차트 유사도 검색, 뉴스 요약하기 기능)
- 스켈레톤 UI 및 선언적 데이터 관리로 로딩 상태 개선
- 주식 종목 검색 기능 디바운싱 적용으로 불필요한 **API 호출 방지 및 서버 부하 감소**

### 주식 관련 기능 개발
- 실시간 -> 선, 월봉 -> 캔들 차트 시각화로 **직관적인 주가 데이터 전달**
- 웹소켓을 이용한 실시간 주가 정보 제공
- 낙관적 업데이트(찜), 실시간 데이터 동기화(모의 주식)으로 **사용자 경험 향상**
- 모의 주식 서비스 및 투자 랭킹 구현으로 **게이미피케이션 학습 경험** 제공

### AI, 빅데이터 기반 서비스 최적화
- AI 분석 기능의 긴 응답 시간을 고려한 프리페칭, 캐싱으로 **사용자 체감 대기 시간 단축**
- 챗봇 UI 구현으로 **자연스러운 AI 상호작용 경험** 제공
- 전역 상태 관리(Zustand) 및 서버 상태 관리(Tanstack Query)로 뉴스, 주식 빅데이터 효율적 관리

### 기능 GIF
#### 3줄 요약
![뉴스 3줄 요약](https://github.com/user-attachments/assets/606c9b8f-2c2d-4e93-94a5-d0cbc04fd307)
#### 실시간 주식
![실시간 주식](https://github.com/user-attachments/assets/47b83be1-db0e-4f6a-a233-98dba04666b2)
#### 모의투자
![모의투자 시연](https://github.com/user-attachments/assets/6ba45a95-e09b-43e1-9752-925b71df52cf)
#### 차트 분석
![차트 분석](https://github.com/user-attachments/assets/3bb6bb4b-f9fb-4464-82b1-500fcdde59e8)
#### 유사도 검색
![유사도 검색](https://github.com/user-attachments/assets/c7163cad-a366-4dcd-bdd5-9a685093d8c8)

<details>
 <summary><strong>📢 페이지 상세설명</strong></summary>

![슬라이드1](https://github.com/user-attachments/assets/1df70413-bf55-41b4-b995-793408a4c348)
![슬라이드3](https://github.com/user-attachments/assets/94f80a2e-9627-4f34-b4e1-8e28945e64ea)
![슬라이드4](https://github.com/user-attachments/assets/197f1d85-b89a-41d8-adce-ef2b6d68bd69)
![슬라이드5](https://github.com/user-attachments/assets/43cd32f5-0853-4211-a2f2-e8275ca466d4)
![슬라이드6](https://github.com/user-attachments/assets/022e74e8-c8b7-4559-8375-e2cd27ab4534)
![슬라이드7](https://github.com/user-attachments/assets/0bbedc6b-24dc-435c-8c51-5588314e1e95)
![슬라이드8](https://github.com/user-attachments/assets/b2367e93-dde8-406b-a43c-db00aca7b143)
![슬라이드9](https://github.com/user-attachments/assets/240c4188-bc96-406e-9248-bdb1e5ece431)
![슬라이드10](https://github.com/user-attachments/assets/d1396b0b-90f2-4247-b199-f6e6cc3bf2ba)
![슬라이드11](https://github.com/user-attachments/assets/5ed9f75f-67ae-4f54-9d04-98075d9bf8ab)
![슬라이드15](https://github.com/user-attachments/assets/a75a9b8b-4d5c-46e4-b1ff-04568ae3c2ea)

</details>

<details>
 <summary><strong>📢 기능 시연 영상</strong></summary>

#### 주식 기능-1
https://github.com/user-attachments/assets/85e95ce5-fd05-4e6d-b0d1-77e6d3392a21

#### 주식 기능-2
https://github.com/user-attachments/assets/22e0ecf8-2faa-436d-af34-8a998cb39291

#### 다크모드
https://github.com/user-attachments/assets/8b02bdad-dfdf-4164-9f63-8914ff309622

</details>

## 🤖 AI, 빅데이터 서비스 최적화

### 문제점 및 목표
![LLM 서비스](https://github.com/user-attachments/assets/a48380fb-1b33-4ed5-a84e-299afe43223e)
LLM을 사용하는 API 기능 연동 후 예상보다 **LLM 토큰 비용이 급증 하는 문제**가 생겼습니다. 또한, 이러한 AI 분석 기능들은 **긴 응답 시간으로 사용자 경험이 저하 되는 문제**를 함께 야기했습니다.

5 년간의 뉴스 데이터와 코스피 전 종목 주식 데이터를 다루다보니 **빅 데이터를 효율적으로 관리해야 하는 필요성**이 있었습니다.

### 문제 해결 과정
#### 1. 비용 효율성 개선 및 로딩 경험 개선
TanstackQuery 도입으로 **API 응답 데이터 캐싱**하여 LLM을 사용하는 기능의 API 호출 횟수를 줄일 수 있었습니다. 또한 주식 종목 검색시 디바운싱으로 추가적인 **API 호출을 최소화**하고 데이터 캐싱, suspense, 스켈레톤 UI 적용으로 로딩 경험을 개선했습니다.

#### 2. 상태 관리 전략
- 웹소켓을 통해 전달받은 실시간 주가 정보는 zustand로 전역 상태 관리하였습니다. 서비스의 뉴스와 주식이라는 두 가지 섹션에서 실시간 공유를 할 수 있었으며 하나의 웹소켓 채널 활용으로 **일관된 정보**를 전달할 수 있었습니다.

  ![상태관리](https://github.com/user-attachments/assets/1b4d55fc-e890-442c-a18b-11d7a2f882d8)

- 서버에 저장된 뉴스 데이터 및 주식 데이터는 Tanstack Query를 활용하여 효율적인 서버 상태 관리 및 캐싱 전략을 적용하였습니다.

### 성과
- **LLM 토큰 비용 30% 감소**로 운영 비용 절감
- **사용자 체감 대기 시간 단축** 및 효율적인 빅데이터 관리로 사용성 향상

## 🛠 기술 스택

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React-Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled-Component](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

### 기술 선정 이유
- Tanstack Query : 5년간의 뉴스 데이터 수집 및 활용, 코스피 전종목 주식 데이터를 메모리에 캐싱하여 데이터를 효율적으로 관리하고 최적화된 사용자 경험을 제공할 수 있을 것이라고 기대함
- Typescript : 첫번째 프로젝트에서 Javascript를 사용하면서 겪었던 런타임 에러를 컴파일 시점에서 에러를 예방하고 수정하고자 Typescript를 도입함
- styled-component : CSS-in-JS 방식으로 컴포넌트와 스타일을 함께 관리하여 재사용성과 유지보수성을 향상시키고 다크/라이트 모드를 구현하는 데 ThemeProvider를 활용하여 효율적이고 일관적인 UI를 구현할 수 있을 것이라 생각함

## 📚 배운점

### 사용자 경험에 대한 고려
- 뉴스, 주식 데이터 캐싱으로 사용자 편의성 향상
- 스켈레톤 UI와 선언적 데이터 관리를 통해 로딩, 에러 측면에서 사용자에게 일관된 경험 제공

### 깃랩 이슈 관리 및 코드 리뷰 활성화
- 협업 과정에서의 미숙함, 기능을 구현에만 치중하여 유지 보수성을 고려하지 못한 코드 작성에 대한 아쉬움 해소
- 팀원의 개인적인 이슈로 역할 재분담이 필요한 상황에서 많은 도움이 됨
