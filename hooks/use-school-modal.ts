import { StudentProfile } from "@/types";
import { Operation, School, Student, User } from "@prisma/client";
import { create } from "zustand";

interface useSchoolModalStore {
  data: ModalData;
  optionalData: ModalData;
  subData: ModalData;
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (
    type: ModalType,
    data?: ModalData,
    optionalData?: ModalData,
    subData?: ModalData
  ) => void;
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
  students?: StudentProfile[];
  school?: School;
  users?: User[];
  schools?: School[];
}

export const useSchoolModal = create<useSchoolModalStore>((set) => ({
  data: {},
  optionalData: {},
  subData: {},
  type: null,
  isOpen: false,
  onOpen: (type, data = {}, optionalData = {}, subData = {}) =>
    set({ isOpen: true, type, data, optionalData, subData }),
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
