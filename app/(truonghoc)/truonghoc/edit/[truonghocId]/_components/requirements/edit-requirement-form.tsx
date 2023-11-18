"use client";

import { Editor } from "@/components/editor";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formCreateRequirementSchema } from "@/constaints-create/constant-requirement";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = {
  schoolName: string;
  requirementId: string;
  description: string;
  toggleEdit: (value: boolean) => void;
};

const EditRequirementForm = ({
  schoolName,
  requirementId,
  description,
  toggleEdit,
}: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formCreateRequirementSchema>>({
    resolver: zodResolver(formCreateRequirementSchema),
    defaultValues: {
      description: description || "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formCreateRequirementSchema>
  ) => {
    try {
      await axios.patch(
        `/api/schools/${schoolName}/requirements/${requirementId}`,
        values
      );

      router.refresh();
      toast.success("Cập nhật yêu cầu nhập học thành công");
      toggleEdit(false);
      form.reset();
    } catch (error) {
      toast.error("Cập nhật yêu cầu nhập học thất bại " + error);
    }
  };

  const { isSubmitting, isLoading, isValid } = form.formState;

  return (
    <div className="py-2 pb-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="description"
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
    </div>
  );
};

export default EditRequirementForm;
