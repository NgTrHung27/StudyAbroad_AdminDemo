"use client";

import React from "react";
import { useEffect, useState } from "react";

const ClientOnly = ({ children }) => {
  const [isMounted, setIsMoounted] = useState(false);

  useEffect(() => {
    setIsMoounted(true);
  }, []);

  return <>{children}</>;
};

export default ClientOnly;
