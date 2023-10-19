import * as z from "zod";

export const formCreateUserSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  dob: z.date({
    required_error: "Vui lòng chọn ngày sinh",
  }),
  address: z.string().min(1, {
    message: "Vui lòng nhập địa chỉ",
  }),
  phone: z.string().min(1, {
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
  studyCategory: z.string({
    required_error: "Vui lòng chọn trình độ học vấn",
  }),
  certificateCategory: z.string({
    required_error: "Vui lòng chọn loại chứng chỉ Tiếng Anh",
  }),
  schoolCategory: z.string({
    required_error: "Vui lòng chọn trường",
  }),
  description: z.string().min(1, {
    message: "Vui lòng miêu tả lý do du học",
  }),
});
