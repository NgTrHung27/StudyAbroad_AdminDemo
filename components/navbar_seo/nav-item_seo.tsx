"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
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
        <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-white/90 ">
          Trang chủ
        </div>
        <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-white/90 ">
          <ComboboxDemo />
        </div>
      </div>
    </>
  );
};

export default NavItem;
