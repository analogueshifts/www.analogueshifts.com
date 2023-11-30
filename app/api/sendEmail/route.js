import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, message, subject } = await request.json()

        const transporter = nodemailer.createTransport({
            service: process.env.NEXT_PUBLIC_MAIL_SERVIC,
            host: process.env.NEXT_PUBLIC_MAIL_HOST,
            port: process.env.NEXT_PUBLIC_MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
                pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
            },
        })

        const mailOption = {
            from: email,
            to: 'hello@analogueshifts.com',
            subject: subject,
            html: `
        <h3>GoodDay AnalogueShifts</h3>
        <li>My name is name: ${name}</li>
        <li> Here is my message: ${message}</li> 
        `,
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json(
            { message: 'Email Sent Successfully' },
            { status: 200 },
        )
    } catch (error) {
        return NextResponse.json(
            { message: 'Failed to Send Email' },
            { status: 500 },
        )
    }
}
