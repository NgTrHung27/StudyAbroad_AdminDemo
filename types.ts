import { User } from "@prisma/client";
import {
  FileSpreadsheet,
  GraduationCap,
  Home,
  PlusCircle,
  School,
  Settings,
} from "lucide-react";

export const routes = [
  {
    label: "Trang chủ",
    href: "/",
    icon: Home,
  },
  { label: "Tài khoản người dùng", href: "/taikhoan", icon: PlusCircle },
  {
    label: "Hồ sơ thông tin",
    href: "/hoso",
    icon: FileSpreadsheet,
  },
  {
    label: "Trường học",
    href: "/truonghoc",
    icon: School,
  },
  {
    label: "Học sinh",
    href: "/hocsinh",
    icon: GraduationCap,
  },
  {
    label: "Cài đặt",
    href: "/caidat",
    icon: Settings,
  },
];

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
