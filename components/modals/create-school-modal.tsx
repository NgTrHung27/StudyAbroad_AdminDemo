"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useSchoolModal } from "@/hooks/use-school-modal";
import { Modal } from "../modal";
import FileUpload from "../file-upload";
import { useState } from "react";
import { formCreateSchoolSchema } from "@/constants/create-school-schema";

enum STEPS {
  NAME = 0,
  LOGO = 1,
  BACKGROUND = 2,
  COLOR = 3,
}

export const SchoolModal = () => {
  const { type, isOpen, onClose } = useSchoolModal();
  const isModalOpen = isOpen && type === "createSchool";
  const [step, setStep] = useState(STEPS.NAME);

  const form = useForm<z.infer<typeof formCreateSchoolSchema>>({
    resolver: zodResolver(formCreateSchoolSchema),
    defaultValues: {
      name: "",
      logoUrl: "",
      backgroundUrl: "",
      colorValue: "",
    },
  });

  const { isLoading, isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateSchoolSchema>) => {
    try {
      const response = await axios.post("/api/schools", values);
      window.location.assign(`/truonghoc/edit/${response.data.id}`);

      toast.success("Thêm trường học thành công");
    } catch (error) {
      toast.error("Lỗi xảy ra khi xử lý dữ liệu " + error);
    }
  };

  const handlePrev = () => {
    if (step === STEPS.NAME) return;

    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    if (step === STEPS.COLOR) return;

    setStep((currentStep) => currentStep + 1);
  };

  const nameField = (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tên trường học</FormLabel>
          <FormControl>
            <Input
              disabled={isLoading || isSubmitting}
              placeholder="Cornerstone"
              {...field}
              value={form.getValues("name")}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const logoField = (
    <FormField
      control={form.control}
      name="logoUrl"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Logo trường học</FormLabel>
          <FormControl>
            <FileUpload
              {...field}
              value={form.getValues("logoUrl")}
              disabled={isSubmitting || isLoading}
              onChange={field.onChange}
              endpoint="logoImage"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const backgroundField = (
    <FormField
      control={form.control}
      name="backgroundUrl"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Hình nền trường học</FormLabel>
          <FormControl>
            <FileUpload
              {...field}
              value={form.getValues("backgroundUrl")}
              disabled={isSubmitting || isLoading}
              onChange={field.onChange}
              endpoint="schoolBackground"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const colorField = (
    <FormField
      control={form.control}
      name="colorValue"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Màu đại diện</FormLabel>
          <FormControl>
            <div className="flex items-center gap-x-4">
              <Input
                disabled={isSubmitting}
                placeholder="Nhập giá trị màu sắc"
                {...field}
                value={form.getValues("colorValue")}
              />
              <div
                className="border p-4 rounded-full"
                style={{ backgroundColor: field.value }}
              ></div>
            </div>
          </FormControl>
          {!form.getValues("colorValue").startsWith("#") && (
            <FormDescription className="text-rose-500">
              Mã màu phải là giá trị thập lục phân, chứa ít nhất 3 ký tự (VD:
              #000000)
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const prevBtn = (
    <>
      {step !== STEPS.NAME && (
        <Button
          type="button"
          disabled={isLoading || isSubmitting}
          variant={"outline"}
          onClick={handlePrev}
        >
          Quay về
        </Button>
      )}
    </>
  );

  const nextBtn = (
    <>
      {step === STEPS.COLOR ? (
        <Button
          disabled={isLoading || isSubmitting || !isValid}
          type="button"
          onClick={form.handleSubmit(onSubmit)}
        >
          Thêm
        </Button>
      ) : (
        <Button disabled={isLoading} type="button" onClick={handleNext}>
          Tiếp tục
        </Button>
      )}
    </>
  );

  const formStepField = [nameField, logoField, backgroundField, colorField];

  const requiredFields = [
    form.getValues("name"),
    form.getValues("logoUrl"),
    form.getValues("backgroundUrl"),
    form.getValues("colorValue"),
  ];

  const requiredFieldNames = [
    "Tên trường học",
    "Logo",
    "Hình nền",
    "Màu đại diện",
  ];

  const isComplete = requiredFields.every(Boolean);

  const warningText = !isComplete
    ? "Thiếu thông tin: " +
      requiredFields.map((field, index) =>
        !field ? ` ${requiredFieldNames[index]}` : ""
      )
    : "Bạn đã hoàn thành tất cả thông tin";

  form.watch();

  return (
    <Modal
      title="Thêm trường học"
      description="Thêm một trường học để bắt đầu quản lý thông tin và các ngành học, học sinh"
      isOpen={isModalOpen}
      onClose={onClose}
      warning={warningText}
      variant={!isComplete ? "warning" : "success"}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {formStepField[step]}
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                {prevBtn}
                {nextBtn}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
