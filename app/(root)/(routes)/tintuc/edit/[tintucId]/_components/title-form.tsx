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
import {formTitleNews } from "../constants";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { News } from "@prisma/client";

interface nameFormProps {
  news: News;
}

const TitleForm = ({ news }: nameFormProps) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formTitleNews>>({
    resolver: zodResolver(formTitleNews),
    defaultValues: {
      titlenews: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formTitleNews>) => {
    try {
      await axios.patch(`/api/news/${news.id}`, values);
      toast.success("Cập nhật tin tức thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật tin tức thất bại");
    } finally {
      router.refresh();
      form.reset();
    }
  };

  return (
    <div className="mt-6 border bg-white rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
         <h1>Tên bài viết</h1>
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
        <p className="text-sm mt-2">{news.titlenews}</p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="titlenews"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Vd:Đổi tên cho đúng theo yêu cầu"
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

export default TitleForm;
