import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  password: z.string().min(1, {
    message: "Vui lòng nhập mật khẩu",
  }),
});
