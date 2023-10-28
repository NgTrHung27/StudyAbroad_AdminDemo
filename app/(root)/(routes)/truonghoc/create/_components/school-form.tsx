"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useEffect, useState } from "react";
import FileUpload from "@/components/file-upload";
import { formCreateSchoolSchema } from "../constants";

export function SchoolForm() {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formCreateSchoolSchema>>({
    resolver: zodResolver(formCreateSchoolSchema),
    defaultValues: {
      name: "",
      description: "",
      logoUrl: "",
      backgroundUrl: "",
      colorValue: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateSchoolSchema>) => {
    try {
      await axios.post("/api/schools", values);

      toast.success("Tạo trường học thành công");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Tạo trường học thất bại");
    } finally {
      router.refresh();
    }
  };

  if (!isMounted) {
    return <div>Đang tải thông tin...</div>;
  }

  return (
    <>
      <div className="max-w-2xl px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="logoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo trường học</FormLabel>
                  <FormControl>
                    <FileUpload
                      value={field.value && field.value}
                      disabled={isSubmitting}
                      onChange={field.onChange}
                      endpoint="logoImage"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="backgroundUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nền trường học</FormLabel>
                  <FormControl>
                    <FileUpload
                      value={field.value && field.value}
                      disabled={isSubmitting}
                      onChange={field.onChange}
                      endpoint="schoolBackground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Họ tên */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên trường học</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập đầy đủ chính xác tên trường học"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Ví dụ: Cornerstone</FormDescription>
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
                      placeholder="Mô tả lý trường học"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="colorValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Màu sắc</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-x-4">
                      <Input
                        disabled={isSubmitting}
                        placeholder="Nhập giá trị màu sắc"
                        {...field}
                      />
                      <div
                        className="border p-4 rounded-full"
                        style={{ backgroundColor: field.value }}
                      ></div>
                    </div>
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
