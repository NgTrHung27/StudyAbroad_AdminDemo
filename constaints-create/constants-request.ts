import * as z from "zod";

export const formCreateRequestSchema = z.object({
  Name: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),

  Image1: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),

  Content1: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),

  Title1: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  Content2: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),

  Title2: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  checkcontent: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
  
  roundcontent: z.string().min(1, {
    message: "Vui lòng nhập tên đăng nhập",
  }),
});
