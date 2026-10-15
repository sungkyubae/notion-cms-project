import { Logo } from "@/components/common/logo"
import { ThemeToggle } from "@/components/common/theme-toggle"

// 인증 레이아웃: 화면 중앙에 폼 카드 배치
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center gap-6 p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Logo className="text-lg" />
      {children}
    </main>
  )
}
