import {z} from "zod";

export const verifySchema = z.object({
    username: userValidation,
    email: z.string().email({message: "Please enter a valid email"}),
    password: z.string().min(6, {message: "Password must be of atleast 6 characters"}),
})