import { z } from "zod";

export const formCreateHistorySchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Vui lòng chọn hình ảnh",
  }),
  description1: z.string().min(1, {
    message: "Vui lòng nhập đoạn thứ hai",
  }),
  description2: z.string().min(1, {
    message: "Vui lòng nhập đoạn thứ nhất",
  }),
});
