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
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ProgramPriceProps {
  price: number;
  truonghocId: string;
  nganhhocId: string;
}

const formNameSchema = z.object({
  Price: z.coerce.number().min(1, {
    message: "Vui lòng nhập chi phí",
  }),
});

const ProgramPriceForm = ({
  price,
  truonghocId,
  nganhhocId,
}: ProgramPriceProps) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formNameSchema>>({
    resolver: zodResolver(formNameSchema),
    defaultValues: {
      Price: price || 100000,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formNameSchema>) => {
    try {
      await axios.patch(
        `/api/schools/${truonghocId}/programs/${nganhhocId}`,
        values
      );
      toast.success("Cập nhật ngành học thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật ngành học thất bại");
    } finally {
      router.refresh();
      form.reset();
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 dark:bg-background rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chi phí
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
        <p className="text-sm mt-2">{price}</p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="Price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      disabled={isSubmitting}
                      min={1000}
                      max={1000000000}
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

export default ProgramPriceForm;
