"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { MouseEventHandler } from "react";

import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Program } from "@prisma/client";
import IconButton from "./icon-button";
import ReactStars from "react-stars";
import Currency from "@/components/currency";
import { Preview } from "@/components/preview";

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(
      `/truonghoc/edit/${program.schoolId}/nganhhoc/preview/${program?.id}`
    );
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen("program", { program });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square roudned-xl bg-gray-100 relative">
        <Image
          src={program.Image1}
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
        <p className="font-semibold text-lg">{program.name}</p>
        <div className="text-sm font-semibold line-clamp-2">
          <Preview value={program.description1} />
        </div>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={program.Price} />
      </div>
    </div>
  );
};

export default ProgramCard;
