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
      async authorize(credentials, req) {
        //DB Connect
        await dbConnect();
        try {
          await UserModel.findOne({
            $or: [
              //By email
              {email: credentials.identi},
              //By username
              {},
            ],
          });
        } catch (err: any) {
          throw new Error(err);
        }
        return null;
      },
    }),
  ],
};
