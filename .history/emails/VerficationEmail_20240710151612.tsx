import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button
}from '@react-email/components';


interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({username, otp}: VerificationEmailProps){
    return (
        <Html>
            <title>Verification Code</title> 
            <Font fontFamily={'Roboto'} fallbackFontFamily={'Arial'} >
                
            </Font> 
        </Html>
    )
}