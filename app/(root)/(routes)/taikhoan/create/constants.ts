import * as z from "zod";

export const formCreateUserSchema = z.object({
  name: z.string().min(1, {
    message: "Yêu cầu nhập tên tài khoản",
  }),
  email: z.string().min(1, {
    message: "Yêu cầu nhập email",
  }),
  password: z.string().min(1, {
    message: "Yêu cầu nhập mật khẩu",
  }),
  role: z.string().min(1, {
    message: "Yêu cầu chọn vai trò",
  }),
});
