export default async function handler(req, res) {
    const { name, email, tel, subject, message } = req.body
    const data = { name, email, tel, subject, message }

    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
    // const msg = {
    //     from: data.email,
    //     to: 'hello@analogueshifts.com, noreply@analogueshifts.com',
    //     subject: `${data.subject} 'from' ${data.name}`,
    //     text: data.message,
    //     html: `
    //         <p>Name: ${data.name}</p>
    //         <p>Email: ${data.email}</p>
    //         <p>Contact: ${data.tel}</p>
    //         <p>Message: ${data.message}</p>
    //         `,
    // }
    // try {
    //     await sgMail.send(msg)
    //     res.status(200).json({ success: true })
    // } catch (error) {
    //     console.error(error)
    //     res.status(500).json({ success: false, error: 'Error sending email' })
    // }

    const nodemailer = require('nodemailer')
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
            from: data.email,
            to: 'hello@analogueshifts.com, noreply@analogueshifts.com',
            replyTo: data.email,
            subject: `${data.subject} 'from' ${data.name}`,
            html: `
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Contact: ${data.tel}</p>
            <p>Message: ${data.message}</p>
            `,
        })
        console.log('Mail sent as:', mail.messageId)
        res.status(200).json({ success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: 'Error sending email' })
    }
}
