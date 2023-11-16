"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ProgramActionsProps {
  disabled: boolean;
  truonghocId: string;
  nganhhocId: string;
  isPublished: boolean;
}

export const ProgramActions = ({
  disabled,
  truonghocId,
  nganhhocId,
  isPublished,
}: ProgramActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(
          `/api/schools/${truonghocId}/programs/${nganhhocId}/unpublish`
        );
        toast.success("Ngừng công khai ngành học thành công");
      } else {
        await axios.patch(
          `/api/schools/${truonghocId}/programs/${nganhhocId}/publish`
        );
        toast.success("Công khai ngành học thành công");
        confetti.onOpen();
      }
    } catch (error) {
      toast.error("Công khai ngành học thất bại");
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/schools/${truonghocId}/programs/${nganhhocId}`);
      toast.success("Xóa ngành học thành công");
      router.refresh();
      router.push(`/truonghoc/edit/${truonghocId}`);
    } catch (error) {
      toast.error("Xóa ngành học thất bại");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant={"outline"}
        size={"sm"}
      >
        {isPublished ? "Ẩn ngành học" : "Hiển thị"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size={"sm"} disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
