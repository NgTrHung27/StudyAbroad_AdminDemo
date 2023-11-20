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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { formImageSchema } from "@/constaints-create/constant-history";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FileText, ImageIcon, Pencil, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import HistoryFileUpload from "./history-file-upload";

type Props = {
  schoolName: string;
  historyId: string;
  imageUrl: string;
};

const EditImageForm = ({ schoolName, historyId, imageUrl }: Props) => {
  const router = useRouter();
  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formImageSchema>>({
    resolver: zodResolver(formImageSchema),
    defaultValues: {
      imageUrl: imageUrl || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formImageSchema>) => {
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

  return (
    <div className="mb-6 border bg-slate-100 dark:bg-background rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Hình ảnh đại diện
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditting && <>Hủy</>}
          {!isEditting && !imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Thêm hình ảnh
            </>
          )}
          {!isEditting && imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Chọn hình ảnh
            </>
          )}
        </Button>
      </div>
      {!isEditting &&
        (!imageUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              alt="Upload"
              fill
              className="object-cover rounded-md"
              src={imageUrl}
            />
          </div>
        ))}

      {isEditting && (
        <div>
          <HistoryFileUpload
            endpoint="schoolBackground"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Khuyến khích sử dụng hình ảnh có tỷ lệ kích thước là 16:9
          </div>
        </div>
      )}
    </div>
  );
};

export default EditImageForm;
