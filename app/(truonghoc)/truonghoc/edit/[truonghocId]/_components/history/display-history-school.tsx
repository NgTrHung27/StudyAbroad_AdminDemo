"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { History } from "@prisma/client";
import { Trash } from "lucide-react";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import EditDescription1Form from "./edit-description-1-form";
import EditDescription2Form from "./edit-description-2-form";

type Props = { schoolName: string; history: History };

const DisplayHistory = ({ schoolName, history }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
        <EditDescription1Form
          description={history.description1}
          schoolName={schoolName}
          historyId={history.id}
        />
        <EditDescription2Form
          description={history.description2}
          schoolName={schoolName}
          historyId={history.id}
        />
      </CardContent>
    </Card>
  );
};

export default DisplayHistory;
