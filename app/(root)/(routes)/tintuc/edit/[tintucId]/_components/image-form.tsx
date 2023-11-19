"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { News } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import NewsFileUpload from "./fileupload";
import { formImageNews } from "../constants";

type Props = {
  news: News;
};

const ImageForm = ({ news }: Props) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const onSubmit = async (values: z.infer<typeof formImageNews>) => {
    try {
      await axios.patch(`/api/news/${news.id}`, values);
      toast.success("Cập nhật thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật tin tức thất bại");
    } finally {
      router.refresh();
    }
  };

  return (
    <Card className="w-full h-auto mt-6 border bg-white rounded-md p-4">
      <CardHeader className="font-black flex-row items-center justify-around p-2">
        <CardTitle className="">THUMBNAILS</CardTitle>
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditting && <>Hủy</>}
          {!isEditting && news.imageNews && (
            <>
              <Pencil className="h-4 w-4 " />
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent className="relative h-20 md:h-44">
        {!isEditting && (
          <Image
            fill
            alt="thumbnailNews"
            src={news.imageNews}
            className="object-fit rounded-md"
          />
        )}

        {isEditting && (
          <div>
            <NewsFileUpload
              endpoint="schoolBackground"
              onChange={(url) => {
                if (url) {
                  onSubmit({ imageNews: url });
                }
              }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageForm;
