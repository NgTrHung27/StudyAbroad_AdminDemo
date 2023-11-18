"use client";

import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import Heading from "../heading";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { formSchema } from "../../app/(auth)/(routes)/dangnhap/constants";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useModal } from "../../hooks/use-modal-store";

const LoginModal = () => {
  const router = useRouter();
  const { onOpen } = useModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      signIn("credentials", {
        ...values,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          router.push("/");
          form.reset();
        }

        if (callback?.error) {
          console.log(callback?.error);
          toast.error("Sai thông tin tài khoản");
        }
      });

      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, isSubmitting, isValid } = form.formState;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-0 m-0 gap-0">
      <div className="relative flex items-center justify-center w-[193px] h-[120px]">
        <Image fill alt="Logo" src={"/login/LOGO_RED.png"} />
      </div>
      <Heading
        title="Đăng nhập"
        description="Chào mừng bạn! Hãy đăng nhập tài khoản của bạn"
      />
      <div className="w-full px-4 lg:px-8 flex flex-col items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center gap-y-4 w-[350px] focus-within::shadow-sm gap-2"
          >
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                      disabled={isLoading || isSubmitting}
                      placeholder="Email đăng nhập"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                      disabled={isLoading || isSubmitting}
                      placeholder="Mật khẩu"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  className="w-5 h-5
              "
                />
                <span className="ml-2 italic text-sm font-semibold">
                  Ghi nhớ mật khẩu
                </span>
              </div>
              <div
                onClick={() => onOpen("forgotPassword")}
                className="text-sm italic font-semibold hover:underline cursor-pointer"
              >
                Quên mật khẩu?
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="my-4 w-full text-base font-semibold uppercase"
                variant="login"
                size="login"
                disabled={isLoading || isSubmitting || !isValid}
              >
                {isSubmitting ? (
                  <Loader2 className="transition animate-spin w-4 h-4" />
                ) : (
                  "Đăng nhập"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="mt14 text-[#7D1F1F] text-base font-semibold">
        Bạn chưa có tài khoản?
        <span
          onClick={() => router.push("/dangky")}
          className="ml-2 font-bold cursor-pointer hover:underline"
        >
          Đăng ký ngay
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
