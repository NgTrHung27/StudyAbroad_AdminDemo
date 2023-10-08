"use client";

import { useEffect, useState } from "react";
import { NavbarRoutes } from "../../../components/navbar-routes";
import { SafeUser } from "@/types";
import { MobileSidebar } from "./mobile.sidebar";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes currentUser={currentUser} />
    </div>
  );
};

export default Navbar;
