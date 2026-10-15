import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { Section } from "@/components/common/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "소개",
  description: "스타터킷 구성과 사용 방법",
}

const faqs = [
  {
    q: "컴포넌트는 어떻게 추가하나요?",
    a: "npx shadcn@latest add <컴포넌트명> 명령으로 components/ui 에 추가합니다.",
  },
  {
    q: "사이트 이름과 메뉴는 어디서 바꾸나요?",
    a: "src/config/site.ts 한 곳에서 헤더, 푸터, 메타데이터가 함께 바뀝니다.",
  },
  {
    q: "테마 색상은 어떻게 바꾸나요?",
    a: "src/app/globals.css 의 :root 와 .dark CSS 변수를 수정하세요.",
  },
]

export default function AboutPage() {
  return (
    <Section>
      <PageHeader
        title="소개"
        description="Next.js 16 기반 스타터킷의 구성과 자주 묻는 질문입니다."
        className="mb-10"
      />
      <Accordion className="max-w-2xl">
        {faqs.map((faq) => (
          <AccordionItem key={faq.q} value={faq.q}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
