import * as z from "zod";

export const formTinTuc = z.object({
  titlenews: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
  descriptions: z.string().min(1, {
    message: "Vui lòng nội dung",
  }),
  author: z.string().min(1, {
    message: "Vui lòng nhập tên tác giả",
  }),
  imageNews: z.string({
    required_error: "Vui lòng chọn ảnh",
  }),
});
