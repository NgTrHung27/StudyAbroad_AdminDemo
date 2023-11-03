"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { TruongHocCombobox } from "../ui/truonghoc-combobox";

import React from "react";
import { School } from "@prisma/client";

interface Props {
  schools: School[];
}

const NavItem = ({ schools }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <div className="hidden lg:flex md:flex-row items-center justify-normal mx-auto gap-3 relative ">
        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          Trang chủ
        </div>
        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[22px]">
          <TruongHocCombobox schools={schools} />
        </div>

        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          <a href="LienHe">Liên Hệ</a>
        </div>
        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          <a href="/SoSanh">So Sánh</a>
        </div>
        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          <a href="/HocPhi">Học Phí</a>
        </div>
      </div>
    </>
  );
};

export default NavItem;
