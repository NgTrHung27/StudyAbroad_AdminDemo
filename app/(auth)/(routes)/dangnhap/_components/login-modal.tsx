"use client";

import * as z from "zod";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { formLoginSchema } from "../constants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginModal = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formLoginSchema>) => {
    setIsLoading(true);

    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Đăng nhập thành công");
        router.push("/");
        form.reset();
        setIsLoading(false);
      }

      if (callback?.error) {
        console.log(callback?.error);
        toast.error("Đăng nhập thất bại");
      }
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <Dialog open>
      <DialogContent className="bg-white dark:bg-background text-black dark:text-primary p-0 overflow-hidden">
        <DialogHeader className="flex items-center pt-9 px-6">
          <div className="relative w-[195px] h-[95px]">
            <Image
              fill
              src={"/logo_red.png"}
              alt="logo"
              className="object-fit"
            />
          </div>
          <DialogTitle className="capitalize text-[#7D1F1F] text-2xl font-bold">
            Đăng nhập
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Sử dụng tài khoản quản trị viên của bạn để bắt đầu quản lý dữ liệu.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4 px-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                      Email đăng nhập
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="email"
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Email đăng nhập"
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500">
                      Mật khẩu
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="password"
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Mật khẩu đăng nhập"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={isLoading}>Đăng nhập</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
