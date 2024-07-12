import {z} from "zod";

export const userValidation = z.string()
.min(2, "Must atleast 2 characters")
.max(20, "Not more than 20 characters")
.reges(/^[a-zA-Z0-9_]+/)