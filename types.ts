import { User, UserRole } from "@prisma/client";
import {
  FileSpreadsheet,
  GraduationCap,
  Home,
  Newspaper,
  PlusCircle,
  School,
  Settings,
  User as UserIcon,
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
    icon: UserIcon,
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

export const rolesOptions = [
  {
    value: UserRole.ADMIN,
    label: "Quản trị viên",
  },
  {
    value: UserRole.USER,
    label: "Người dùng",
  },
];
