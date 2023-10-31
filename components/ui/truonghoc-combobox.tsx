
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
import { School } from "@prisma/client";

interface Props {
  schools: School[];
}

export function TruongHocCombobox({ schools }: Props) {
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
            ? schools.find((school) => school.name === value)?.name
            : "Trường Học"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandGroup>
            {schools.map((school) => (
              <CommandItem
                key={school.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  router.push(`/TruongHoc/${school.name}`);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-5 w-4",
                    value === school.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {school.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
