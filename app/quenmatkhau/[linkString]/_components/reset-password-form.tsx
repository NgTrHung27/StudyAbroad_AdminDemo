"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import { DialogBody } from "@material-tailwind/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Props = { userId: string };

const formSchema = z.object({
  password: z.string().min(1, {
    message: "Vui lòng nhập mật khẩu",
  }),
});

const ResetPasswordForm = ({ userId }: Props) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const { isSubmitting, isLoading, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/forgotPassword/${userId}`,
        values
      );

      toast.success("Đặt lại mật khẩu thành công");
      signOut();
      form.reset();
      router.refresh();
      router.push("/dangnhap");
    } catch (error) {
      console.log(error);
      toast.error("Đặt lại mật khẩu thất bại");
    }
  };

  if (!isMounted) return null;
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Đặt lại mật khẩu</DialogTitle>
          <DialogDescription>
            Vui lòng điền vào mật khẩu mới bên dưới
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nhập mật khẩu mới</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting || isLoading}
                        type="password"
                        placeholder="Mật khẩu mới"
                        autoFocus
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="mt-4">
                <Button
                  disabled={isLoading || isSubmitting || !isValid}
                  type="submit"
                >
                  Lưu thay đổi
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPasswordForm;
