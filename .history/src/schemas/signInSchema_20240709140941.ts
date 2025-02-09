import {z} from "zod";

export const signInSchema = z.object({
    code: z.string().length(6, {message: "Code must be of 6 characters"})
})