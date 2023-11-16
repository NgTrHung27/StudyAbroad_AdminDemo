"use client";

import { Button } from "@/components/ui/button";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Operation } from "@prisma/client";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface InfoProps {
  data: Operation;
}

const OperationInfo: React.FC<InfoProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { onClose } = usePreviewModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">Địa chỉ: {data.address}</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Đánh giá:</h3>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Link href={`/truonghoc/edit/${data.schoolId}/coso/edit/${data.id}`}>
          <Button
            onClick={() => onClose()}
            className="flex item-center gap-x-2"
          >
            Cập nhật
            <Pencil />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OperationInfo;
