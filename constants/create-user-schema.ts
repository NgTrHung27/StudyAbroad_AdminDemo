import { z } from "zod";

export const formCreateUserSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  password: z.string().min(1, {
    message: "Vui lòng nhập mật khẩu",
  }),
  dob: z.date({
    required_error: "Vui lòng chọn ngày sinh",
  }),
  address: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ",
  }),
  phoneNumber: z.string().min(1, {
    message: "Vui lòng nhập số điện thoại",
  }),
  gender: z.string({
    required_error: "Vui lòng chọn giới tính",
  }),
  cccd: z.string().min(1, {
    message: "Vui lòng nhập chứng minh thư/căn cước công dân",
  }),
  email: z.string().min(1, {
    message: "Vui lòng nhập email",
  }),
  schoolName: z.string().min(1, {
    message: "Vui lòng chọn trường",
  }),
  certificateCategory: z.string(),
  schoolCategory: z.string(),
  description: z.string().min(1, {
    message: "Vui lòng miêu tả lý do du học",
  }),
});
