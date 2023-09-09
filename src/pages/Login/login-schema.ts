import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("This field cannot be blank.")
    .email("This format not correspond to email format."),
  password: z.string().nonempty("Password is required to authentication."),
});
