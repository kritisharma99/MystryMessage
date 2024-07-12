import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

//API:
export async function POST(request: Request) {
  await dbConnect();
  try {
  } catch (error) {
    console.log("Sign up failed:", error);
    return Response.json({
        success: false,
        
    })
  }
}
