# 개발 가이드

## 프로젝트 구조

```
Lilac/
├── src/
│   ├── components/     # React 컴포넌트
│   ├── hooks/         # 커스텀 React 훅
│   ├── lib/           # 라이브러리 설정 (axios 등)
│   ├── pages/         # 페이지 컴포넌트
│   ├── routes/        # 라우팅 설정
│   ├── stores/        # Zustand 상태 관리
│   ├── styles/        # 전역 스타일
│   ├── test/          # 테스트 설정 및 모킹
│   ├── utils/         # 유틸리티 함수
│   └── main.tsx       # 애플리케이션 진입점
├── .prettierrc        # Prettier 설정
├── .prettierignore    # Prettier 제외 파일
├── eslint.config.js   # ESLint 설정
├── vitest.config.ts   # Vitest 테스트 설정
├── vite.config.ts     # Vite 빌드 설정
└── package.json       # 프로젝트 의존성 및 스크립트
```

## 코드 품질 도구

### ESLint

- TypeScript 및 React 규칙 적용
- Prettier와 통합되어 코드 스타일 일관성 유지

```bash
# Lint 검사
pnpm lint

# Lint 검사 및 자동 수정
pnpm lint:fix
```

### Prettier

- 코드 포맷팅 자동화
- 세미콜론 없음, 싱글 쿼트 사용
- 80자 줄바꿈

```bash
# 코드 포맷팅
pnpm format

# 포맷 검사만 수행
pnpm format:check
```

## 테스트

### Vitest

- 빠른 단위 테스트 실행
- React Testing Library와 함께 사용
- jsdom 환경에서 실행

```bash
# 테스트 실행 (watch 모드)
pnpm test

# 테스트 한 번만 실행
pnpm test:run

# UI 모드로 테스트 실행
pnpm test:ui

# 커버리지 측정
pnpm test:coverage
```

### 테스트 작성 가이드

1. 파일명: `*.test.ts` 또는 `*.test.tsx`
2. 위치: 테스트할 파일과 같은 디렉토리
3. 예제:

```typescript
import { describe, it, expect } from 'vitest'

describe('함수명', () => {
  it('기대하는 동작을 설명', () => {
    expect(result).toBe(expected)
  })
})
```

## 개발 워크플로우

### 1. 개발 서버 시작

```bash
pnpm dev
```

개발 서버는 `http://localhost:5055`에서 실행됩니다.

#### API 프록시 설정

- `/api`로 시작하는 모든 요청은 API 서버로 프록시됩니다
- 기본 타겟: `http://localhost:3000`
- CORS 오류 방지를 위해 로컬 개발 시 프록시를 통해 API를 호출합니다
- `.env` 파일에서 `VITE_API_TARGET` 환경 변수로 타겟 서버를 변경할 수 있습니다

예제:
```typescript
// 프록시를 통한 API 호출
const response = await axios.get('/api/users') // → http://localhost:3000/api/users
```

### 2. 코드 작성

- TypeScript와 React의 최신 기능 활용
- 함수형 컴포넌트 사용
- ES6+ 문법 사용

### 3. 코드 검증

```bash
# Lint 검사
pnpm lint:fix

# 포맷팅
pnpm format

# 테스트 실행
pnpm test:run
```

### 4. 빌드

```bash
# 프로덕션 빌드
pnpm build

# 빌드 미리보기
pnpm preview
```

## 코딩 컨벤션

### TypeScript

- 명시적 타입 정의 사용
- `any` 타입 지양
- 인터페이스나 타입 별칭 적극 활용

### React

- 함수형 컴포넌트만 사용
- 커스텀 훅으로 로직 분리
- Props 타입 명시적 정의

### 스타일링

- SCSS 사용
- 모듈화된 컴포넌트별 스타일
- 전역 변수는 `src/styles/variables.scss`에 정의

## Git 커밋 메시지

커밋 메시지는 다음 형식을 권장합니다:

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 추가 또는 수정
chore: 빌드 작업, 패키지 매니저 설정 등
```

## 트러블슈팅

### ESLint 오류

```bash
pnpm lint:fix
```

### Prettier 포맷 문제

```bash
pnpm format
```

### 테스트 실패

1. 테스트 파일 확인
2. 모킹이 올바른지 확인
3. `src/test/setup.ts`에서 전역 설정 확인

## 유용한 링크

- [Vite 문서](https://vitejs.dev/)
- [Vitest 문서](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [ESLint 규칙](https://eslint.org/docs/rules/)
- [Prettier 옵션](https://prettier.io/docs/en/options.html)
