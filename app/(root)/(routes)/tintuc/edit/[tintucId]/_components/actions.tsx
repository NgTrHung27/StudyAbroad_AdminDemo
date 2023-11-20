"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { News } from "@prisma/client";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
  disabled: boolean;
  tintucId: string;
  news: News;
}

export const Actions = ({
  tintucId,
}: ActionsProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/news/${tintucId}`);
      toast.success("Xóa bài viết thành công");
      router.refresh();
      router.push(`/tintuc`);
    } catch (error) {
      toast.error("Xóa bài viết thất bại");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <ConfirmModal onConfirm={onDelete}>
        <Button size={"sm"} disabled={isLoading} className="mt-4">
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
};
