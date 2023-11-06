import { User, UserRole } from "@prisma/client";
import {
  BookA,
  BookAIcon,
  BookMarked,
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
  {
    label: "Liên Hệ",
    href: "/lienhe",
    icon: BookMarked,
    description: "Liên Hệ",
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

export const cccd_mattruoc = {
  errorCode: 0,

  errorMessage: "",

  data: [
    {
      id: "xxxx",

      id_prob: "xxxx",

      name: "xxxx",

      name_prob: "xxxx",

      dob: "xxxx",

      dob_prob: "xxxx",

      sex: "xxxx",

      sex_prob: "xxxx",

      nationality: "xxxx",

      nationality_prob: "xxxx",

      home: "xxxx",

      home_prob: "xxxx",

      address: "xxxx",

      address_prob: "xxxx",

      address_entities: {
        province: "xxxx",

        district: "xxxx",

        ward: "xxxx",

        street: "xxxx",
      },

      doe: "xxxx",

      doe_prob: "xxxx",

      type: "xxxx",
    },
  ],
};

export const cccd_matsau = {
  errorCode: 0,

  errorMessage: "",

  data: [
    {
      religion_prob: "xxxx",

      religion: "xxxx",

      ethnicity_prob: "xxxx",

      ethnicity: "xxxx",

      features: "xxxx",

      features_prob: "xxxx",

      issue_date: "xxxx",

      issue_date_prob: "xxxx",

      issue_loc_prob: "xxxx",

      issue_loc: "xxxx",

      type: "xxxx",
    },
  ],
};
