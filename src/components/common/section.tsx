import { Container } from "@/components/common/container"
import { cn } from "@/lib/utils"

// 랜딩 페이지 등에서 사용하는 수직 간격이 일정한 섹션
export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-12 md:py-20", className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}
