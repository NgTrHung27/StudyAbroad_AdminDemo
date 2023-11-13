import * as z from "zod";

export const formCreatePartnerSchema = z.object({
 
  ImageNav1: z.string().min(1, {
    message: "Vui lòng nhập ảnh navigation1 ",
  }),

  ImageNav2: z.string().min(1, {
    message: "Vui lòng nhập ảnh navigation2",
  }),

  Title: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
  Content1: z.string().min(1, {
    message: "Vui lòng nhập nội dung 1",
  }),

  Image1: z.string().min(1, {
    message: "Vui lòng nhập hình ảnh 1",
  }),
  
  des1: z.string().min(1, {
    message: "Vui lòng nhập mô tả 1",
  }),

  des2: z.string().min(1, {
    message: "Vui lòng nhập mô tả 2",
  }),

  Title1: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề 1",
  }),

  content2: z.string().min(1, {
    message: "Vui lòng nhập nội dung 2",
  }),

  contentlist: z.string().min(1, {
    message: "Vui lòng nhập danh sách nội dung",
  }),

  content_Tuvan: z.string().min(1, {
    message: "Vui lòng nhập nội dung tư vấn",
  }),
});
