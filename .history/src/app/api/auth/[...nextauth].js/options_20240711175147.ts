import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/userModel";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        //DB Connect
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              //By email
              { email: credentials.identifier },
              //By username
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found with this email");
          }
          if (!user.isVerfied) {
            throw new Error("Pleaswe verified your account! ");
          }
          //if user found & verified then compare its password to match
          await bcrypt.compare(credentials.)
        } catch (err: any) {
          throw new Error(err);
        }
        return null;
      },
    }),
  ],
};
