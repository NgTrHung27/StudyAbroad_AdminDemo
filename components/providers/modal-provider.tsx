"use client";

import { useEffect, useState } from "react";
import { AvatarModal } from "../modals/avatar-modal";
import { SchoolModal } from "../modals/create-school-modal";
import { StudentSchoolModal } from "../modals/add-student-school-modal";

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
    </>
  );
};
