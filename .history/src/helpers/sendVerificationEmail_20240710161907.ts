import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerficationEmail"
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifiyCode: string
): Promise<ApiResponse>{
    try{
        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: 'Mystry MessengVerification Code!',
            react: <Email url="https://example.com" />,
          });
        return {success: true, message:"Succeed to send verification email"}
    }
    catch(error){
        console.log("Error in sending verification email")
        return {success: false, message:"Failed to send verification email"}
    }
}
