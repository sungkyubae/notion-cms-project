import type { Metadata } from "next"

import { PageHeader } from "@/components/common/page-header"
import { AppHeader } from "@/components/layout/app-header"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = { title: "대시보드" }

const stats = [
  { title: "총 사용자", value: "1,284", note: "지난달 대비 +12%" },
  { title: "활성 세션", value: "342", note: "지난주 대비 +4%" },
  { title: "전환율", value: "3.2%", note: "지난달 대비 -0.3%" },
]

const orders = [
  { id: "ORD-001", name: "홍길동", status: "완료", amount: "₩120,000" },
  { id: "ORD-002", name: "김영희", status: "대기", amount: "₩54,000" },
  { id: "ORD-003", name: "이철수", status: "완료", amount: "₩89,000" },
]

export default function DashboardPage() {
  return (
    <>
      <AppHeader title="개요" />
      <div className="flex flex-col gap-6 p-4 md:p-6">
        <PageHeader
          title="개요"
          description="서비스 현황을 한눈에 확인하세요. (샘플 데이터)"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {stat.note}
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>월간 목표 달성률</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={68} aria-label="진행률" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>최근 주문</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>주문번호</TableHead>
                  <TableHead>고객</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead className="text-right">금액</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "완료" ? "default" : "secondary"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
