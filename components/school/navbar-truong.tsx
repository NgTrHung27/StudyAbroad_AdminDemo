"use client";

import { useEffect, useState } from "react";
import { SafeUser } from "@/types";
import { MobileSidebar } from "../mobile-sidebar";
import { NavbarRoutesTruong } from "./navbar-routes-truong";
import { School } from "@prisma/client";

interface NavbarProps {
  currentUser?: SafeUser | null;
  schools: School[];
}

const NavbarTruong = ({ currentUser, schools }: NavbarProps) => {
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-4 border-b h-full flex items-center bg-white dark:bg-[#020817] shadow-sm">
      <MobileSidebar />
      <NavbarRoutesTruong schools={schools} currentUser={currentUser} />
    </div>
  );
};

export default NavbarTruong;
