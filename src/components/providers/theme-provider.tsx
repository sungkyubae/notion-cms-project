"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

// next-themes 래퍼: .dark 클래스 기반, 시스템 설정 기본값
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
