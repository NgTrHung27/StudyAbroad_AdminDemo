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
import { Requirement } from "@prisma/client";
import EditRequirementForm from "./edit-requirement-form";
import { Pencil, Trash } from "lucide-react";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = { schoolName: string; requirement: Requirement };

const DisplayRequirement = ({ schoolName, requirement }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((value) => !value);

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(
        `/api/schools/${schoolName}/requirements/${requirement.id}`
      );
      toast.success("Xóa yêu cầu nhập học thành công");
      router.refresh();
    } catch (error) {
      toast.error("Xóa yêu cầu nhập học thất bại");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <CardTitle>Yêu cầu nhập học</CardTitle>
            <CardDescription>
              Thông tin về điều kiện nhập học của trường
            </CardDescription>
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
          <Preview value={requirement.description} />
        ) : (
          <EditRequirementForm
            description={requirement.description}
            schoolName={schoolName}
            requirementId={requirement.id}
            toggleEdit={toggleEdit}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default DisplayRequirement;
