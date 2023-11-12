import { School, Student, User } from "@prisma/client";
import { create } from "zustand";

interface useSchoolModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface useAddStudentSchoolModalStore {
  data: ModalData;
  optionalData: ModalData;
  subData: ModalData;
  isOpen: boolean;
  onOpen: (
    data?: ModalData,
    optionalData?: ModalData,
    subData?: ModalData
  ) => void;
  onClose: () => void;
}

interface ModalData {
  students?: Student[];
  school?: School;
  users?: User[];
  schools?: School[];
}

export const useSchoolModal = create<useSchoolModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useAddStudentSchoolModal = create<useAddStudentSchoolModalStore>(
  (set) => ({
    data: {},
    optionalData: {},
    subData: {},
    isOpen: false,
    onOpen: (data = {}, optionalData = {}, subData = {}) =>
      set({ isOpen: true, data, optionalData, subData }),
    onClose: () => set({ isOpen: false }),
  })
);
