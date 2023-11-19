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
import { Program } from "@prisma/client";
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
import Currency from "@/components/currency";
import { ScrollArea } from "@/components/ui/scroll-area";

export const programsColumns: ColumnDef<Program>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tên ngành học
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
              src={row.original.Image1}
            />
            <Button variant={"link"}>{row.original.name}</Button>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-[500px] h-full">
          <ScrollArea className="h-[500px] rounded-md border p-4">
            <div className="w-full h-full flex flex-col justify-around space-x-4">
              <div className="relative aspect-video w-full">
                <Image
                  alt="operationBackground"
                  fill
                  src={row.original.Image2}
                />
              </div>
              <div className="space-y-2">
                <h2 className=" text-lg font-semibold py-2">
                  Tên ngành học: {row.original.name}
                </h2>
                <div className="flex flex-col gap-y-2">
                  <p className="font-semibold">Thông tin ngành học</p>
                  <Preview value={row.original.description1} />
                  <p className="font-semibold">Chi tiết ngành học</p>
                  <Preview value={row.original.description2} />
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="font-semibold">Chi phí:</p>
                  <Currency value={row.original.Price} />
                </div>
              </div>
            </div>
          </ScrollArea>
        </HoverCardContent>
      </HoverCard>
    ),
  },
  {
    accessorKey: "Price",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Chi phí
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        <Currency value={row.original.Price} />
      </div>
    ),
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
              href={`/truonghoc/edit/${row.original.schoolId}/nganhhoc/preview/${id}`}
            >
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" />
                Xem trước
              </DropdownMenuItem>
            </Link>
            <Link
              href={`/truonghoc/edit/${row.original.schoolId}/nganhhoc/edit/${id}`}
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
