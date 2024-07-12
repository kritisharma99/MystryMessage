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

    if (exisitingUserByUsername) {
      return Response.json(
        {
          success: false,
          message: "User already exist!",
        },
        { status: 400 }
      );
    }

    //Find by email
    const existingUserByMail = await UserModel.findOne({
      email,
    });
    const verifyCode = Math.floor(100000 + Math.random() )
    if (existingUserByMail) {
      return Response.json(
        {
          success: false,
          message: "This email already Exist",
        },
        { status: 400 }
      );
    }
    //Create the user by encrypting password
    else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      new UserModel({
        username,
    email,
    password: hashedPassword,
    verifyCode: string;
    isVerfied: boolean;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    messages: Message[];
      })
    }
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
