"use client";

import { SafeUser, routes } from "@/types";
import Heading from "./heading";
import { UserButton } from "./user-button";
import { usePathname } from "next/navigation";

interface NavbarRoutesProps {
  currentUser?: SafeUser | null;
}

export const NavbarRoutes = ({ currentUser }: NavbarRoutesProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCreate = pathname?.includes("create");

  const route = routes.filter((route) => route.href === pathname)[0];

  return (
    <>
      <div className="flex gap-x-2 w-full items-center">
        <Heading
          title={route?.label}
          description={
            isHome
              ? `Chào mừng trở lại, ${currentUser?.username}`
              : route?.description
          }
          icon={route?.icon}
        />
        <div className="ml-auto">
          <UserButton currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
