import { Container } from "@/components/common/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <Container className="flex flex-col gap-4 py-12">
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-40 w-full" />
    </Container>
  )
}
