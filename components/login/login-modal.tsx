"use client";

import axios from "axios";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import Heading from "./heading";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { formSchema } from "../../app/(auth)/(routes)/sign-in/constants";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";

const LoginModal = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const isLoading = form.formState.isLoading;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        values
      );

      console.log(response.data);
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-0 m-0 gap-0">
      <div className="absolute top-0 mt-12 w-[193px] h-[95px]">
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-base text-black outline outline-2 focus-visible:ring-offset-500 focus-visible:ring-[#7D1F1F]"
                      disabled={isLoading}
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
                      disabled={isLoading}
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
              <div className="text-sm italic font-semibold hover:underline cursor-pointer">
                Quên mật khẩu?
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="my-4 w-full text-base font-semibold uppercase"
                variant="login"
                size="login"
                disabled={isLoading}
              >
                Đăng nhập
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="mt-20 text-[#7D1F1F] text-base font-semibold">
        Bạn chưa có tài khoản?
        <span className="ml-2 font-bold cursor-pointer hover:underline">
          Đăng ký ngay
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
