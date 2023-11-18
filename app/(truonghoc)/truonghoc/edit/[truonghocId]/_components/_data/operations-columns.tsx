"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye, MoreHorizontal, Pencil } from "lucide-react";
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
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
          <div className="relative flex items-center">
            <Image
              alt="operationBackground"
              width={30}
              height={20}
              src={row.original.backgroundUrl}
            />
            <Button variant={"link"}>{row.original.name}</Button>
          </div>
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
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Địa chỉ
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Trạng thái
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isPublished = !!row.getValue("isPublished");

      return (
        <Badge
          className={cn(
            "bg-slate-200 text-black",
            isPublished && "bg-green-400"
          )}
        >
          {isPublished ? "Đang hiển thị" : "Đang ẩn"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="h-4 w-8 p-0">
              <span className="sr-only">Tùy chọn</span>
              <MoreHorizontal className="h4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link
              href={`/truonghoc/edit/${row.original.schoolId}/coso/preview/${id}`}
            >
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" />
                Xem trước
              </DropdownMenuItem>
            </Link>
            <Link
              href={`/truonghoc/edit/${row.original.schoolId}/coso/edit/${id}`}
            >
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" />
                Chỉnh sửa
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
