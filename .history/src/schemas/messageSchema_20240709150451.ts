import {z} from "zod";

export const messageSchema = z.object({
    code: z.string().length(6, {message: "Code must be of 6 characters"})
})