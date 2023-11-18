"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useSchoolModal } from "@/hooks/use-school-modal";
import { Modal } from "../modal";
import { useRouter } from "next/navigation";
import { Editor } from "../editor";
import { formCreateRequirementSchema } from "@/constaints-create/constant-requirement";

export const RequirementModal = () => {
  const router = useRouter();
  const { type, isOpen, onClose, data } = useSchoolModal();
  const isModalOpen = isOpen && type === "createRequirement";

  const { school } = data;

  const form = useForm<z.infer<typeof formCreateRequirementSchema>>({
    resolver: zodResolver(formCreateRequirementSchema),
    defaultValues: {
      description: "",
    },
  });

  if (!school) {
    return null;
  }

  const { isLoading, isValid, isSubmitting } = form.formState;

  const onSubmit = async (
    values: z.infer<typeof formCreateRequirementSchema>
  ) => {
    try {
      await axios.post(`/api/schools/${school?.name}/requirements`, values);

      router.refresh();
      toast.success("Thêm yêu cầu thành công");
      form.reset();
    } catch (error) {
      toast.error("Thêm yêu cầu thất bại " + error);
    } finally {
      onClose();
    }
  };

  return (
    <Modal
      title="Thêm yêu cầu nhập học"
      description="Thêm yêu cầu nhập học để quản lý các thông tin liên quan đến điều kiện nhập học của trường học"
      isOpen={isModalOpen}
      onClose={onClose}
    >
      <div>
        <div className="py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Yêu cầu nhập học</FormLabel>
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
                  Thêm
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
