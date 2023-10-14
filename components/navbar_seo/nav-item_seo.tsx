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
      <div className="hidden lg:flex md:flex-row items-center justify-normal mx-auto ">
        <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-black/90 px-3 hover:bg-accent rounded-lg w-auto h-auto">
          Trang chủ
        </div>
        <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-white/90 ">
          <ComboboxDemo />
        </div>

        <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-black/90 px-3 hover:bg-accent rounded-sm w-[100px] hover:h-[35px]">
          <a href="">Liên Hệ</a>
        </div>
        <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-black/90 px-3 hover:bg-accent rounded-sm w-[100px] hover:h-[35px]">
          <a href="/id/ThongTinCacTruong">So Sánh</a>
        </div>
      </div>
    </>
  );
};

export default NavItem;
