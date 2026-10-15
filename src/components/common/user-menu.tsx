"use client"

import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// 사용자 메뉴 (인증 연동 전 샘플 데이터)
export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="사용자 메뉴"
        className="focus-visible:ring-ring/50 rounded-full outline-none focus-visible:ring-3"
      >
        <Avatar>
          <AvatarFallback>
            <UserIcon className="size-4" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem render={<Link href="/dashboard" />}>
          <SettingsIcon /> 설정
        </DropdownMenuItem>
        <DropdownMenuItem render={<Link href="/login" />}>
          <LogOutIcon /> 로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
