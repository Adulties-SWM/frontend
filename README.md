# 🏥 응급의료기관 조회 서비스

## 기획의도

응급상황이 발생해 응급의료기관을 가야하는 경우가 언제든지 발생할 수 있습니다.

이때 어느 응급의료기관을 가야할지를 빠르게 파악하는것이 중요합니다.

이를 위해 응급의료기관을 알려주는 서비스 다수 존재하지만 응급의료기관이 아닌곳을 보여주거나, 진료가 가능하지 않는 응급의료기관을 보여주기도 합니다.

특히 코로나시대인 지금, 응급실에서 코로나 발생하면 응급실 사용 불가 , 수술실 폐쇄되기에 빠르게 진료가능여부 확인이 필요하다는 문제가 발생합니다.

이 프로젝트는 위 사회문제를 해결해주는 **응급의료기관을 조회할 수 있는 지도 기반 서비스**입니다.

## 기능

- 현재 위치/시군구 위치 기반으로 존재하는 응급의료 기관을 마커로 표시하는 기능
- 현재 진료 가능 기관, 거리순 등으로 필터링 해 원하는 응급의료기관만을 확인하는 기능
- 병상수, 응급실 입원가능 여부 등의 응급의료기관에 대한 자세한 정보를 보여주는 기능

## 세부 기능
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
