import { z } from "zod";

export const registerSchema = z
  .object({
    username: z.string().nonempty("Username is required!"),
    email: z
      .string()
      .nonempty("This field cannot be blank.")
      .email("This format not correspond to email format."),
    password: z.string().nonempty("Password is required to authentication."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
