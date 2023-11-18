"use client";

import Currency from "@/components/currency";
import { Preview } from "@/components/preview";
import { Button } from "@/components/ui/button";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Program } from "@prisma/client";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface InfoProps {
  data: Program;
}

const ProgramInfo: React.FC<InfoProps> = ({ data }) => {
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
        <p className="text-2xl text-gray-900">
          <Currency value={data.Price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <h3 className="font-semibold text-black">Thông tin ngành học:</h3>
        <Preview value={data.description1} />
        <h3 className="font-semibold text-black">Chi tiết ngành học:</h3>
        <Preview value={data.description2} />
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Link
          href={`/truonghoc/edit/${data.schoolId}/nganhhoc/edit/${data.id}`}
        >
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

export default ProgramInfo;
