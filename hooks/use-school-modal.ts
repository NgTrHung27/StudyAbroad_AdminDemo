import { Operation, School, Student, User } from "@prisma/client";
import { create } from "zustand";

interface useSchoolModalStore {
  data: ModalData;
  optionalData: ModalData;
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData, optionalData?: ModalData) => void;
  onClose: () => void;
}

type ModalType =
  | "createSchool"
  | "createOperation"
  | "createHistory"
  | "createBlog"
  | "createProgram"
  | "createRequirement"
  | "createHistory"
  | "createBlog";

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
  operation?: Operation;
  students?: Student[];
  school?: School;
  users?: User[];
  schools?: School[];
}

export const useSchoolModal = create<useSchoolModalStore>((set) => ({
  data: {},
  optionalData: {},
  type: null,
  isOpen: false,
  onOpen: (type, data = {}, optionalData = {}) =>
    set({ isOpen: true, type, data, optionalData }),
  onClose: () => set({ type: null, isOpen: false }),
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
