import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import VerificationEmail from "../../../../emails/VerficationEmail";
import { JsonResponse } from "@/types/JsonResponse";

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
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    if (existingUserByMail) {
      if (existingUserByMail?.isVerfied) {
        return Response.json(
          {
            success: false,
            message: "User is verified",
          },
          { status: 400 }
        );
      }

      
    }
    //Create the user by encrypting password
    else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        isVerfied: false,
        verifyCodeExpiry: expiryDate,
        isAcceptingMessage: true,
        messages: [],
      });

      await newUser.save();

      //send verification email
      const emailResponse = await sendVerificationEmail(
        email,
        username,
        verifyCode
      );

      if (!emailResponse.success) {
        const response = JsonResponse(false, emailResponse.message, 500);
        return response;
      }

      return JsonResponse(
        true,
        "User resgistered successfully! Please verify the email",
        201
      );
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
