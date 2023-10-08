"use client";

import axios from "axios";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import Heading from "../heading";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import { formRegisterSchema } from "../../app/(auth)/(routes)/sign-up/constants";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../@/components/ui/popover";
import { cn } from "../../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../@/components/ui/calendar";
import { vi } from "date-fns/locale";
import PhoneInput from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../@/components/ui/select";
import { CertificateCategory, SchoolCategory } from "@prisma/client";
import { Textarea } from "../../@/components/ui/textarea";

enum STEPS {
  INFORMATION = 0,
  CERTIFICATE = 1,
}

const studyCategoryMap = {
  CAODANG: "Bậc Cao đẳng",
  DAIHOC: "Bậc Đại học",
  THPT: "Bậc Trung học phổ thông",
};

const certificateCategoryMap = {
  IELTS: "Chứng chỉ IELTs",
  TOEFL: "Chứng chỉ TOEFL",
};

const RegisterModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [step, setStep] = useState(STEPS.INFORMATION);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const registerForm = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      gender: "",
      cccd: "",
      email: "",
      studyCategory: "",
      certificateCategory: "",
      schoolCategory: "",
      description: "",
    },
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.CERTIFICATE) {
      return "Đăng ký";
    }

    return "TIếp theo";
  }, [step]);

  const secondaryAction = step === STEPS.INFORMATION ? undefined : onBack;

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.INFORMATION) {
      return undefined;
    }

    return "Quay lại";
  }, [step]);

  const { isSubmitting, isValid } = registerForm.formState;

  const onSubmit = async (values: z.infer<typeof formRegisterSchema>) => {
    try {
      console.log(values);
      registerForm.reset();
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  const informationContent = (
    <>
      <FormField
        control={registerForm.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                disabled={isSubmitting}
                placeholder="Họ và tên"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="dob"
        render={({ field }) => (
          <FormItem>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    disabled={isSubmitting}
                    variant={"outline"}
                    className={cn(
                      "w-full h-10 px-3 py-2 text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "do MMM, yyyy", { locale: vi })
                    ) : (
                      <span>Chọn ngày sinh</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                disabled={isSubmitting}
                placeholder="Địa chỉ hiện tại"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <PhoneInput
                disabled={isSubmitting}
                className={cn(
                  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                )}
                placeholder="Số điện thoại"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <Select
              disabled={isSubmitting}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn giới tính" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Nam">Nam</SelectItem>
                <SelectItem value="Nữ">Nữ</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="cccd"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                disabled={isSubmitting}
                placeholder="CCCD/CMND"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                disabled={isSubmitting}
                placeholder="Email"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  const certificateContent = (
    <>
      <FormField
        control={registerForm.control}
        name="studyCategory"
        render={({ field }) => (
          <FormItem>
            <Select
              disabled={isSubmitting}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn trình độ học vấn" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value={SchoolCategory.THPT}>
                  {studyCategoryMap.THPT}
                </SelectItem>
                <SelectItem value={SchoolCategory.DAIHOC}>
                  {studyCategoryMap.DAIHOC}
                </SelectItem>
                <SelectItem value={SchoolCategory.CAODANG}>
                  {studyCategoryMap.CAODANG}
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="certificateCategory"
        render={({ field }) => (
          <FormItem>
            <Select
              disabled={isSubmitting}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn chứng chỉ Tiếng Anh" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value={CertificateCategory.IELTS}>
                  {certificateCategoryMap.IELTS}
                </SelectItem>
                <SelectItem value={CertificateCategory.TOEFL}>
                  {certificateCategoryMap.TOEFL}
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                placeholder="Mô tả lý do du học"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-0 m-0 gap-0">
      <div className="relative flex items-center justify-center w-[193px] h-[95px]">
        <Image fill alt="Logo" src={"/login/LOGO_RED.png"} />
      </div>
      <Heading
        title="Đăng ký"
        description="Chào mừng bạn! Hãy đăng nhập tài khoản của bạn"
      />
      <div className="w-full px-4 lg:px-8 flex flex-col items-center">
        <Form {...registerForm}>
          <form
            onSubmit={registerForm.handleSubmit(onSubmit)}
            className="flex flex-col justify-center gap-y-4 w-[350px] focus-within::shadow-sm gap-2"
          >
            {step === STEPS.INFORMATION && informationContent}
            {step === STEPS.CERTIFICATE && certificateContent}
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              {secondaryAction && secondaryActionLabel && (
                <Button
                  variant={"outline"}
                  disabled={isSubmitting}
                  onClick={secondaryAction}
                  type="button"
                >
                  {secondaryActionLabel}
                </Button>
              )}

              <Button
                disabled={
                  isSubmitting ||
                  (!isValid && step !== STEPS.INFORMATION) ||
                  (step === STEPS.CERTIFICATE && !isValid)
                }
                onClick={onNext}
                type={step > 1 ? "submit" : "button"}
              >
                {actionLabel}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterModal;
