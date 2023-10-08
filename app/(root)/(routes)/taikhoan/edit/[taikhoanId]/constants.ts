import * as z from "zod";

export const formImageSchema = z.object({
  image: z.string().min(1, {
    message: "Yêu cầu chọn một hình ảnh",
  }),
});

export const formNameSchema = z.object({
  name: z.string().min(1, {
    message: "Yêu cầu nhập tên khóa học",
  }),
});

export const formEmailSchema = z.object({
  email: z.string().min(1, {
    message: "Yêu cầu nhập tên khóa học",
  }),
});
