import { Operation, Program } from "@prisma/client";
import { create } from "zustand";

interface ModalData {
  operation?: Operation;
  program?: Program;
}

type ModalType = "operation" | "program";

interface PreviewModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  data: {},
  type: null,
  isOpen: false,
  onOpen: (type, data = {}) => set({ data, isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
}));

export default usePreviewModal;
