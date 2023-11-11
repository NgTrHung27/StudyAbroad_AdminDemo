import * as z from "zod";

export const formEditProgramSchema = z.object({
  name: z.string().min(1, 
    {
    message: "Yêu cầu nhập tên ngành",
   }
  ),
});

export const formEditImage1Schema = z.object({
  Image1: z.string().min(1, 
    {
    message: "Yêu cầu chọn Image2",
   }
  ),
});

export const formEditImage2Schema = z.object({
  Image2: z.string().min(1, 
    {
    message: "Yêu cầu chọn Image1",
   }
  ),
});

export const formEditDes1Schema = z.object({
  description1: z.string().min(1, {
    message: "Yêu cầu nhập mô tả 1",
  }),
});

export const formEditDes2Schema = z.object({
  description2: z.string().min(1, {
    message: "Yêu cầu nhập mô tả 2",
  }),
});


export const formEditPriceSchema = z.object({
 price: z.coerce.number().min(1),
});
