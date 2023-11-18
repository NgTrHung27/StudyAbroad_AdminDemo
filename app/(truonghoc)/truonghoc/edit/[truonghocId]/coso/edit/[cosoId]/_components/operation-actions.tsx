"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface OperationActionsProps {
  disabled: boolean;
  truonghocId: string;
  cosoId: string;
  isPublished: boolean;
}

export const OperationActions = ({
  disabled,
  truonghocId,
  cosoId,
  isPublished,
}: OperationActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(
          `/api/schools/${truonghocId}/operations/${cosoId}/unpublish`
        );
        toast.success("Ngừng công khai cơ sở thành công");
      } else {
        await axios.patch(
          `/api/schools/${truonghocId}/operations/${cosoId}/publish`
        );
        toast.success("Công khai cơ sở thành công");
        confetti.onOpen();
      }
    } catch (error) {
      toast.error("Công khai cơ sở thất bại");
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/schools/${truonghocId}/operations/${cosoId}`);
      toast.success("Xóa cơ sở thành công");
      router.refresh();
      router.push(`/api/schools/${truonghocId}`);
    } catch (error) {
      toast.error("Xóa cơ sở thất bại");
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
        {isPublished ? "Ẩn cơ sở" : "Hiển thị"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size={"sm"} disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
