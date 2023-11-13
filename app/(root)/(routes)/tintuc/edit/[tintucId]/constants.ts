import * as z from "zod";

export const formTitleNews = z.object({
  titlenews: z.string().min(1, {
    message: "Vui lòng nhập tiêu đề",
  }),
});

export const formDesNews = z.object({
  descriptions: z.string().min(1, {
    message: "Vui lòng nội dung",
  }),
});

export const formAuthorsNews = z.object({
  author: z.string().min(1, {
    message: "Vui lòng nhập tên tác giả",
  }),
});

export const formImageNews = z.object({
  imageNews: z.string().min(1, {
    message: "Vui lòng nhập tên tác giả",
  }),
});
