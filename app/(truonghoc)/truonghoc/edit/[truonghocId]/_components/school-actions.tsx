"use client";

import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
  disabled: boolean;
  truonghocId: string;
  isPublished: boolean;
}

export const SchoolActions = ({
  disabled,
  truonghocId,
  isPublished,
}: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/schools/${truonghocId}/unpublish`);
        toast.success("Ngừng duyệt hồ sơ thành công");
      } else {
        await axios.patch(`/api/schools/${truonghocId}/publish`);
        toast.success("Hiển thị trường học thành công");
        confetti.onOpen();
      }
    } catch (error) {
      toast.error("Hiển thị trường học thất bại");
    } finally {
      router.refresh();
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
        {isPublished ? "Ẩn trường học" : "Hiển thị"}
      </Button>
    </div>
  );
};
