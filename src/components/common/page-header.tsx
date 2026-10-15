import { cn } from "@/lib/utils"

interface PageHeaderProps extends Omit<React.ComponentProps<"div">, "title"> {
  title: string
  description?: string
}

// 페이지 상단 제목 + 설명 영역
export function PageHeader({
  title,
  description,
  className,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      )}
      {children}
    </div>
  )
}
