# OnStyle

React + TypeScript + Vite + pnpm + Zustand 기반 프로젝트

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **pnpm** - 패키지 매니저
- **Zustand** - 상태 관리
- **React Router DOM** - 클라이언트 사이드 라우팅
- **SCSS** - 스타일링
- **Axios** - HTTP 클라이언트
- **TanStack Query** - 서버 상태 관리
- **vite-plugin-svgr** - SVG를 React 컴포넌트로 import

## 시작하기

### 패키지 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

개발 서버는 `http://localhost:5055`에서 실행됩니다.

### 빌드

```bash
pnpm build
```

### 프리뷰

```bash
pnpm preview
```

## 프로젝트 구조

```
src/
├── components/         # 재사용 가능한 컴포넌트
│   └── layout/        # 레이아웃 컴포넌트 (Navigation, Layout)
├── pages/             # 페이지 컴포넌트
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ExamplePage.tsx
│   └── NotFoundPage.tsx
├── routes/            # 라우터 설정
│   └── index.tsx
├── hooks/             # 커스텀 훅
├── lib/               # 라이브러리 설정 (axios 등)
├── stores/            # Zustand 스토어
├── styles/            # 전역 스타일 및 변수
│   ├── global.scss
│   └── variables.scss
└── main.tsx
```

## 주요 기능

### 라우팅

React Router DOM v7을 사용한 선언적 라우팅:

```tsx
// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      // ...
    ],
  },
])
```

### 네비게이션

`NavLink`를 사용한 활성 링크 스타일링:

```tsx
<NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? 'active' : ''}
>
  소개
</NavLink>
```

### SCSS 전역 변수

`variables.scss` 파일의 변수는 모든 SCSS 파일에서 자동으로 사용 가능합니다.

```scss
.my-component {
  color: $primary-color;
  padding: $spacing-md;
}
```

### SVG Import

SVG 파일을 React 컴포넌트로 import할 수 있습니다:

```tsx
import Logo from '@/assets/logo.svg?react'

const Component = () => <Logo className="icon" />
```

### Path Alias

`@` 별칭을 사용하여 src 폴더를 참조할 수 있습니다:

```tsx
import Component from '@/components/Component'
import { useStore } from '@/stores/useStore'
import { useCustomHook } from '@/hooks/useCustomHook'
```

### API 호출

TanStack Query와 Axios를 사용한 API 호출:

```tsx
import { useExampleQuery, useCreateExample } from '@/hooks/useExample'

const Component = () => {
  const { data, isLoading } = useExampleQuery()
  const createMutation = useCreateExample()
  
  // ...
}
```

### 상태 관리

Zustand를 사용한 전역 상태 관리:

```tsx
import { useExampleStore } from '@/stores/useExampleStore'

const Component = () => {
  const { count, increment } = useExampleStore()
  
  return <button onClick={increment}>{count}</button>
}
```

## 라우트 구조

- `/` - 홈 페이지
- `/about` - 소개 페이지
- `/example` - 예시 페이지 (Zustand + SVG 활용)
- `/404` - 404 에러 페이지
- `/*` - 존재하지 않는 경로는 자동으로 `/404`로 리다이렉트

## 환경 변수

`.env.example` 파일을 `.env`로 복사하여 환경 변수를 설정하세요:

```bash
cp .env.example .env
```

## 레이아웃 구조

모든 페이지는 `Layout` 컴포넌트로 감싸져 있으며, 다음 요소를 포함합니다:

- **Navigation** - 상단 네비게이션 바 (sticky)
- **Main Content** - 페이지별 콘텐츠 영역
- **Footer** - 하단 푸터

## 스타일 가이드

### 반응형 디자인

SCSS 변수로 정의된 브레이크포인트를 사용:

```scss
@media (max-width: $breakpoint-tablet) {
  // 태블릿 이하
}

@media (max-width: $breakpoint-mobile) {
  // 모바일
}
```

### 색상 팔레트

- `$primary-color` - 주요 색상
- `$secondary-color` - 보조 색상
- `$text-color` - 텍스트 색상
- `$background-color` - 배경 색상
- `$border-color` - 테두리 색상

### 간격 시스템

- `$spacing-xs` ~ `$spacing-xxl` - 일관된 간격 시스템
