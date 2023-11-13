"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Operation } from "@prisma/client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Preview } from "@/components/preview";
import ReactStars from "react-stars";
import Image from "next/image";

export const operationsColumns: ColumnDef<Operation>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tên cơ sở
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant={"link"}>{row.original.name}</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-[360px] h-full">
          <div className="w-full h-full flex justify-around space-x-4">
            <div className="relative aspect-video w-full">
              <Image
                alt="operationBackground"
                fill
                src={row.original.backgroundUrl}
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">{row.original.name}</h4>
              <Preview value={row.original.description} />
              <ReactStars
                count={5}
                value={4.8}
                size={24}
                color2={"#ffd700"}
                edit={false}
              />
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
];
