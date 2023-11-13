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
import { formTinTuc } from "../constant";
import { Editor } from "./editor";

export function TinTucForm() {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formTinTuc>>({
    resolver: zodResolver(formTinTuc),
    defaultValues: {
      titlenews: "",
      descriptions: "",
      author: "",
      imageNews: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formTinTuc>) => {
    try {
      await axios.post("/api/news", values);
      toast.success("Tạo tin tức thành công");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Tạo tin tức thất bại");
    } finally {
      router.refresh();
      router.push("/tintuc");
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
              name="titlenews"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tiêu đề</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descriptions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nội dung</FormLabel>
                  <FormControl>
                    <Editor {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Họ tên */}
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tác giả</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Họ tên */}
            <FormField
              control={form.control}
              name="imageNews"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ảnh tin tức</FormLabel>
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
            <Button disabled={isSubmitting || !isValid} type="submit">
              Tạo tin tức mới
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
