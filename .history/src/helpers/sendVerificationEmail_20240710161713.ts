import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerficationEmail"
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifiyCode: string
): Promise<ApiResponse>{
    try{
        return {success: true, message:"Failed to send verification email"}
    }
    catch(error){
        console.log("Error in sending verification email")
        return {success: false, message:"Failed to send verification email"}
    }
}
