import * as z from "zod";

export const formContactSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên Người liên hệ",
  }),
  phoneNumber: z.string().min(1, {
    message: "Vui lòng nhập số điện thoại",
  }),
  email: z.string().min(1, {
    message: "Vui lòng nhập email",
  }),
  title: z.string().min(1, {
    message: "Vui lòng nhập Tiêu đề",
  }),
  textContent: z.string().min(1, {
    message: "Vui lòng miêu tả lý do du học",
  }),
});
