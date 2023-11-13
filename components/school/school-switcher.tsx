"use client";

import * as React from "react";
import { Check, ChevronsUpDown, PlusCircle, Store } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useParams, useRouter } from "next/navigation";
import { useSchoolModal } from "@/hooks/use-school-modal";
import Image from "next/image";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface SchoolSwitcherProps extends PopoverTriggerProps {
  items: Record<string, any>[];
}

export default function SchoolSwitcher({
  className,
  items = [],
}: SchoolSwitcherProps) {
  const { onOpen } = useSchoolModal();

  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
    logoUrl: item.logoUrl,
  }));

  const currentSchool = formattedItems.find(
    (item) => item.value === params?.truonghocId
  );

  const [open, setOpen] = React.useState(false);

  const onSchoolSelect = (school: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/truonghoc/edit/${school.value}`);
  };

  if (!currentSchool) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Chọn một trường học"
          className={cn("w-[200px] justify-between", className)}
        >
          <Image
            width={16}
            height={16}
            alt="logoschool"
            src={currentSchool.logoUrl}
            className="mr-2"
          />
          <span className="truncate">{currentSchool?.label}</span>
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Tìm kiếm..." />
            <CommandEmpty>Không tìm thấy trường học</CommandEmpty>
            <CommandGroup heading="Trường học">
              {formattedItems.map((school) => (
                <CommandItem
                  key={school.value}
                  onSelect={() => onSchoolSelect(school)}
                  className="text-sm"
                >
                  <Image
                    width={16}
                    height={16}
                    alt="logoschool"
                    src={school.logoUrl}
                    className="mr-2"
                  />
                  <span className="truncate">{school.label}</span>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentSchool?.value === school.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  onOpen("createSchool");
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Tạo trường học mới
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
