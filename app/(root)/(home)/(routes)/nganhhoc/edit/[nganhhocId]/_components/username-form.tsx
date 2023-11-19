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
import { formEditProgramSchema } from "../../../../../../../../constaints-edit/constants-program";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Program } from "@prisma/client";

interface nameFormProps {
  program: Program;
}

const NameForm = ({ program }: nameFormProps) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formEditProgramSchema>>({
    resolver: zodResolver(formEditProgramSchema),
    defaultValues: {
      name: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formEditProgramSchema>) => {
    try {
      await axios.patch(`/api/program`, values);
      toast.success("Cập nhật ngành học thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật ngành học thất bại");
    } finally {
      router.refresh();
      form.reset();
    }
  };

  return (
    <>
      <div className="mt-6 border bg-white rounded-md p-4">
        <div className="font-medium flex items-center justify-between">
          Tên Ngành
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
          <p className="text-sm mt-2">{program.name}</p>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="Vd: Công nghệ thông tin"
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
    </>
  );
};

export default NameForm;
