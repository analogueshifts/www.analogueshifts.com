import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    const { name, email, tel, subject, message } = req.body
    const data = { name, email, tel, subject, message }
    const from = {
        name: process.env.NEXT_PUBLIC_MAIL_FROM_NAME,
        email: process.env.NEXT_PUBLIC_MAIL_FROM_ADDRESS,
    }
    const to = process.env.NEXT_PUBLIC_MAIL_TO_ADDRESS

    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_MAIL_HOST,
        port: process.env.NEXT_PUBLIC_MAIL_PORT, // 465 or 587,
        secure: process.env.NEXT_PUBLIC_MAIL_ENCRYPTION,
        auth: {
            user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
            pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
        },
    })

    try {
        const mail = await transporter.sendMail({
            from: `${from.name} <${from.email}>`,
            to: `${to}, noreply@analogueshifts.com`,
            replyTo: data.email,
            subject: `${data.subject}, from ${data.name}.`,
            html: `
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Contact: ${data.tel}</p>
            <p>Subject: ${data.subject}</p>
            <p>Message: ${data.message}</p>
            `,
        })
        // console.log('Mail sent as:', mail.messageId)
        res.status(200).json({ success: true, mail: mail.messageId })
    } catch (error) {
        // console.log(error)
        res.status(500).json({ success: false, error: 'Error sending email' })
    }
}
