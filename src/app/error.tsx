"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"

// 라우트 세그먼트 에러 경계
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  // 에러 리포터 연동 전까지 콘솔에 기록
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-bold tracking-tight">문제가 발생했습니다</h1>
      <p className="text-muted-foreground">
        {error.digest
          ? `오류 코드: ${error.digest}`
          : "잠시 후 다시 시도해 주세요."}
      </p>
      <Button onClick={() => retry()}>다시 시도</Button>
    </main>
  )
}
