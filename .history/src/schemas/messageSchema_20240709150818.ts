import {z} from "zod";

export const messageSchema = z.object({
    content: z.string()
    .max(300, {message:"COntent must be of 300 characters only "})
    .min(10, {message: "Content "})
})