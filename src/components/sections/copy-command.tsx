"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import { toast } from "sonner"
import { useCopyToClipboard } from "usehooks-ts"

import { Button } from "@/components/ui/button"

// 명령어 복사 버튼 (usehooks-ts + sonner 토스트)
export function CopyCommand({ command }: { command: string }) {
  const [copiedText, copy] = useCopyToClipboard()
  const copied = copiedText === command

  const handleCopy = async () => {
    const ok = await copy(command)
    if (ok) toast.success("클립보드에 복사했습니다")
    else toast.error("복사에 실패했습니다")
  }

  return (
    <div className="bg-muted flex items-center gap-2 rounded-lg border py-1 pr-1 pl-4 font-mono text-sm">
      <span className="text-muted-foreground">$</span>
      <span>{command}</span>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={handleCopy}
        aria-label="명령어 복사"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  )
}
