import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req,res) {
    const {body}=req.json();
    const{email,subject,message}=body
    try {
        const data = await resend.emails.send({
            from: email,
            to: ["mehtasagar437@gmail.com"],
            subject: subject,
            react: (
                <>
                <h1>{subject}</h1>
                <p>Thank you for contacting.</p>
                    <p>{message}</p>
                </>
            ),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}