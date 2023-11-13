import { z } from "zod";

export const formCreateSchoolSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên trường",
  }),
  logoUrl: z.string().min(1, {
    message: "Vui lòng chọn logo trường học",
  }),
  backgroundUrl: z.string().min(1, {
    message: "Vui lòng chọn hình nền trường học ",
  }),
  colorValue: z
    .string({
      required_error: "Vui lòng nhập mã màu sắc",
    })
    .min(4)
    .regex(/^#/, {
      message: "Mã màu phải là giá trị thập lục phân (VD: #000000)",
    }),
});
