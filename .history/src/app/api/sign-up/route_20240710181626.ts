import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

//API:
export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    //Find By username
    const exisitingUserByUsername = await UserModel.findOne({
      username,
      isVerfied: true,
    });

    if (exisitingUserValidation) {
      return Response.json(
        {
          success: false,
          message: "User already exist!",
        },
        { status: 400 }
      );
    }

    //Find by email
    const existingUserValidatiobByMail = await UserModel.findOne({
      email,
    });
  } catch (error) {
    console.log("Sign up failed:", error);
    return Response.json(
      {
        success: false,
        message: "Sign up failed",
      },
      { status: 500 }
    );
  }
}
