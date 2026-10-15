# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run format     # Prettier (src/**/*.{ts,tsx}, Tailwind 클래스 정렬 포함)
```

테스트 러너는 설정되어 있지 않습니다.

## 아키텍처

Next.js 16 App Router + React 19(React Compiler 활성) + Tailwind CSS v4 + shadcn/ui(`base-nova` 스타일, `@base-ui/react` 기반). `@/*`는 `src/*`로 매핑됩니다.

### 라우트 그룹별 레이아웃
`src/app/` 아래 라우트 그룹이 각각 다른 레이아웃을 가집니다. URL에는 그룹명이 나타나지 않습니다.
- `(marketing)` — 헤더/푸터: `/`, `/about`
- `(auth)` — 중앙 카드: `/login`, `/signup`
- `(dashboard)` — 사이드바: `/dashboard`

루트 `layout.tsx`가 `ThemeProvider`(next-themes), `TooltipProvider`, `Toaster`(sonner)를 감쌉니다. 전역 `error.tsx`, `loading.tsx`, `not-found.tsx`가 있습니다.

### 컴포넌트 계층 (`src/components/`)
하위 계층만 상위 계층을 import하는 구조를 유지합니다.
- `ui/` (L0) — shadcn 프리미티브. 직접 작성하지 말고 `npx shadcn@latest add <이름>`으로만 추가
- `common/` (L1) — Logo, Container, Section, PageHeader 등 공용 조합
- `layout/` (L2) — SiteHeader, SiteFooter, MobileNav, AppSidebar, AppHeader
- `sections/`, `auth/` (L3) — 페이지 단위 섹션과 폼

### 설정의 단일 출처
- 사이트 이름/설명/내비게이션: `src/config/site.ts` (`siteConfig`) — 헤더, 푸터, 메타데이터가 공유
- 테마 색상: `src/app/globals.css`의 `:root`, `.dark` CSS 변수
- 대시보드 메뉴: `src/components/layout/app-sidebar.tsx`의 `items`
- 인증은 미구현: `login-form.tsx`, `signup-form.tsx`의 `TODO` 위치에 연결

## 주의사항
- shadcn `base-nova`는 Radix의 `asChild` 대신 `render` prop을 사용합니다. 예: `<DropdownMenuItem render={<Link href="/" />}>`
- 이 Next.js 버전은 학습 데이터와 다르므로(위 AGENTS.md 참고) 코드 작성 전 `node_modules/next/dist/docs/`를 확인하세요. `LayoutProps<"/">` 같은 전역 타입 헬퍼를 사용합니다.
- 포맷: 들여쓰기 2칸, 세미콜론 없음, 큰따옴표 (`.prettierrc`)
