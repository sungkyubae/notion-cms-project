import { cn } from "@/lib/utils"

interface EmptyStateProps extends Omit<React.ComponentProps<"div">, "title"> {
  icon?: React.ReactNode
  title: string
  description?: string
}

// 데이터가 없을 때 보여주는 빈 상태 UI
export function EmptyState({
  icon,
  title,
  description,
  className,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-10 text-center",
        className
      )}
      {...props}
    >
      {icon && <div className="text-muted-foreground">{icon}</div>}
      <h3 className="font-medium">{title}</h3>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
      {children}
    </div>
  )
}
