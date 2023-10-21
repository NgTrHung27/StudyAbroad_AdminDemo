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
import { ComboboxDemo } from "../ui/combobox";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

import React from "react";

const NavItem = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <div className="hidden lg:flex md:flex-row items-center justify-normal mx-auto gap-3 relative ">
        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          Trang chủ
        </div>
        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[22px]">
          <ComboboxDemo />
        </div>

        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          <a href="LienHe">Liên Hệ</a>
        </div>
        <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          <a href="SoSanh">So Sánh</a>
        </div>
      </div>
    </>
  );
};

export default NavItem;
