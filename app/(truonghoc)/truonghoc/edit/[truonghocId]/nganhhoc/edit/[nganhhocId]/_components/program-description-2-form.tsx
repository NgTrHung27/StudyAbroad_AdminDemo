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

interface ProgramDescription2FormProps {
  description: string;
  truonghocId: string;
  nganhhocId: string;
}

const formDescriptionSchema = z.object({
  description2: z.string().min(1, {
    message: "Vui lòng nhập chi tiết ngành học",
  }),
});

const ProgramDescription2Form = ({
  description,
  truonghocId,
  nganhhocId,
}: ProgramDescription2FormProps) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formDescriptionSchema>>({
    resolver: zodResolver(formDescriptionSchema),
    defaultValues: {
      description2: description || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formDescriptionSchema>) => {
    try {
      await axios.patch(
        `/api/schools/${truonghocId}/programs/${nganhhocId}`,
        values
      );
      toast.success("Cập nhật ngành học thành công");
      form.reset();
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật ngành học thất bại");
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 dark:bg-background rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chi tiết ngành học
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
        <div
          className={cn(
            "text-sm mt-2",
            !description && "text-slate-500 italic"
          )}
        >
          {!description && "Không có thông tin"}
          {description && <Preview value={description} />}
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="description2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Editor {...field} />
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

export default ProgramDescription2Form;
