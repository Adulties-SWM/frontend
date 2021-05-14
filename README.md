# 🏥 응급의료기관 조회 서비스

## 기획의도

응급의료기관을 조회할 수 있는 지도 기반 서비스입니다.

사용자의 위치에서 가까운 순서대로 "현재 진료가 가능한" 병원을 찾아줍니다.

진료과목, 남은 병상 수 등을 조회할 수 있기 때문에 환자가 긴박한 상황에서 헛걸음하는 일을 최소화합니다.



## 기능

- 현재 위치 주변의 응급의료기관을 조회합니다.

  - 현재 위치 기준, n미터 이내에 위치한 병원 조회
  - 해당 시간에 진료가 가능한 병원 조회
  - 해당 증상의 진료가 가능한 병원 조회

- 00시 00구 내에 있는 응급의료기관 조회

  - 해당 시간에 진료가 가능한 병원 조회
  - 해당 증상의 진료가 가능한 병원 조회

  

  *병원 정보엔 병상 수, 입원실 및 응급실 가용 여부가 포함돼 있습니다.

## 화면구성

<img src="https://github.com/Adulties-SWM/frontend/blob/main/public/mainPage.png">
<img src="https://github.com/Adulties-SWM/frontend/blob/main/public/mainPage2.PNG">
<img src="https://github.com/Adulties-SWM/frontend/blob/main/public/modal.PNG">

## 개발환경
groom IDE환경에서 node.js, express, react로 개발했습니다. 
- front-end 사용 라이브러리 
  ```
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "antd": "^4.15.5",
    "axios": "^0.21.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.0",
    "web-vitals": "^1.0.1"
  ```
## 실행방법
- front-end 실행방법
  ```
  $ yarn
  $ yarn start
  ```
## 팀원소개

- Front  End
  - 김정욱
  - 정승욱
  - 현주희
- Back End
  - 김가영
  - 박찬규
  - 이선노 


## backend repository
```
https://github.com/Adulties-SWM/backend
```
