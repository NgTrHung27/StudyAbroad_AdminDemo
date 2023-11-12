"use client";

import React, { useState } from "react";
import { School } from "@prisma/client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { formSchoolLogoSchema } from "@/constants/update-school-schema";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SchoolFileUpload from "./school-file-upload";

type Props = {
  school: School;
};

const LogoForm = ({ school }: Props) => {
  const router = useRouter();

  const [hovering, setHovering] = useState(false);

  const onMouseEnter = () => setHovering(true);
  const onMouteLeave = () => setHovering(false);

  const [isEditting, setIsEditting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchoolLogoSchema>) => {
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

  const toggleEdit = () => {
    setIsEditting((current) => !current);
    setHovering(false);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      {!isEditting && (
        <div
          className="relative w-36 h-36"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouteLeave}
        >
          <>
            <Image
              fill
              className="object-fit rounded-full"
              alt="logoSchool"
              src={school.logoUrl}
            />
            {hovering && (
              <>
                <Button
                  onClick={toggleEdit}
                  variant={"ghost"}
                  className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:opacity-50 rounded-full transition ease-in-out delay-75"
                >
                  <ImageIcon />
                </Button>
                <p className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2  text-white">
                  Đổi logo
                </p>
              </>
            )}
          </>
        </div>
      )}
      {isEditting && (
        <div className="m-3">
          <Button onClick={toggleEdit} variant={"ghost"}>
            {isEditting && <>Hủy</>}
          </Button>
          <SchoolFileUpload
            endpoint="logoImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ logoUrl: url });
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LogoForm;
