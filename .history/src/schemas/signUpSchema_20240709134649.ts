import {z} from "zod";

export const userValidation = z.string()
.min(2, "Must atleast 2 characters")
.max(20, "Not more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "Username should not contain special characters"