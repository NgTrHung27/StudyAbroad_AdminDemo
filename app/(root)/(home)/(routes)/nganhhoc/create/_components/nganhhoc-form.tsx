"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { formCreateNganhHocSchema } from "@/constants/create-nganhhoc-schema";
import { formCreateProgramSchema } from "@/constaints-create/constants-program";

export function NganhHocForm() {
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formCreateProgramSchema>>({
    resolver: zodResolver(formCreateProgramSchema),
    defaultValues: {
      name: "",
      description1: "",
      description2: "",
      Price: 0,
      Image1: "",
      Image2: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateProgramSchema>) => {
    try {
      await axios.post("/api/program", values);
      toast.success("Tạo ngành học thành công");
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Tạo ngành học thất bại");
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
              name="Image1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ảnh 1</FormLabel>
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
              name="Image2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ảnh 2</FormLabel>
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
                  <FormLabel>Name</FormLabel>
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
              name="description1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description 1</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập description1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Mô tả lý do du học */}
            <FormField
              control={form.control}
              name="description2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description 2</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Nhập description 2"
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
              name="Price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" className="resize-none" {...field} />
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
