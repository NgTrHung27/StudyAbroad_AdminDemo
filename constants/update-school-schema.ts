import { z } from "zod";

export const formSchoolBackgroundSchema = z.object({
  backgroundUrl: z.string().min(1, {
    message: "Vui lòng chọn hình nền trường học",
  }),
});

export const formSchoolNameSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên trường học",
  }),
});

export const formSchoolLogoSchema = z.object({
  logoUrl: z.string().min(1, {
    message: "Vui lòng chọn hình đại diện trường học",
  }),
});

export const formSchoolColorSchema = z.object({
  colorValue: z
    .string({
      required_error: "Vui lòng nhập mã màu sắc",
    })
    .min(4)
    .regex(/^#/, {
      message: "Mã màu phải là giá trị thập lục phân (VD: #000000)",
    }),
});
