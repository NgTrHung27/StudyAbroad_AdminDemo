import * as z from "zod";

export const formLoginSchema = z.object({
  email: z.string().min(1, {
    message: "Vui lòng nhập tên tài khoản.",
  }),
  password: z.string().min(1, {
    message: "Vui lòng nhập mật khẩu",
  }),
});
