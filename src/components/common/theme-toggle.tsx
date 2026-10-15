"use client"

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useIsClient } from "usehooks-ts"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// 라이트 / 다크 / 시스템 테마 전환 메뉴
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // 서버에서는 저장된 테마를 알 수 없으므로 클라이언트에서만 선택값 표시
  const isClient = useIsClient()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" aria-label="테마 변경" />}
      >
        <SunIcon className="dark:hidden" />
        <MoonIcon className="hidden dark:block" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={isClient ? theme : undefined}
          onValueChange={setTheme}
        >
          <DropdownMenuRadioItem value="light">
            <SunIcon /> 라이트
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <MoonIcon /> 다크
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <MonitorIcon /> 시스템
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
