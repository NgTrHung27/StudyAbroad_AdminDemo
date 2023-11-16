import * as z from "zod";

export const formCreateProgramSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên ngành học",
  }),
  description1: z.string().min(1, {
    message: "Vui lòng nhập thông tin ngành học",
  }),
  description2: z.string().min(1, {
    message: "Vui lòng nhập chi tiết ngành họcc",
  }),
  Price: z.coerce.number().min(1),
  Image1: z.string({
    required_error: "Vui lòng chọn hình ảnh 1",
  }),
  Image2: z.string({
    required_error: "Vui lòng chọn hình ảnh 2",
  }),
});
