"use client"

import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useBoolean, useMediaQuery } from "usehooks-ts"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// 모바일 전용 메뉴 (Sheet)
export function MobileNav() {
  const { value: open, setValue: setOpen, setFalse: close } = useBoolean(false)
  const pathname = usePathname()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // 데스크톱 폭으로 커지면 메뉴 닫기
  useEffect(() => {
    if (isDesktop) close()
  }, [isDesktop, close])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="메뉴 열기"
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {siteConfig.allNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={cn(
                "hover:bg-muted rounded-md px-3 py-2 text-sm font-medium",
                pathname === item.href && "bg-muted"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
