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
import { formCreateHistorySchema } from "@/constaints-create/constant-history";
import FileUpload from "../file-upload";
import { useState } from "react";

enum STEPS {
  IMAGE = 0,
  DESCRIPTION1 = 1,
  DESCRIPTION2 = 2,
}

export const HistoryModal = () => {
  const router = useRouter();
  const { type, isOpen, onClose, data } = useSchoolModal();
  const isModalOpen = isOpen && type === "createHistory";
  const [step, setStep] = useState(STEPS.IMAGE);

  const { school } = data;

  const form = useForm<z.infer<typeof formCreateHistorySchema>>({
    resolver: zodResolver(formCreateHistorySchema),
    defaultValues: {
      imageUrl: "",
      description1: "",
      description2: "",
    },
  });

  if (!school) {
    return null;
  }

  const { isLoading, isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateHistorySchema>) => {
    try {
      await axios.post(`/api/schools/${school?.name}/histories`, values);

      router.refresh();
      toast.success("Thêm lịch sử thành công");
      form.reset();
    } catch (error) {
      toast.error("Thêm lịch sử thất bại " + error);
    } finally {
      onClose();
    }
  };

  const handlePrev = () => {
    if (step === STEPS.IMAGE) return;

    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    if (step === STEPS.DESCRIPTION2) return;

    setStep((currentStep) => currentStep + 1);
  };

  const imageUrlField = (
    <FormField
      control={form.control}
      name="imageUrl"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Hình ảnh 1</FormLabel>
          <FormControl>
            <FileUpload
              {...field}
              value={form.getValues("imageUrl")}
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

  const description1Field = (
    <FormField
      control={form.control}
      name="description1"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Đoạn thứ nhất</FormLabel>
          <FormControl>
            <Editor
              {...field}
              value={form.getValues("description1")}
              onChange={field.onChange}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const description2Field = (
    <FormField
      control={form.control}
      name="description2"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Đoạn thứ hai</FormLabel>
          <FormControl>
            <Editor
              {...field}
              value={form.getValues("description2")}
              onChange={field.onChange}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const prevBtn = (
    <>
      {step !== STEPS.IMAGE && (
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
      {step === STEPS.DESCRIPTION2 ? (
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

  const formStepField = [imageUrlField, description1Field, description2Field];

  const requiredFields = [
    form.getValues("imageUrl"),
    form.getValues("description1"),
    form.getValues("description2"),
  ];

  const requiredFieldNames = ["Hình ảnh", "Đoạn thứ nhất", "Đoạn thứ hai"];

  const isComplete = requiredFields.every(Boolean);

  const warningText = !isComplete
    ? "Thiếu thông tin: " +
      requiredFields.map((field, index) =>
        !field ? ` ${requiredFieldNames[index]}` : ""
      )
    : "Bạn đã hoàn thành tất cả thông tin";

  return (
    <Modal
      title="Thêm lịch sử"
      description="Thêm lịch sử để quản lý các thông tin liên quan đến lịch sử của trường học"
      isOpen={isModalOpen}
      onClose={onClose}
      warning={warningText}
      variant={!isComplete ? "warning" : "success"}
    >
      <div>
        <div className="py-2 pb-4">
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
