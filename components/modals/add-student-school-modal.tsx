"use client";

import axios, { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";
import qs from "query-string";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAddStudentSchoolModal } from "@/hooks/use-school-modal";
import { useRouter } from "next/navigation";
import { SchoolFull } from "@/types";
import { ScrollArea } from "../ui/scroll-area";
import { UserAvatar } from "../user-avatar";
import {
  Check,
  Gavel,
  Loader2,
  MoreVertical,
  PlusCircle,
  School,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useState } from "react";
import Image from "next/image";

export const StudentSchoolModal = () => {
  const router = useRouter();
  const { isOpen, onClose, data, optionalData, subData } =
    useAddStudentSchoolModal();
  const [isLoading, setIsLoading] = useState(false);

  const { school } = data as { school: SchoolFull };
  const { users } = optionalData;
  const { schools } = subData;

  const onKick = async (studentId: string) => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: `/api/students/${studentId}`,
        query: {
          schoolId: school?.id,
        },
      });

      await axios.delete(url);

      router.refresh();
      toast.success("Xóa học sinh thành công");
    } catch (error) {
      console.log(error);
      toast.error("Xóa học sinh thất bại");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  const onAdd = async (userId: string) => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: `/api/students`,
        query: {
          schoolId: school?.id,
          userId,
        },
      });

      await axios.post(url);

      router.refresh();
      toast.success("Thêm học sinh thành công");
    } catch (error) {
      console.log(error);
      toast.error("Thêm học sinh thất bại");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  const onSchoolChange = async (studentId: string, name: string) => {
    try {
      setIsLoading(true);

      const url = qs.stringifyUrl({
        url: `/api/students/${studentId}`,
        query: {
          schoolid: school?.id,
        },
      });

      await axios.patch(url, { name });

      toast.success("Đổi trường học thành công");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Đổi trường học thất bại");
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Danh sách học sinh
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Hiện có {school?.students?.length} học sinh
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[180px] pr-6">
          {school?.students?.map((student) => (
            <div key={student.id} className="flex items-center gap-x-2 mb-6">
              <UserAvatar src={student.user.avatar} />
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-semibold flex items-center gap-x-1">
                  {student.user.name}
                  <Badge
                    className={cn(
                      "bg-yellow-200 text-black",
                      student.user.isPublished && "bg-green-400"
                    )}
                  >
                    {student.user.isPublished
                      ? "Đã xét duyệt"
                      : "Chưa xét duyệt"}
                  </Badge>
                </div>
                <p className="text-xs text-zinc-500">{student.user.email}</p>
              </div>
              <div className="ml-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    {isLoading ? (
                      <Loader2 className="animate-spin text-zinc-500 ml-auto w-4 h-4" />
                    ) : (
                      <MoreVertical className="h-4 w-4 text-zinc-500" />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="left">
                    <DropdownMenuLabel>Tùy chọn</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="flex items-center text-xs min-w-fit">
                          <School className="h-4 w-4 mr-2" />
                          Đổi trường học
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {schools?.map((school) => (
                              <DropdownMenuItem
                                key={school.name}
                                onClick={() =>
                                  onSchoolChange(student.id, school.name)
                                }
                              >
                                <Image
                                  width={16}
                                  height={16}
                                  alt="logoschool"
                                  src={school.logoUrl}
                                  className="mr-2"
                                />
                                {school.name}
                                {student.schoolId == school.id && (
                                  <Check className="h-4 w-4 ml-2" />
                                )}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem
                        onClick={() => onKick(student.id)}
                        className="text-rose-500"
                      >
                        <Gavel className="h-4 w-4 mr-2" />
                        Xóa khỏi trường học
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </ScrollArea>
        <h2 className="mt-4 mb-2 text-center text-2xl font-bold text-black">
          Học sinh trong hệ thống
        </h2>
        <ScrollArea className="max-h-[180px] pr-6">
          {users?.map((user) => (
            <div key={user.id} className="flex items-center gap-x-2 mb-6">
              <UserAvatar src={user.avatar} />
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-semibold flex items-center gap-x-1">
                  {user.name}
                  <Badge
                    className={cn(
                      "bg-yellow-200 text-black",
                      user.isPublished && "bg-green-400"
                    )}
                  >
                    {user.isPublished ? "Đã xét duyệt" : "Chưa xét duyệt"}
                  </Badge>
                </div>
                <p className="text-xs text-zinc-500">{user.email}</p>
              </div>
              <div className="ml-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    {isLoading ? (
                      <Loader2 className="animate-spin text-zinc-500 ml-auto w-4 h-4" />
                    ) : (
                      <MoreVertical className="h-4 w-4 text-zinc-500" />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="left">
                    <DropdownMenuItem
                      onClick={() => onAdd(user.id)}
                      className="text-emerald-600 font-semibold"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Thêm vào trường học
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
