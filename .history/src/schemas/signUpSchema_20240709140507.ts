import {z} from "zod";

export const userValidation = z.string()
.min(2, "Must atleast 2 characters")
.max(20, "Not more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "Username should not contain special characters")

export const signUpSchema = z.object({
    username: userValidation,
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(6, message:{}).
})