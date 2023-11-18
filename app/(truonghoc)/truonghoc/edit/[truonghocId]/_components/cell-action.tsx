"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { MoreHorizontal, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BlogFull } from "@/types";
import { Modal } from "@/components/modal";

interface CellActionProps {
  data: BlogFull;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/schools/${data.schoolId}/blogs/${data.id}`);
      router.refresh();
      toast.success("Xóa blog thành công");
    } catch (error) {
      console.log(error);
      toast.error("Xóa blog thất bại");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Tùy chọn</span>
            <MoreHorizontal className="h-4 w-4" />
            <DropdownMenuSeparator />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Tùy chọn</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Xóa
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Bạn có chắn chắn muốn xóa không?"
      description="Hành động này không thể vãn hồi"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant={"outline"} onClick={onClose}>
          Hủy
        </Button>
        <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
          Đồng ý
        </Button>
      </div>
    </Modal>
  );
};
