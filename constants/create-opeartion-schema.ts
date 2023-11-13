import { z } from "zod";

export const formCreateOperationSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên cơ sở",
  }),
  description: z.string().min(1, {
    message: "Vui lòng nhập nội dung mô tả cơ sở",
  }),
  backgroundUrl: z.string().min(1, {
    message: "Vui lòng chọn hình đại diện cơ sở",
  }),
});
