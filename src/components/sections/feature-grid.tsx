import {
  LayoutDashboardIcon,
  MoonIcon,
  PaletteIcon,
  PuzzleIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react"

import { Section } from "@/components/common/section"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  {
    icon: ZapIcon,
    title: "Next.js 16 App Router",
    description:
      "서버 컴포넌트와 React Compiler가 기본으로 활성화되어 있습니다.",
  },
  {
    icon: PaletteIcon,
    title: "Tailwind CSS v4",
    description: "CSS 변수 기반 테마로 색상과 라운드를 한 곳에서 관리합니다.",
  },
  {
    icon: PuzzleIcon,
    title: "shadcn/ui 컴포넌트",
    description: "자주 쓰는 UI 컴포넌트가 우선순위별로 미리 설치되어 있습니다.",
  },
  {
    icon: MoonIcon,
    title: "다크 모드",
    description:
      "next-themes로 깜빡임 없는 라이트/다크/시스템 테마를 지원합니다.",
  },
  {
    icon: LayoutDashboardIcon,
    title: "레이아웃 3종",
    description:
      "마케팅, 인증, 대시보드 레이아웃을 라우트 그룹으로 분리했습니다.",
  },
  {
    icon: ShieldCheckIcon,
    title: "폼 검증",
    description: "react-hook-form과 zod로 타입 안전한 폼을 만듭니다.",
  },
]

export function FeatureGrid() {
  return (
    <Section>
      <div className="mb-10 flex flex-col gap-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">주요 기능</h2>
        <p className="text-muted-foreground">
          검증된 라이브러리 위에 필요한 것만 담았습니다.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="text-primary mb-2 size-6" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  )
}
