"use client";

import { SafeUser, routes } from "@/types";
import Heading from "./heading";
import { UserButton } from "./user-button";

interface NavbarRoutesProps {
  currentUser?: SafeUser | null;
}

export const NavbarRoutes = ({ currentUser }: NavbarRoutesProps) => {
  return (
    <>
      <div className="flex gap-x-2 w-full items-center">
        <Heading
          title={routes[0].label}
          description={`Chào mừng trở lại, ${currentUser?.username}`}
        />
        <div className="ml-auto">
          <UserButton currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
