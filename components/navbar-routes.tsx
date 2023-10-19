"use client";

import { SafeUser, routes } from "@/types";
import Heading from "../app/(root)/_components/heading";
import { UserButton } from "../app/(root)/_components/user-button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

interface NavbarRoutesProps {
  currentUser?: SafeUser | null;
}

export const NavbarRoutes = ({ currentUser }: NavbarRoutesProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCreate = pathname?.includes("/create");
  const isUserEdit = pathname?.includes("/taikhoan/edit");

  const route = routes.filter((route) => route.href === pathname)[0];

  return (
    <>
      <div className="flex gap-x-2 w-full items-center">
        <Heading
          title={route?.label}
          description={
            isHome
              ? `Chào mừng trở lại, ${currentUser?.name}`
              : route?.description
          }
          icon={route?.icon}
        />
        <div className="ml-auto flex items-center gap-2">
          {(isCreate || isUserEdit) && (
            <Link href={"/taikhoan"}>
              <Button size={"sm"} variant={"ghost"}>
                <LogOut className="h-4 w-4 mr-2" />
                Quay về trang tài khoản
              </Button>
            </Link>
          )}
          <UserButton currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
