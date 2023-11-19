"use client";

import { useEffect, useState } from "react";
import ForgotPasswordModal from "../modals/forgot-password-modal";

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
      <ForgotPasswordModal />
    </>
  );
};
