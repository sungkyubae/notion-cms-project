import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/common/container"
import { CopyCommand } from "@/components/sections/copy-command"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="py-16 md:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Next.js 16 · App Router</Badge>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          빠르게 시작하는 모던 웹 스타터킷
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          TypeScript, Tailwind CSS, shadcn/ui가 준비되어 있습니다. 레이아웃과
          공통 컴포넌트를 그대로 가져다 쓰세요.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/dashboard" className={buttonVariants({ size: "lg" })}>
            대시보드 보기
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
          <Link
            href="/about"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            더 알아보기
          </Link>
        </div>
        <CopyCommand command="npm run dev" />
      </Container>
    </section>
  )
}
