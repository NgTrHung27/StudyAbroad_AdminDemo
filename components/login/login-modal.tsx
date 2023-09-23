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
    <div className="w-full h-full flex flex-col items-center justify-center p-0 m-0 gap-0">
      <Heading
        title="Đăng nhập"
        description="Chào mừng quay trở lại! Đăng nhập để tiếp tục"
      />
      <div className="w-full px-4 lg:px-8 flex flex-col items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 w-[320px] p-2 px-3 md:px-6 focus-within::shadow-sm gap-2"
          >
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-black border-md outline focus-visible:ring-offset-500 focus-visible:ring-sky-500"
                      disabled={isLoading}
                      placeholder="Nhập tên đăng nhập"
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
                      className="text-black border-md outline focus-visible:ring-offset-500 focus-visible:ring-sky-500"
                      disabled={isLoading}
                      placeholder="Nhập tên mật khẩu"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="my-4 w-full"
              variant="login"
              size="sm"
              disabled={isLoading}
            >
              Đăng nhập
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginModal;
