"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { formCreateUserSchema } from "../constants";
import axios from "axios";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { vi } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import Script from "next/script";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import FileUpload from "@/components/file-upload";

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
  version: "weekly",
  libraries: ["places", "marker"],
});

export function ProfileForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [cccd, setCccd] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formCreateUserSchema>>({
    resolver: zodResolver(formCreateUserSchema),
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

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateUserSchema>) => {
    try {
      await axios.post("/api/users", values);

      toast.success("Tạo tài khoản thành công");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Tạo tài khoản thất bại");
    } finally {
      router.refresh();
    }
  };

  const onIdentifierSubmit = async (images: string) => {
    try {
      await axios.post("/api/fptai", { images }).then((response) => {
        if (response.data.message === "Thành công") {
          setCccd(response.data.name);
        }
      });

      toast.success("Thành công");
    } catch (error) {
      console.log(error);
    }
  };

  loader.importLibrary("places").then(async () => {
    new google.maps.places.Autocomplete(
      document.getElementById("address") as HTMLInputElement,
      {
        componentRestrictions: { country: ["vn", "us"] },
        types: ["address"],
      }
    );
  });

  if (!isMounted) {
    return <div>Đang tải thông tin...</div>;
  }

  return (
    <>
      <Script />
      <div className="max-w-2xl px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Họ tên */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ và Tên</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập đầy đủ chính xác họ tên của tài khoản"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Ví dụ: Nguyễn Văn A</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Ngày sinh */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ngày sinh</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          disabled={isSubmitting}
                          variant={"outline"}
                          className="ml-2 max-w-xl"
                        >
                          {field.value ? (
                            format(field.value, "do MMM, yyyy", { locale: vi })
                          ) : (
                            <span>Chọn ngày sinh</span>
                          )}
                          <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
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
                  <FormDescription>
                    Chọn ngày sinh của bạn theo định dạng: Ngày, Tháng, Năm
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Địa chỉ */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Địa chỉ</FormLabel>
                  <FormControl>
                    <Input
                      id="address"
                      placeholder="Nhập đầy đủ địa chỉ hiện tại của tài khoản"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Số điện thoại */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <PhoneInput
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-base text-black focus-visible:ring-offset-500 focus-visible:ring"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Giới tính */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel>Giới tính</FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn giới tính" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Nam">Nam</SelectItem>
                      <SelectItem value="Nữ">Nữ</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />
            {/* Căn cước công dân */}
            <FormField
              control={form.control}
              name="cccd"
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel>Căn cước công dân</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập căn cước công dân" {...field} />
                    </FormControl>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email liên hệ</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập email liên hệ của tài khoản"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Email của tài khoản được chọn phải có thật, và yêu cầu xác
                    thực trong tương lai để được duyệt
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Mô tả lý do du học */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả lý do du học</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mô tả lý do du học của người dùng tài khoản"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isSubmitting || !isValid} type="submit">
              Tạo tài khoản
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
