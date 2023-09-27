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
  {
    label: "Tài khoản người dùng",
    href: "/taikhoan",
    icon: PlusCircle,
    description: "Quản lý và theo dõi danh sách các tài khoản người dùng",
  },
  {
    label: "Hồ sơ thông tin",
    href: "/hoso",
    icon: FileSpreadsheet,
    description: "Kiểm tra hồ sơ thông tin cá nhân và tùy chọn thay đổi",
  },
  {
    label: "Trường học",
    href: "/truonghoc",
    icon: School,
    description: "Quản lý trường học và điều chỉnh thông tin cần thiết",
  },
  {
    label: "Học sinh",
    href: "/hocsinh",
    icon: GraduationCap,
    description: "Theo dõi các bảng thông tin của học sinh",
  },
  {
    label: "Cài đặt",
    href: "/caidat",
    icon: Settings,
    description: "Cài đặt chung",
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
