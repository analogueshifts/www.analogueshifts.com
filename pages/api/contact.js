// import sgMail from '@sendgrid/mail'

export default async function handler(req, res) {
    const { name, email, tel, subject, message } = req.body
    const data = { name, email, tel, subject, message }
    // sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
    // const msg = {
    //     to: 'tesimune@gmail.com',
    //     from: 'sender@example.com',
    //     subject: 'Subject',
    //     text: 'Hello, this is the plain text content!',
    //     html: '<p>Hello, this is the HTML content!</p>',
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
        port: 465,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_MAIL_USERNAME,
            pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
        },
    })

    try {
        const mail = await transporter.sendMail({
            from: data.email,
            to: 'tesimune@gmail.com',
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
