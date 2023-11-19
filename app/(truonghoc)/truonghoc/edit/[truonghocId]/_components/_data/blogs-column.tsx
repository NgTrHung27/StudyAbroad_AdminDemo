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
import Link from "next/link";
import { BlogFull } from "@/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Preview } from "@/components/preview";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import PhoneInput from "react-phone-number-input";
import { CellAction } from "../cell-action";

export const blogsColumns: ColumnDef<BlogFull>[] = [
  {
    id: "name",
    accessorKey: "student.user.name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Người đăng
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
                src={row.original.student.user.avatar || "/placeholder.jpg"}
              />
            </Avatar>
            {row.original.student.user.name}
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-[500px] p-2">
          <div className="grid grid-cols-2 gap-2">
            <Avatar className="w-full h-full">
              <AvatarImage
                alt="avatar"
                src={row.original.student.user.avatar || "/placeholder.jpg"}
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
                    <span>{row.original.student.user.name}</span>
                  </p>
                  <p>
                    <strong>Ngày sinh: </strong>
                    <span>
                      {format(row.original.student.user.dob, "dd MMMM, yyyy", {
                        locale: vi,
                      })}
                    </span>
                  </p>
                  <p>
                    <strong>Địa chỉ: </strong>
                    <span>{row.original.student.user.address}</span>
                  </p>
                  <p>
                    <strong>Giới tính: </strong>
                    <span
                      className={cn(
                        row.original.student.user.gender === "Nam"
                          ? "text-blue-400 font-semibold"
                          : "text-pink-300 font-semibold"
                      )}
                    >
                      {row.original.student.user.gender}
                    </span>
                  </p>
                  <p>
                    <strong>Số điện thoại: </strong>
                    <PhoneInput
                      disabled={true}
                      onChange={() => {}}
                      value={row.original.student.user.phoneNumber}
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
            <p className="text-lg font-semibold">Lý do đi học:</p>
            <Preview value={row.original.student.user.description || ""} />
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nội dung
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        <Preview value={row.original.description} />
      </div>
    ),
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ngày đăng
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        {format(row.original.createdAt, "dd MMMM, yyyy HH:MM:SS", {
          locale: vi,
        })}
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
