"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useEventListener } from "usehooks-ts"

import { Container } from "@/components/common/container"
import { Logo } from "@/components/common/logo"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { MobileNav } from "@/components/layout/mobile-nav"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  // 스크롤 시 하단 그림자 표시
  useEventListener("scroll", () => setScrolled(window.scrollY > 4))

  return (
    <header
      className={cn(
        "bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur transition-shadow",
        scrolled && "shadow-sm"
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "text-muted-foreground hover:text-foreground rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  pathname === item.href && "text-foreground bg-muted"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link
            href={siteConfig.loginHref}
            className={cn(
              buttonVariants({ size: "sm" }),
              "ml-1 hidden sm:inline-flex"
            )}
          >
            로그인
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
