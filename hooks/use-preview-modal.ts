import { Operation } from "@prisma/client";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Operation;
  onOpen: (data: Operation) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Operation) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
