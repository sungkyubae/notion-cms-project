import Link from "next/link"

import { Container } from "@/components/common/container"
import { Logo } from "@/components/common/logo"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <Container className="flex flex-col gap-6 py-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm">
              {siteConfig.description}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {siteConfig.allNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Separator />
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
