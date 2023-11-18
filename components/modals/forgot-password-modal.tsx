import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useModal } from "../../hooks/use-modal-store";
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
} from "../ui/form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";

type Props = {};

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Vui lòng nhập email",
  }),
});

const ForgotPasswordModal = (props: Props) => {
  const { type, isOpen, onClose } = useModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/forgotPassword`,
        values
      );

      toast.success("Gửi email thành công");

      onClose();
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        toast.error("Không tìm thấy tài khoản người dùng với email này");
      } else if (error.response.status === 403) {
        toast.error("Tài khoản người dùng chưa xác thực email");
      } else {
        toast.error("Gửi email thất bại");
      }
    }
  };

  const isModalOpen = type === "forgotPassword" && isOpen;

  const { isSubmitting, isLoading, isValid } = form.formState;
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Khôi phục lại mật khẩu</DialogTitle>
          <DialogDescription>
            Vui lòng cung cấp địa chỉ email khôi phục mật khẩu tài khoản của bạn
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email khôi phục</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting || isLoading}
                      type="email"
                      placeholder="abc@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-4">
              <Button
                disabled={isSubmitting || isLoading || !isValid}
                type="submit"
              >
                Gửi email khôi phục
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
