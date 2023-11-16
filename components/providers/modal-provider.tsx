"use client";

import { useEffect, useState } from "react";
import { AvatarModal } from "../modals/avatar-modal";
import { SchoolModal } from "../modals/create-school-modal";
import { StudentSchoolModal } from "../modals/add-student-school-modal";
import { OperationModal } from "../modals/create-operation-modal";
import PreviewModal from "../modals/operation-preview-modal";
import { ProgramModal } from "../modals/create-program-modal";
import ProgramPreviewModal from "../modals/program-preview-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AvatarModal />
      <SchoolModal />
      <StudentSchoolModal />
      <OperationModal />
      <PreviewModal />
      <ProgramModal />
      <ProgramPreviewModal />
    </>
  );
};
