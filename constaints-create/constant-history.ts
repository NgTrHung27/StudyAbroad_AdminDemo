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

export const formDes1Schema = z.object({
  description1: z.string().min(1, {
    message: "Vui lòng nhập đoạn thứ nhất",
  }),
});

export const formDes2Schema = z.object({
  description2: z.string().min(1, {
    message: "Vui lòng nhập đoạn thứ hai",
  }),
});

export const formImageSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Vui lòng chọn hình ảnh",
  }),
});
