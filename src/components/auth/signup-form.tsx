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
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const signupSchema = z
  .object({
    name: z.string().min(2, "이름은 2자 이상이어야 합니다"),
    email: z.email("올바른 이메일을 입력해 주세요"),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
    confirmPassword: z.string(),
    terms: z.boolean().refine((v) => v, "약관에 동의해 주세요"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  })

type SignupValues = z.infer<typeof signupSchema>

const textFields = [
  { name: "name", label: "이름", type: "text", autoComplete: "name" },
  { name: "email", label: "이메일", type: "email", autoComplete: "email" },
  {
    name: "password",
    label: "비밀번호",
    type: "password",
    autoComplete: "new-password",
  },
  {
    name: "confirmPassword",
    label: "비밀번호 확인",
    type: "password",
    autoComplete: "new-password",
  },
] as const

export function SignupForm() {
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  })

  // TODO: 실제 회원가입 로직으로 교체
  async function onSubmit(values: SignupValues) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    toast.success(`${values.name}님, 가입을 환영합니다 (데모)`)
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>정보를 입력해 계정을 만드세요.</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <CardContent>
          <FieldGroup>
            {textFields.map((item) => (
              <Controller
                key={item.name}
                name={item.name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`signup-${item.name}`}>
                      {item.label}
                    </FieldLabel>
                    <Input
                      {...field}
                      id={`signup-${item.name}`}
                      type={item.type}
                      autoComplete={item.autoComplete}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            ))}
            <Controller
              name="terms"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <Checkbox
                    id="signup-terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor="signup-terms">
                    이용약관에 동의합니다
                  </FieldLabel>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter className="mt-6 flex-col gap-3">
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "가입 중..." : "가입하기"}
          </Button>
          <p className="text-muted-foreground text-sm">
            이미 계정이 있나요?{" "}
            <Link href="/login" className="text-foreground underline">
              로그인
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
