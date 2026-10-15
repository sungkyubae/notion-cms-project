# 매매 일지 블로그

Notion을 CMS로 활용한 개인 주식 매매 기록 공개 블로그입니다. 매수·매도 내역과 매매 근거를 Notion에 기록하면 웹에 타임라인 형태로 자동 게시되어, 투자 판단을 돌아보고 복기하는 데 활용할 수 있습니다.

- 매매 기록 목록: 공개 처리된 기록을 최신순 카드로 표시하고 매수/매도로 필터링
- 매매 기록 상세: Notion 페이지 본문(매매 근거, 차트 이미지, 메모)을 블록 단위로 렌더링
- ISR(60초)로 Notion 수정 내용 자동 반영

자세한 요구사항은 [docs/PRD.md](docs/PRD.md)를 참고하세요. (현재 Notion 연동은 구현 전이며, 기반 스타터킷만 구성된 상태입니다.)

## 기술 스택

Next.js 16(App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react, Notion API(`@notionhq/client`, 예정)

## 시작하기

```bash
npm install
npm run dev
```

Notion 연동 시 `.env.local`에 다음 값이 필요합니다. (구현 후 적용)

```bash
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

| 스크립트 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run lint` | ESLint 검사 |
| `npm run typecheck` | 타입 검사 |
| `npm run format` | Prettier 포맷 (Tailwind 클래스 정렬 포함) |

## 사용 라이브러리

| 용도 | 라이브러리 |
|---|---|
| 다크모드 | `next-themes` |
| 토스트 | `sonner` |
| 폼 / 검증 | `react-hook-form`, `@hookform/resolvers`, `zod` |
| 커스텀 훅 | `usehooks-ts` |
| 날짜 / 커맨드 | `react-day-picker`, `date-fns`, `cmdk` (shadcn 컴포넌트 의존성) |
| UI 프리미티브 | `@base-ui/react` (shadcn base-nova 스타일) |

## 폴더 구조와 컴포넌트 계층

```
src/
  app/
    (marketing)/   헤더 + 푸터 레이아웃: /, /about
    (auth)/        중앙 카드 레이아웃: /login, /signup
    (dashboard)/   사이드바 레이아웃: /dashboard
  components/
    ui/            L0 shadcn 프리미티브 (CLI로만 추가)
    common/        L1 공용 조합: Logo, Container, Section, PageHeader, EmptyState, ThemeToggle, UserMenu
    layout/        L2 레이아웃: SiteHeader, SiteFooter, MobileNav, AppSidebar, AppHeader
    sections/      L3 페이지 섹션: Hero, FeatureGrid, CopyCommand
    auth/          L3 폼: LoginForm, SignupForm
    providers/     ThemeProvider
  config/site.ts   사이트 이름, 설명, 메뉴 (단일 설정)
  hooks/           use-mobile (usehooks-ts 기반)
```

## 자주 하는 작업

- **사이트 이름·메뉴 변경**: `src/config/site.ts`
- **테마 색상 변경**: `src/app/globals.css`의 `:root`, `.dark` CSS 변수
- **컴포넌트 추가**: `npx shadcn@latest add <이름>`
- **대시보드 메뉴 추가**: `src/components/layout/app-sidebar.tsx`의 `items`
- **인증 연동**: `login-form.tsx`, `signup-form.tsx`의 `TODO` 위치에 실제 로직 연결

## 참고

- 이 프로젝트의 Next.js는 학습 데이터와 다를 수 있습니다. 코드를 작성하기 전에 `node_modules/next/dist/docs/`를 확인하세요.
- shadcn base-nova 스타일은 Radix의 `asChild` 대신 `render` prop을 사용합니다. 예: `<DropdownMenuItem render={<Link href="/" />}>`
