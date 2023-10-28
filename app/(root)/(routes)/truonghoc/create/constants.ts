import * as z from "zod";

export const formCreateSchoolSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  description: z.string().min(1, {
    message: "Vui lòng miêu tả lý do du học",
  }),
  logoUrl: z.string({
    required_error: "Vui lòng chọn logo",
  }),
  backgroundUrl: z.string({
    required_error: "Vui lòng chọn background",
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
