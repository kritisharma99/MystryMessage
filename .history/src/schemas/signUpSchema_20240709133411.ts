import {z} from "zod";

export const userValidation = z.string().min(2)