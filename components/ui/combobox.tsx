"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const truongHocs = [
  {
    value: "Cornerstone International Community College of Canada",
    label: "Cornerstone International Community College of Canada",
  },
  {
    value: "Metropolitan Community College",
    label: "Metropolitan Community College",
  },
  {
    value: "UCW University Canada West",
    label: "UCW University Canada West",
  },
  {
    value: "University of the Fraser Valley",
    label: "University of the Fraser Valley",
  },
  {
    value: "Sprott Shaw College",
    label: "Sprott Shaw College",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-center"
        >
          {value
            ? truongHocs.find((truongHoc) => truongHoc.value === value)?.label
            : "Trường Học"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandGroup>
            {truongHocs.map((truongHoc) => (
              <CommandItem
                key={truongHoc.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  router.push(`/TruongHoc/${truongHoc.label}`);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-5 w-4",
                    value === truongHoc.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {truongHoc.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
