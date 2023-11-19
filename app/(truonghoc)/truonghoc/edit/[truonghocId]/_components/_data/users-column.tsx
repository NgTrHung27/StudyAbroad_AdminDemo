"use client";

import { Button } from "@/components/ui/button";
import { Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { StudentProfile } from "@/types";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import PhoneInput from "react-phone-number-input";

export const usersColumns: ColumnDef<StudentProfile>[] = [
  {
    id: "name",
    accessorKey: "user.name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tên học sinh
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <HoverCard>
        <HoverCardTrigger>
          <div className="flex items-center gap-x-2 hover:underline">
            <Avatar>
              <AvatarImage
                alt="avatar"
                src={row.original.user.avatar || "/placeholder.jpg"}
              />
            </Avatar>
            {row.original.user.name}
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-[500px] p-2">
          <div className="grid grid-cols-2 gap-2">
            <Avatar className="w-full h-full">
              <AvatarImage
                alt="avatar"
                src={row.original.user.avatar || "/placeholder.jpg"}
              />
            </Avatar>
            <div>
              <Tabs defaultValue="information">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="information">Thông tin</TabsTrigger>
                  <TabsTrigger value="certificate">Chứng chỉ</TabsTrigger>
                </TabsList>
                <TabsContent value="information" className="space-y-4">
                  <p>
                    <strong>Tên: </strong>
                    <span>{row.original.user.name}</span>
                  </p>
                  <p>
                    <strong>Ngày sinh: </strong>
                    <span>
                      {format(row.original.user.dob, "dd MMMM, yyyy", {
                        locale: vi,
                      })}
                    </span>
                  </p>
                  <p>
                    <strong>Địa chỉ: </strong>
                    <span>{row.original.user.address}</span>
                  </p>
                  <p>
                    <strong>Giới tính: </strong>
                    <span
                      className={cn(
                        row.original.user.gender.toLowerCase() === "nam"
                          ? "text-blue-400 font-semibold"
                          : "text-pink-300 font-semibold"
                      )}
                    >
                      {row.original.user.gender}
                    </span>
                  </p>
                  <p>
                    <strong>Số điện thoại: </strong>
                    <PhoneInput
                      disabled={true}
                      onChange={() => {}}
                      value={row.original.user.phoneNumber}
                      defaultCountry="VN"
                    />
                  </p>
                </TabsContent>
                <TabsContent value="certificate" className="space-y-4">
                  <p>
                    <strong>Trình độ học vấn: </strong>
                    <span>Cao đẳng</span>
                  </p>
                  <p>
                    <strong>Loại chứng chỉ: </strong>
                    <span>IELTS</span>
                  </p>
                  <p>
                    <strong>GPA: </strong>
                    <span>3.4 (4.0)</span>
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="p-2">
            <p className="text-lg font-semibold">Lý do đi du học:</p>
            <Preview value={row.original.user.description || ""} />
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
  {
    id: "dob",
    accessorKey: "user.dob",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày sinh
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>{format(row.original.user.dob, "do MMM, yyyy", { locale: vi })}</div>
    ),
  },
  {
    id: "isPublished",
    accessorKey: "user.isPublished",
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
            "bg-yellow-200 text-black",
            isPublished && "bg-green-400"
          )}
        >
          {isPublished ? "Đã xét duyệt" : "Chưa xét duyệt"}
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
            <Link href={`/taikhoan/edit/${id}`}>
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" />
                Xem thông tin chi tiết
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
