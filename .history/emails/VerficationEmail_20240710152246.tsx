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
            <Preview>Here&apos;s your Verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2">Hello {username}, </Heading>
                </Row>
                <Row>
                    <Text>Thank you for registering with us! Have great exposure! </Text>
                </Row>
                <Row>
                    <Text>Thank you for registering with us! Have great exposure! </Text>
                </Row>
            </Section>
        </Html>
    )
}