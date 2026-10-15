// 사이트 전역 설정 (헤더, 푸터, 메타데이터에서 공유)
const mainNav = [
  { title: "홈", href: "/" },
  { title: "소개", href: "/about" },
  { title: "대시보드", href: "/dashboard" },
]

const footerNav = [
  { title: "로그인", href: "/login" },
  { title: "회원가입", href: "/signup" },
]

export const siteConfig = {
  name: "Next Starter",
  description:
    "Next.js 16, TypeScript, Tailwind CSS, shadcn/ui로 만든 모던 웹 스타터킷",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  mainNav,
  footerNav,
  // 모바일 메뉴, 푸터에서 사용하는 전체 내비게이션
  allNav: [...mainNav, ...footerNav],
  loginHref: "/login",
}

export type NavItem = (typeof siteConfig.mainNav)[number]
