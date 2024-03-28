"use client";

import axios from "axios";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import Heading from "../../../components/heading";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover";
import { cn } from "../../../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../../components/ui/calendar";
import { vi } from "date-fns/locale";
import PhoneInput from "react-phone-number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { CertificateCategory, SchoolCategory } from "@prisma/client";
import { Textarea } from "../../../components/ui/textarea";
import { formContactSchema } from "./constants";

const Contact = () => {
  //
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ContactForm = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      title: "",
      textContent: "",
    },
  });

  const { isSubmitting, isValid } = ContactForm.formState;
  const onSubmit = async (values: z.infer<typeof formContactSchema>) => {
    try {
      await axios.post("/api/contact", values);
      ContactForm.reset();
      router.push("/");
    } catch (error) {
    } finally {
      window.location.reload;
    }
  };

  const informationContent = (
    <>
      <FormField
        control={ContactForm.control}
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
        control={ContactForm.control}
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
        control={ContactForm.control}
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
        control={ContactForm.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                disabled={isSubmitting}
                placeholder="Tiêu đề"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={ContactForm.control}
        name="textContent"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                disabled={isSubmitting}
                placeholder="Mời nhập nội dung liên hệ"
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
      <div className="my-auto">
        <div className="flex items-center justify-between gap-x-3 px-12">
          <h1 className="text-3xl capitalize font-bold">Liên hệ</h1>
        </div>
        <div className="mx-12 pt-2">
          <ul className="list-none decoration-slice text-lg font-medium space-y-6 text-[#777E90] ">
            <li className="flex justify-between">
              <span>
                {" "}
                <strong>Văn phòng miền Nam:</strong> Tầng 75 Landmark 81, 720A
                Đ. Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh, Thành phố Hồ
                Chí Minh, Việt Nam
              </span>
            </li>
            <li className="flex justify-between mt-4">
              <span>
                {" "}
                <strong>Điện thoại:</strong> (024) 37777777
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                {" "}
                <strong>Mr. Hưng:</strong> (098) 8888888
              </span>
            </li>
            <li className="flex justify-between mt-10">
              <span>
                {" "}
                <strong>Văn phòng miền Bắc:</strong> 5 P. Hoàng Văn Thụ, Quán
                Thánh, Ba Đình, Hà Nội, Việt Nam
              </span>
            </li>
            <li className="flex justify-between mt-4">
              <span>
                {" "}
                <strong>Điện thoại:</strong> (024) 39999999
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                {" "}
                <strong>Mr. Hưng:</strong> (098) 9999999
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:pl-[10%]">
        <Form {...ContactForm}>
          <form
            onSubmit={ContactForm.handleSubmit(onSubmit)}
            className="flex flex-col justify-center gap-y-5 w-[80%] focus-within::shadow-sm gap-2"
          >
            {informationContent}
            <Button
              disabled={isSubmitting}
              className="bg-[#7D1F1F] text-white px-4 py-2"
            >
              {" "}
              Liên Hệ với chúng tôi{" "}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
