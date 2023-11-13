"use client";

import { useSchoolModal } from "@/hooks/use-school-modal";
import { useEffect } from "react";

const SetupSchool = () => {
  const onOpen = useSchoolModal((state) => state.onOpen);
  const isOpen = useSchoolModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen("createSchool");
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupSchool;
