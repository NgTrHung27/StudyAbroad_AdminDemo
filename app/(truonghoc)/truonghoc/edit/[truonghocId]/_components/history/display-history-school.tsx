"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Preview } from "@/components/preview";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { History } from "@prisma/client";
import { FileText, Pencil, Trash } from "lucide-react";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Heading from "@/components/heading";

type Props = { schoolName: string; history: History };

const DisplayHistory = ({ schoolName, history }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((value) => !value);

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/schools/${schoolName}/histories/${history.id}`);
      toast.success("Xóa lịch sử thành công");
      router.refresh();
    } catch (error) {
      toast.error("Xóa lịch sử thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <CardTitle>Lịch sử trường học</CardTitle>
            <CardDescription>Thông tin về lịch sử của trường</CardDescription>
          </div>
          <div className="flex items-center gap-x-2">
            {!isEditing ? (
              <Button
                onClick={() => toggleEdit()}
                variant={"ghost"}
                className="w-full"
              >
                <Pencil className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={() => toggleEdit()} variant={"ghost"}>
                Hủy
              </Button>
            )}
            <div className="flex items-center gap-x-2">
              <ConfirmModal onConfirm={onDelete}>
                <Button size={"sm"} disabled={isLoading}>
                  <Trash className="h-4 w-4" />
                </Button>
              </ConfirmModal>
            </div>
          </div>
        </div>
        <Separator />
      </CardHeader>
      <CardContent>
        {!isEditing ? (
          <>
            <Heading
              icon={FileText}
              title="Mô tả 1"
              description="Nhập đoạn thứ nhất của lịch sử"
            />
            <Preview value={history.description1} />
            <Heading
              icon={FileText}
              title="Mô tả 2"
              description="Nhập đoạn thứ hai của lịch sử"
            />
            <Preview value={history.description2} />
          </>
        ) : (
          // <EditRequirementForm
          //   description={requirement.description}
          //   schoolName={schoolName}
          //   requirementId={requirement.id}
          //   toggleEdit={toggleEdit}
          // />
          <div>Test</div>
        )}
      </CardContent>
    </Card>
  );
};

export default DisplayHistory;
