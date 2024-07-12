import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerficationEmail"
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifiyCode: string
): Promise<ApiResponse>{
    try{

    }
    catch(error){
        console.log("Error in sending verification email")
        return {sucess: false, }
    }
}
