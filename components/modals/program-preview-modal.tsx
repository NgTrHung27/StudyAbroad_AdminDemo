"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/app/(truonghoc)/truonghoc/edit/[truonghocId]/nganhhoc/preview/[nganhhocId]/_components/gallery";
import ProgramInfo from "@/app/(truonghoc)/truonghoc/edit/[truonghocId]/nganhhoc/preview/[nganhhocId]/_components/program-info";
import ProgramModal from "./program-modal";

const ProgramPreviewModal = () => {
  const previewModal = usePreviewModal();
  const { program } = usePreviewModal((state) => state.data);

  const isModalOpen = previewModal.isOpen && previewModal.type === "program";

  if (!program) {
    return null;
  }

  const images = [
    {
      id: program.Image1,
      url: program.Image1,
    },
    {
      id: program.Image2,
      url: program.Image2,
    },
  ];

  return (
    <ProgramModal open={isModalOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProgramInfo data={program} />
        </div>
      </div>
    </ProgramModal>
  );
};

export default ProgramPreviewModal;
