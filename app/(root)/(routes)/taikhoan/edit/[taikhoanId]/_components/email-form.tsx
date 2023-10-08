"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formEmailSchema } from "../constants";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { IconBadge } from "@/components/icon-badge";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface nameFormProps {
  user: User;
}

const EmailForm = ({ user }: nameFormProps) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formEmailSchema>>({
    resolver: zodResolver(formEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formEmailSchema>) => {
    try {
      await axios.patch(`/api/users/${user.id}`, values);
      toast.success("Cập nhật hồ sơ thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật hồ sơ thất bại");
    } finally {
      router.refresh();
      form.reset();
    }
  };

  const sendEmail = async () => {
    try {
      const email = user.email;

      await axios.post(`/api/users/${user.id}/sendEmail`, { email });

      toast.success("Gửi email thành công");
    } catch (error) {
      console.log(error);
      toast.error("Gửi email thất bại");
    }
  };

  return (
    <div className="mt-6 border bg-white rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Email liên hệ
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditting ? (
            <>Hủy</>
          ) : (
            <>
              {!user.emailVerified && (
                <>
                  <Pencil className="h-4 w-4 mr-2" />
                  Chỉnh sửa
                </>
              )}
            </>
          )}
        </Button>
      </div>
      {!isEditting ? (
        <div className="flex items-center justify-between">
          <p className="text-sm mt-2">{user.email}</p>
          <div className="flex flex-col items-end justify-between gap-y-2">
            <Badge
              className={cn(
                "bg-slate-500 mt-2",
                user.emailVerified
                  ? "bg-emerald-500/80 border-black"
                  : "bg-yellow-200/80 border-[1px] hover:cursor-default border-yellow-300 text-primary"
              )}
            >
              {user.emailVerified ? "Đã xác thực" : "Chưa xác thực"}
            </Badge>
            {!user.emailVerified && (
              <Badge
                onClick={sendEmail}
                className="bg-black text-white font-bold hover:bg-black/90 hover:cursor-pointer"
              >
                Gửi email xác thực
              </Badge>
            )}
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      disabled={isSubmitting}
                      placeholder="Vd: abc@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={isSubmitting || !isValid} type="submit">
                Lưu thay đổi
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default EmailForm;
