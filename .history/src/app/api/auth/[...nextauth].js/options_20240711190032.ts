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
      async authorize(credentials: any, req): Promise<any> {
        // Connect to DB
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              // By email
              { email: credentials.identifier },
              // By username
              { username: credentials.identifier },
            ],
          });

          if (!user) {
            throw new Error("No user found with this email or username");
          }

          if (!user.isVerfied) {
            throw new Error("Please verify your account");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPasswordCorrect) {
            return user; // Return the user object if authentication succeeds
          } else {
            throw new Error("Incorrect password! Please reset.");
          }
        } catch (err: any) {
          // Handle errors appropriately, log or modify error message
          throw new Error(err.message); // Re-throwing with just the message
        }
      },
    }),
  ],
  pages: {
    
  }
};
