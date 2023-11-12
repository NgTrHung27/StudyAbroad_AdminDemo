"use client";

import { SafeUser, routes } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { School } from "@prisma/client";
import SchoolSwitcher from "./school-switcher";
import { UserButton } from "../user-button";

interface NavbarRoutesProps {
  currentUser?: SafeUser | null;
  schools: School[];
}

export const NavbarRoutesTruong = ({
  currentUser,
  schools,
}: NavbarRoutesProps) => {
  const pathname = usePathname();
  const isCreate = pathname?.includes("/create");
  const isUserEdit = pathname?.includes("/taikhoan/edit");

  return (
    <>
      <div className="flex gap-x-2 w-full items-center">
        <SchoolSwitcher items={schools} />
        <div className="ml-auto flex items-center gap-2">
          {(isCreate || isUserEdit) && (
            <Link href={"/truonghoc"}>
              <Button size={"sm"} variant={"ghost"}>
                <LogOut className="h-4 w-4 mr-2" />
                Quay về trang trường học
              </Button>
            </Link>
          )}
          <UserButton currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
