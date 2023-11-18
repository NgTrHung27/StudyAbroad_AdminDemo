import { z } from "zod";

export const formCreateRequirementSchema = z.object({
  description: z.string().min(1, {
    message: "Vui lòng nhập yêu cầu trường học",
  }),
});
