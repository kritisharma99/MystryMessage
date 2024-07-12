import {z} from "zod";

export const userValidation = z.string()
.min(2, "Must atleast 2")