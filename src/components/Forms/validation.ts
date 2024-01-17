import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(10, "Error:Tooshort name to set a name"),
  email: z
    .string()
    .email()
    .min(1, "error:Invalid Email orsomething went wrong"),
  password: z
    .string()
    .min(8, "Error: Too short password!! Minimum 8 character required!"),
  address: z.string().min(1, "Error: Too short Address!!"),
});
export type TForm = z.infer<typeof SignUpSchema>;
