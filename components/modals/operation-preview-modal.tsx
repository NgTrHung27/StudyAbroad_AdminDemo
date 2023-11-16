"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import OperationModal from "./operation-modal";
import OperationInfo from "@/app/(truonghoc)/truonghoc/edit/[truonghocId]/coso/preview/[cosoId]/_components/operation-info";
import GalleryTab from "@/app/(truonghoc)/truonghoc/edit/[truonghocId]/coso/preview/[cosoId]/_components/gallery-tab";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const { operation } = usePreviewModal((state) => state.data);

  const isModalOpen = previewModal.isOpen && previewModal.type === "operation";

  if (!operation) {
    return null;
  }

  return (
    <OperationModal open={isModalOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <GalleryTab background={operation.backgroundUrl} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <OperationInfo data={operation} />
        </div>
      </div>
    </OperationModal>
  );
};

export default PreviewModal;
