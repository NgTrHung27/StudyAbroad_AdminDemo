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
import { formCreateOperationSchema } from "@/constants/create-operation-schema";
import { useRouter } from "next/navigation";
import { Editor } from "../editor";

enum STEPS {
  NAME = 0,
  DESCRIPTION = 1,
  BACKGROUND = 2,
}

export const OperationModal = () => {
  const router = useRouter();
  const { type, isOpen, onClose, data } = useSchoolModal();
  const isModalOpen = isOpen && type === "createOperation";
  const [step, setStep] = useState(STEPS.NAME);

  const { school } = data;

  const form = useForm<z.infer<typeof formCreateOperationSchema>>({
    resolver: zodResolver(formCreateOperationSchema),
    defaultValues: {
      name: "",
      address: "",
      description: "",
      backgroundUrl: "",
    },
  });

  if (!school) {
    return null;
  }

  const { isLoading, isValid, isSubmitting } = form.formState;

  const onSubmit = async (
    values: z.infer<typeof formCreateOperationSchema>
  ) => {
    try {
      await axios.post(`/api/schools/${school?.name}/operations`, values);

      router.refresh();
      toast.success("Thêm cơ sở thành công");
    } catch (error) {
      toast.error("Thêm cơ sở thất bại " + error);
    } finally {
      onClose();
    }
  };

  const handlePrev = () => {
    if (step === STEPS.NAME) return;

    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    if (step === STEPS.BACKGROUND) return;

    setStep((currentStep) => currentStep + 1);
  };

  const nameField = (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tên cơ sở</FormLabel>
            <FormControl>
              <Input
                disabled={isLoading || isSubmitting}
                placeholder="West Hastings"
                {...field}
                value={form.getValues("name")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Địa chỉ</FormLabel>
            <FormControl>
              <Input
                disabled={isLoading || isSubmitting}
                placeholder="609 W Hastings St, Vancouver, BC V6B 4W4"
                {...field}
                value={form.getValues("address")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const descriptionField = (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Mô tả cơ sở</FormLabel>
          <FormControl>
            <Editor
              {...field}
              value={form.getValues("description")}
              onChange={field.onChange}
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
          <FormLabel>Hình nền cơ sở</FormLabel>
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
      {step === STEPS.BACKGROUND ? (
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

  const formStepField = [nameField, descriptionField, backgroundField];

  const requiredFields = [
    form.getValues("name"),
    form.getValues("description"),
    form.getValues("backgroundUrl"),
  ];

  const requiredFieldNames = ["Tên cơ sở", "Mô tả cơ sở", "Hình nền"];

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
      title="Thêm cơ sở"
      description="Thêm cơ sở để quản lý các thông tin liên quan đến cơ sở của trường học"
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
