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
            <Head>
            <title>Verification Code</title> 
            <Font fontFamily={'Roboto'} fallbackFontFamily={'Arial'} fontStyle='normal' fontWeight={"700"}/>
            </Head>
            <Preview>Here's your Verification code</Preview>
        </Html>
    )
}