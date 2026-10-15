import { useMediaQuery } from "usehooks-ts"

const MOBILE_BREAKPOINT = 768

// usehooks-ts의 useMediaQuery 기반 모바일 판별 훅 (shadcn sidebar에서 사용)
export function useIsMobile() {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, {
    initializeWithValue: false,
  })
}
