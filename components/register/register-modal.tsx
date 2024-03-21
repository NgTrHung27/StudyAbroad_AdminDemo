"use client";

import axios from "axios";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import Heading from "../heading";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { vi } from "date-fns/locale";
import PhoneInput from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CertificateCategory, School, SchoolCategory } from "@prisma/client";
import { Textarea } from "../ui/textarea";
import { formCreateUserSchema } from "../../constants/form-create-user-schema";
import Banner from "../banner";
import { signIn } from "next-auth/react";

type Props = {
  schools: School[];
};

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

export default function RegisterModal({ schools }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [step, setStep] = useState(STEPS.INFORMATION);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const registerForm = useForm<z.infer<typeof formCreateUserSchema>>({
    resolver: zodResolver(formCreateUserSchema),
    defaultValues: {
      name: "",
      address: "",
      phoneNumber: "",
      gender: "",
      cccd: "",
      email: "",
      description: "",
      schoolName: "",
      schoolCategory: "",
      password: "",
      certificateCategory: "",
    },
  });

  const { isSubmitting, isValid, isLoading } = registerForm.formState;

  const onSubmit = async (values: z.infer<typeof formCreateUserSchema>) => {
    try {
      console.log(values);
      await axios.post("/api/register", values);
      registerForm.reset();
      signIn("credentials", {
        ...values,
        redirect: false,
      });
      router.push("/xacthucemail");
    } catch (error) {
    }
  };

  const handlePrev = () => {
    if (step === STEPS.INFORMATION) return;

    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    if (step === STEPS.CERTIFICATE) return;

    setStep((currentStep) => currentStep + 1);
  };

  const prevBtn = (
    <>
      {step !== STEPS.INFORMATION && (
        <Button
          type="button"
          disabled={isLoading || isSubmitting}
          variant={"outline"}
          onClick={handlePrev}
        >
          Quay về
        </Button>
      )}
    </>
  );

  const nextBtn = (
    <>
      {step === STEPS.CERTIFICATE ? (
        <Button
          disabled={isLoading || isSubmitting || !isValid}
          type="button"
          onClick={registerForm.handleSubmit(onSubmit)}
        >
          Đăng ký
        </Button>
      ) : (
        <Button disabled={isLoading} type="button" onClick={handleNext}>
          Tiếp theo
        </Button>
      )}
    </>
  );

  const informationContent = (
    <>
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
      <FormField
        control={registerForm.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="password"
                className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                disabled={isSubmitting}
                placeholder="Mật khẩu"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
                autoFocus
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
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                  defaultMonth={new Date(2000, 1, 1)}
                  fromYear={1900}
                  toYear={2100}
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
        name="phoneNumber"
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
                <SelectTrigger className="outline outline-2 text-base text-black">
                  <SelectValue placeholder="Chọn giới tính" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Nam" className="text-black">
                  Nam
                </SelectItem>
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
    </>
  );

  const certificateContent = (
    <>
      <FormField
        control={registerForm.control}
        name="schoolName"
        render={({ field }) => (
          <FormItem>
            <Select
              disabled={isSubmitting}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn trường học" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {schools.map((school) => (
                  <div className="flex items-center" key={school.name}>
                    <Image
                      width={16}
                      height={16}
                      alt="logoschool"
                      src={school.logoUrl}
                      className="mr-2"
                    />
                    <SelectItem value={school.name}>{school.name}</SelectItem>
                  </div>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={registerForm.control}
        name="schoolCategory"
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

  registerForm.watch();

  const requiredFields = [
    registerForm.getValues("name"),
    registerForm.getValues("address"),
    registerForm.getValues("cccd"),
    registerForm.getValues("description"),
    registerForm.getValues("dob"),
    registerForm.getValues("gender"),
    registerForm.getValues("email"),
    registerForm.getValues("phoneNumber"),
    registerForm.getValues("password"),
    registerForm.getValues("certificateCategory"),
    registerForm.getValues("schoolCategory"),
    registerForm.getValues("schoolName"),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const requiredFieldNames = [
    "Tên trường học",
    "Logo",
    "Hình nền",
    "Màu đại diện",
  ];

  const isComplete = requiredFields.every(Boolean);

  const text = `${completedFields}/${totalFields}`;

  const warningText = !isComplete
    ? "Thiếu thông tin: " +
    requiredFields.map((field, index) =>
      !field ? ` ${requiredFieldNames[index]}` : ""
    )
    : "Bạn đã hoàn thành tất cả thông tin";

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-0 m-0 gap-0">
      <div className="relative flex items-center justify-center w-[193px] h-[120px]">
        <Image fill alt="Logo" src={"/login/LOGO_RED.png"}
        />
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
            <div className="my-2">
              {/* <Banner variant={"warning"} label={text} /> */}
            </div>
            {step === STEPS.INFORMATION && informationContent}
            {step === STEPS.CERTIFICATE && certificateContent}
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              {prevBtn}
              {nextBtn}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
