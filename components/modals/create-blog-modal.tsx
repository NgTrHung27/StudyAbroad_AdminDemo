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
  const { type, isOpen, onClose, data, optionalData } = useSchoolModal();
  const isModalOpen = isOpen && type === "createBlog";

  const { school } = data;
  const { schools } = optionalData;

  const form = useForm<z.infer<typeof formCreateBlogSchema>>({
    resolver: zodResolver(formCreateBlogSchema),
    defaultValues: {
      schoolId: "",
      userId: "",
      description: "",
    },
  });

  if (!school) {
    return null;
  }

  if (!schools) {
    return null;
  }

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
                name="schoolId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chọn trường học</FormLabel>
                    <Select
                      disabled={isSubmitting}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={"Vui lòng chọn trường"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {schools?.map((school) => (
                          <div key={school.name}>
                            <SelectItem value={school.id}>
                              <div className="flex flex-row items-center gap-x-2">
                                <Image
                                  width={16}
                                  height={16}
                                  alt="logoschool"
                                  src={school.logoUrl}
                                  className="mr-2"
                                />
                                {school.name}
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
                name="userId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chọn người đăng</FormLabel>
                    <Select
                      disabled={isSubmitting}
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
                        {schools?.map((school) => (
                          <div key={school.name}>
                            <SelectItem value={school.id}>
                              <div className="flex flex-row items-center gap-x-2">
                                <Image
                                  width={16}
                                  height={16}
                                  alt="logoschool"
                                  src={school.logoUrl}
                                  className="mr-2"
                                />
                                {school.name}
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
