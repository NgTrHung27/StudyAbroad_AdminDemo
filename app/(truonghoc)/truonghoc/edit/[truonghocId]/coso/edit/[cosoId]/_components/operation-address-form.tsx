"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Editor } from "@/components/editor";
import { Preview } from "@/components/preview";
import { Input } from "@/components/ui/input";

interface OperationAddressFormProps {
  address: string;
  truonghocId: string;
  cosoId: string;
}

const formAddressSchema = z.object({
  address: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ cơ sở",
  }),
});

const OperationAddressForm = ({
  address,
  truonghocId,
  cosoId,
}: OperationAddressFormProps) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formAddressSchema>>({
    resolver: zodResolver(formAddressSchema),
    defaultValues: {
      address: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formAddressSchema>) => {
    try {
      await axios.patch(
        `/api/schools/${truonghocId}/operations/${cosoId}`,
        values
      );
      toast.success("Cập nhật cơ sở thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật cơ sở thất bại");
    } finally {
      router.refresh();
      form.reset();
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Địa chỉ
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditting ? (
            <>Hủy</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Chỉnh sửa
            </>
          )}
        </Button>
      </div>
      {!isEditting ? (
        <p className="text-sm mt-2">{address}</p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Vd: 609 W Hastings St, Vancouver, BC V6B 4W4"
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

export default OperationAddressForm;
