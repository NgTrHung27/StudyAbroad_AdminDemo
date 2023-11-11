"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
  disabled: boolean;
  taikhoanId: string;
  isPublished: boolean;
}

export const Actions = ({
  disabled,
  taikhoanId,
  isPublished,
}: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/users/${taikhoanId}/unpublish`);
        toast.success("Ngừng duyệt hồ sơ thành công");
      } else {
        await axios.patch(`/api/users/${taikhoanId}/publish`);
        toast.success("Duyệt hồ sơ thành công");
        confetti.onOpen();
      }
    } catch (error) {
      toast.error("Duyệt hồ so8 thất bại");
    } finally {
      router.refresh();
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/users/${taikhoanId}`);
      toast.success("Xóa hồ sơ thành công");
      router.refresh();
      router.push(`/taikhoan`);
    } catch (error) {
      toast.error("Xóa bài giảng thất bại");
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
        {isPublished ? "Ngừng duyệt" : "Duyệt"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size={"sm"} disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
