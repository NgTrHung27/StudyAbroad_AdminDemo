"use client";

import { Editor } from "@/components/editor";
import Heading from "@/components/heading";
import { Preview } from "@/components/preview";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { formDes2Schema } from "@/constaints-create/constant-history";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = {
  schoolName: string;
  historyId: string;
  description: string;
};

const EditDescription2Form = ({
  schoolName,
  historyId,
  description,
}: Props) => {
  const router = useRouter();
  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formDes2Schema>>({
    resolver: zodResolver(formDes2Schema),
    defaultValues: {
      description2: description || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formDes2Schema>) => {
    try {
      await axios.patch(
        `/api/schools/${schoolName}/histories/${historyId}`,
        values
      );

      toast.success("Cập nhật lịch sử thành công");
      toggleEdit();
      router.refresh();
      form.reset();
    } catch (error) {
      toast.error("Cập nhật lịch sử thất bại " + error);
    } finally {
      window.location.reload;
    }
  };

  const { isSubmitting, isLoading, isValid } = form.formState;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading
          icon={FileText}
          title="Mô tả 2"
          description="Nhập đoạn thứ hai của lịch sử"
        />
        <Button type="button" onClick={() => toggleEdit()} variant={"outline"}>
          {isEditting ? "Hủy" : "Chỉnh sửa"}
        </Button>
      </div>
      <Separator />
      <div className="py-2 pb-4">
        {!isEditting ? (
          <Preview value={description} />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={isSubmitting || isLoading || !isValid}
                  type="submit"
                >
                  Lưu thay đổi
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default EditDescription2Form;
