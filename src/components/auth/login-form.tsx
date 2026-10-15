"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
  email: z.email("올바른 이메일을 입력해 주세요"),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  // TODO: 실제 인증 로직으로 교체
  async function onSubmit(values: LoginValues) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    toast.success(`${values.email} 로 로그인했습니다 (데모)`)
  }

  return (
    <Card className="w-full max-w-sm shadow-sm">
      <CardHeader className="text-center">
        <CardTitle>로그인</CardTitle>
        <CardDescription>이메일과 비밀번호를 입력하세요.</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <CardContent>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-email">이메일</FieldLabel>
                  <Input
                    {...field}
                    id="login-email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-password">비밀번호</FieldLabel>
                  <Input
                    {...field}
                    id="login-password"
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter className="mt-6 flex-col gap-4">
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "로그인 중..." : "로그인하기"}
          </Button>
          <FieldSeparator className="w-full">또는</FieldSeparator>
          <Button
            variant="outline"
            className="w-full"
            render={<Link href="/signup" />}
            nativeButton={false}
          >
            회원가입하기
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
