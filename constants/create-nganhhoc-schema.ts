import * as z from "zod";

export const formCreateNganhHocSchema = z.object({
  name: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  description1: z.string().min(1, {
    message: "Vui lòng miêu tả lý do du học",
  }),
  description2: z.string().min(1, {
    message: "Vui lòng miêu tả lý do du học",
  }),
  Price: z.coerce.number().min(1),
  Image1: z.string({
    required_error: "Vui lòng chọn logo",
  }),
  Image2: z.string({
    required_error: "Vui lòng chọn logo",
  }),
});
