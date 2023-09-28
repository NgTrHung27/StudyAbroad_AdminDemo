"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formCreateUserSchema } from "./constants";
import { UserRole } from "@prisma/client";
import { Combobox } from "@/components/ui/combobox";

const options = [
  {
    value: UserRole.ADMIN,
    label: "Quản trị viên",
  },
  {
    value: UserRole.USER,
    label: "Người dùng",
  },
];

const CreateTaiKhoanPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formCreateUserSchema>>({
    resolver: zodResolver(formCreateUserSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      role: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateUserSchema>) => {
    try {
      const response = await axios.post("/api/users", values);

      router.push(`/taikhoan/${response.data.id}`);
      toast.success("Tạo tài khoản thành công");
    } catch (error) {
      console.log(error);
      toast.error("Tạo tài khoản thất bại");
    } finally {
      form.reset();
      router.refresh();
    }
  };

  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Tạo một tài khoản mới</h1>
        <p className="text-sm text-slate-600">
          Các thông tin lưu trong tài khoản có thể được thay đổi trong tương lai
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vai trò</FormLabel>
                  <FormControl>
                    <Combobox options={...options} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên tài khoản</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Vd: BuhZeeBu"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Vd: cigpbubu@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Vd: test123"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href={"/"}>
                <Button variant={"ghost"} type="button">
                  Quay về
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Tiếp tục
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateTaiKhoanPage;
