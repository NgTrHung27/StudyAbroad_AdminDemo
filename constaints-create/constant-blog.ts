import { z } from "zod";

export const formCreateBlogSchema = z.object({
  schoolId: z
    .string({
      required_error: "Vui lòng chọn tên trường",
    })
    .min(1, {
      message: "Vui lòng chọn tên trường",
    }),
  userId: z
    .string({
      required_error: "Vui lòng chọn tên trường",
    })
    .min(1, {
      message: "Vui lòng chọn tên trường",
    }),
  description: z
    .string({
      required_error: "Vui lòng nhập nội dung",
    })
    .min(1, {
      message: "Vui lòng nhập nội dung",
    }),
});
