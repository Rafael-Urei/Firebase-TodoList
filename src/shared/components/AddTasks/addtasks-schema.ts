import { z } from "zod";

export const TaskSchema = z.object({
  title: z.string().nonempty("Your task need a title."),
  description: z.string(),
  date: z.string().nonempty("This field cannot be blank."),
  type: z.string().nonempty("This field cannot be blank."),
});
