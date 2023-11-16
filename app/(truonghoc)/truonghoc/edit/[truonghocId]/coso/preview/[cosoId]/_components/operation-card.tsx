"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { MouseEventHandler } from "react";

import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Operation } from "@prisma/client";
import IconButton from "./icon-button";

interface OperationCardProps {
  operation: Operation;
}

const OperationCard: React.FC<OperationCardProps> = ({ operation }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(
      `/truonghoc/edit/${operation.schoolId}/coso/preview/${operation?.id}`
    );
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen("operation", { operation });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square roudned-xl bg-gray-100 relative">
        <Image
          src={operation.backgroundUrl}
          fill
          alt="Image"
          className="aspect-square rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{operation.name}</p>
        <p className="text-sm text-gray-500">{operation.address}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default OperationCard;
