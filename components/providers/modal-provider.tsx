"use client";

import { useEffect, useState } from "react";
import { AvatarModal } from "../modals/avatar-modal";

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
    </>
  );
};
