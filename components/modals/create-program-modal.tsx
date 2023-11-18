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
import { formCreateOperationSchema } from "@/constants/create-opeartion-schema";
import { useRouter } from "next/navigation";
import { Editor } from "../editor";
import { formCreateProgramSchema } from "@/constaints-create/constants-program";

enum STEPS {
  INFORMATION = 0,
  DESCRIPTION1 = 1,
  DESCRIPTION2 = 2,
  IMAGE1 = 3,
  IMAGE2 = 4,
}

export const ProgramModal = () => {
  const router = useRouter();
  const { type, isOpen, onClose, data } = useSchoolModal();
  const isModalOpen = isOpen && type === "createProgram";
  const [step, setStep] = useState(STEPS.INFORMATION);

  const { school } = data;

  const form = useForm<z.infer<typeof formCreateProgramSchema>>({
    resolver: zodResolver(formCreateProgramSchema),
    defaultValues: {
      name: "",
      description1: "",
      description2: "",
      Price: 200000,
      Image1: "",
      Image2: "",
    },
  });

  if (!school) {
    return null;
  }

  const { isLoading, isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formCreateProgramSchema>) => {
    try {
      await axios.post(`/api/schools/${school?.name}/programs`, values);

      router.refresh();
      toast.success("Thêm ngành học thành công");
    } catch (error) {
      toast.error("Thêm ngành học thất bại " + error);
    } finally {
      onClose();
    }
  };

  const handlePrev = () => {
    if (step === STEPS.INFORMATION) return;

    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    if (step === STEPS.IMAGE2) return;

    setStep((currentStep) => currentStep + 1);
  };

  const informationField = (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tên ngành học</FormLabel>
            <FormControl>
              <Input
                disabled={isLoading || isSubmitting}
                placeholder="UI/UX Design Specialist"
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
        name="Price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Chi phí</FormLabel>
            <FormControl>
              <Input
                type="number"
                disabled={isLoading || isSubmitting}
                placeholder="100000.000"
                min={1000}
                max={1000000000}
                {...field}
                value={form.getValues("Price")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const description1Field = (
    <FormField
      control={form.control}
      name="description1"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Thông tin ngành học</FormLabel>
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
          <FormLabel>Chi tiết ngành học</FormLabel>
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

  const image1Field = (
    <FormField
      control={form.control}
      name="Image1"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Hình ảnh 1</FormLabel>
          <FormControl>
            <FileUpload
              {...field}
              value={form.getValues("Image1")}
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

  const image2Field = (
    <FormField
      control={form.control}
      name="Image2"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Hình ảnh 2</FormLabel>
          <FormControl>
            <FileUpload
              {...field}
              value={form.getValues("Image2")}
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
      {step !== STEPS.INFORMATION && (
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
      {step === STEPS.IMAGE2 ? (
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

  const formStepField = [
    informationField,
    description1Field,
    description2Field,
    image1Field,
    image2Field,
  ];

  const requiredFields = [
    form.getValues("name"),
    form.getValues("Price"),
    form.getValues("description1"),
    form.getValues("description2"),
    form.getValues("Image1"),
    form.getValues("Image2"),
  ];

  const requiredFieldNames = [
    "Tên cơ sở",
    "Chi phí",
    "Thông tin ngành học",
    "Chi tiết ngành học",
    "Hình ảnh 1",
    "Hình ảnh 2",
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
      title="Thêm ngành học"
      description="Thêm ngành học để quản lý các thông tin liên quan đến ngành học của trường học"
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
