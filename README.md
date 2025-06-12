# Bootup 2nd Round - 3조

---

## 시작하기

### 1. 개발 서버 실행

```
# 처음 시작한다면
pnpm install

# 루트 위치에서
pnpm run dev
```

### 2. 스토리북 실행

```
cd packages/ui
pnpm run storybook
```

⚠️ 반드시 스토리북 실행 전에 개발 서버 구동할 것

## 기술스택

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- Build System: Turborepo (Monorepo)
- Package manager: pnpm

## 프로젝트 구조

```
KFE3-bootup-2DooGoBoJa
├─ apps                           # 웹 어플리케이션
├─ packages                       # 공통 UI 라이브러리
│  └─ ui
│     ├─ .storybook/
│     └─ src
│        ├─ design-system/
│        │  ├─ base-components
│        │  │  ├─ Avatar/
│        │  │  ├─ Badge/
│        │  │  ├─ Card/
│        │  │  └─ Input/
│        │  └─ design-tokens/
│        │     ├─ Colors.stories.tsx
│        │     ├─ Typography.stories.tsx
│        │     ├─ colors.ts
│        │     ├─ index.ts
│        │     └─ typography.ts
│        ├─ global.css
│        └─ utils
│           └─ cn.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
└─ turbo.json

```

### 히스토리

- 부트업 1차 (7일) : 2조
- 부트업 2차 (3일) : 3조 (노금영/신혜진/윤태호/이윤경/이준구)

### 목적

- **기존 구조 변경 및 개선 진행**
- 다른 팀의 작업을 수정한 이유, 개선된 점, 적용한 설계 원칙 공유

### 배경 및 진행 흐름

- 설계 원칙 추가(Atomic Design 기반 원칙 + ⍺ )
- 코딩 컨벤션, 파일명 컨벤션, eslint 및 prettier 규칙 설정
  - [🔗[Bootup2] 3조 Notion에서 자세히 보기](https://www.notion.so/20da3f519ab88093b92ad2595392e2af?pvs=21)
- **스토리북 메뉴 구조를 고려한** 기존 폴더구조 변경
- 디자인 시스템 파일에 사용할 next.js tailwindcss 설정 (3일 중 2일 소요)
- 컴포넌트 개선하기

### 3조

| [<img src="https://avatars.githubusercontent.com/u/136447530?v=4" width="150" height="150"/>](https://github.com/geumyoung00) | [<img src="https://avatars.githubusercontent.com/u/27764950?s=400&u=07e0fe49d204a77b0814e7f126cda53b6fc97fd1&v=4" width="150" height="150"/>](https://github.com/clara-shin) | [<img src="https://avatars.githubusercontent.com/u/84884775?v=4" width="150" height="150"/>](https://github.com/YunTaeHo) | [<img src="https://avatars.githubusercontent.com/u/94545944?v=4" width="150" height="150"/>](https://github.com/ktoo23) | [<img src="https://avatars.githubusercontent.com/u/145527618?v=4" width="150" height="150"/>](https://github.com/LeeJunGoo) |
| :---------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
|                                                            노금영                                                             |                                                                                    신혜진                                                                                    |                                                          윤태호                                                           |                                                         이윤경                                                          |                                                           이준구                                                            |
|                                        [@geumyoung00](https://github.com/geumyoung00)                                         |                                                                 [@clara-shin](https://github.com/clara-shin)                                                                 |                                         [@YunTaeHo](https://github.com/YunTaeHo)                                          |                                          [@ktoo23](https://github.com/ktoo23)                                           |                                         [@LeeJunGoo](https://github.com/LeeJunGoo)                                          |
