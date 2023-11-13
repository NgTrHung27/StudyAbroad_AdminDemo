"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formSchoolBackgroundSchema } from "@/constants/update-school-schema";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import SchoolFileUpload from "./school-file-upload";

type Props = {
  school: School;
};

const BackgroundForm = ({ school }: Props) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const onSubmit = async (
    values: z.infer<typeof formSchoolBackgroundSchema>
  ) => {
    try {
      await axios.patch(`/api/schools/${school.name}`, values);
      toast.success("Cập nhật thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật trường học thất bại");
    } finally {
      router.refresh();
    }
  };

  return (
    <Card className="w-full p-3">
      <CardHeader className="font-medium flex-row items-center justify-around p-2">
        <CardTitle>Hình nền trường học</CardTitle>
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditting && <>Hủy</>}
          {!isEditting && school.backgroundUrl && (
            <>
              <Pencil className="h-4 w-4 " />
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent className="relative h-[60vh] md:h-[50vh]">
        {!isEditting && (
          <Image
            fill
            alt="backgroundSchool"
            src={school.backgroundUrl}
            className="object-fit rounded-md"
          />
        )}

        {isEditting && (
          <div>
            <SchoolFileUpload
              endpoint="schoolBackground"
              onChange={(url) => {
                if (url) {
                  onSubmit({ backgroundUrl: url });
                }
              }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BackgroundForm;
