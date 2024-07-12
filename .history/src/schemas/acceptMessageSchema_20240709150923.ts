import {z} from "zod";

export const acceptMessageSchema = z.object({
    content: z.string()
    .max(300, {message:"COntent must be of 300 characters only "})
    .min(10, {message: "Content must be of atleast 10 characters"})
})