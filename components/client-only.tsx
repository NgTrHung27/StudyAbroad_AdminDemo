"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Navbar from "./navbar/navbar";

const ClientOnly = ({ children }) => {
  const [mounted, isMounted] = useState(false);
  const pathname = usePathname();

  const isSignIn = pathname !== "/sign-in";
  const isSignUp = pathname !== "/sign-up";

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="h-full bg-white">
        {isSignIn && isSignUp && <Navbar />}
        {children}
      </div>
    </>
  );
};

export default ClientOnly;
