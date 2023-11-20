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
import { formCreateBlogSchema } from "@/constaints-create/constant-blog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";

export const BlogModal = () => {
  const router = useRouter();
  const { type, isOpen, onClose, data, subData } = useSchoolModal();
  const isModalOpen = isOpen && type === "createBlog";

  const { school } = data;
  const { students } = subData;

  const form = useForm<z.infer<typeof formCreateBlogSchema>>({
    resolver: zodResolver(formCreateBlogSchema),
    defaultValues: {
      studentId: "",
      description: "",
    },
  });

  if (!school) {
    return null;
  }

  if (!students) return null;

  const { isLoading, isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateBlogSchema>) => {
    try {
      await axios.post(`/api/schools/${school?.name}/blogs`, values);

      router.refresh();
      toast.success("Thêm blogs thành công");
      form.reset();
    } catch (error) {
      toast.error("Thêm blogs thất bại " + error);
    } finally {
      onClose();
    }
  };

  return (
    <Modal
      title="Thêm blog"
      description="Thêm blog để quản lý các thông tin liên quan đến blogs của trường học"
      isOpen={isModalOpen}
      onClose={onClose}
    >
      <div>
        <div className="py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="studentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chọn người đăng</FormLabel>
                    <Select
                      disabled={isSubmitting || isLoading}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={"Vui lòng chọn người đăng"}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {students?.map((student) => (
                          <div key={student.user.name}>
                            <SelectItem value={student.id}>
                              <div className="flex flex-row items-center gap-x-2">
                                <Image
                                  width={16}
                                  height={16}
                                  alt="logoschool"
                                  src={
                                    student.user.avatar || "/placeholder.jpg"
                                  }
                                  className="mr-2"
                                />
                                {student.user.name}
                              </div>
                            </SelectItem>
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nội dung blog</FormLabel>
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
