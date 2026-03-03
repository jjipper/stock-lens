# Stock-Lens

이슈를 통해 주식 흐름을 이해하는 **주식 뉴스 네비게이터**

## 0. 기록 (velog) - 연재 중, 작성 후 링크 연결 예정

#### 왕초보 프론트의 프로젝트 제작기 (React + TS)

1. [삐약 개발자의 첫 개인 프로젝트 만들기 (React + TS)
   ](https://velog.io/@jjipper/stock-lens-1)
2. [눈앞이 막막할 땐 폴더부터 만들자: 10번 갈아엎은 FSD 적용기
   ](https://velog.io/@jjipper/stock-lens-2)
3. 스타일링 선택 기록: CSS, SCSS, styled-components, Tailwind 비교
4. 내 노트북에선 멀쩡한 게 왜 거기선 깨지지? 폰트 FOUT 현상 추적기
5. 진짜 어려운 TypeScript 돌파하기: 프로젝트에서 바로 쓰는 타입 기초
6. React Router로 레이아웃 잡기: 중첩 라우트와 Outlet
7. History API로 이해하는 라우팅: 뒤로가기/딥링크가 꼬이는 이유
8. MSW로 서버 흉내 내기: JSON Server와 비교하며 목데이터 파이프라인 만들기
9. fetch로 시작해서 구조화로 넘어가기: 에러/로딩/중복 요청/취소(Abort)
10. ...
<!-- 11. “Fallback”을 어디에 둘까: 로딩/에러/빈 상태 UI를 일관되게 만들기
11. 입력 UX 디테일: isComposing으로 한글 입력 버그 피하기
12. 전역 상태를 어디까지 둘까: Context API와 서버 상태(캐시) 분리 기준
13. axios + TanStack Query로 데이터 레이어 고정하기: queryKey 설계와 무효화 전략
14. 가독성 좋은 파일 구성 실험: Public API, index(barrel) 사용 기준 세우기
15. URL이 모달을 연다: ?newsId= 딥링크 모달, 뒤로가기, 스크롤 락
16. 무한 스크롤 실전: 경계 조건, 중복 데이터, 스크롤 위치 유지
17. 사용자 피드백을 UI로: 스낵바/에러 UX를 어디서 어떻게 보여줄까
18. 회고 -->

## 1. 서비스 개요

- 서비스 목표 : 시장 이슈와 연관 지어 주식 정보를 빠르게 훑어볼 수 있는 서비스
- 개인 목표 : 모달, 무한 스크롤 적용한 리액트 프로젝트 제작
- 기술 스택 : React, Vite, TypeScript, Tailwind CSS, MSW, Axios, TanStack Query

## 2. Demo (완성 후 업데이트 예정)

<img src="./public/images/demo.gif">

## 3. Roadmap / TODO

### ✅ 완료

- FSD 폴더 구조 만들기
- 라우터 연결(React Router)
- 컴포넌트 제작 및 조합하여 페이지 구성하기
- 스타일 마이그레이션 (styled-components → Tailwind CSS)
- MSW 서버에 목데이터 만들기
- MSW 기반 데이터 연결 및 화면 구현

### 〰️ 작업중

- 뉴스 상세 모달 구현 (뒤로가기 눌렀을 때 상태 유지되도록)
- 모달과 겹치는 스낵바 구현
- 무한스크롤 구현

### 🪽 추가하고 싶은 기능

- 뉴스 크롤링 / 뉴스 AI 요약 / 주식 차트 핸들링

## 4. Project Structure (FSD)

```txt
src/
  features/    # 전체를 기능 단위로 분류
    app/        # 앱 관련 기능 (Provider, Router 엔트리 등)
    Issues/     # Issue 관련 컴포넌트 파일
    layout/     # Layout 관련 파일 (MainLayout, Header 등)
    pages/      # 라우트 단위 페이지
    shared/     # 공용(UI, styles)
    Stocks/     # Stocks 관련 컴포넌트 파일
  mocks/       # msw 목데이터
```

## 5. Getting Started

### Requirements

- Node.js / pnpm

### Install & Run

```
pnpm install
pnpm dev
```

- 브라우저: http://localhost:5173/

## 6. Scripts

```
pnpm dev
pnpm build
pnpm preview
```
