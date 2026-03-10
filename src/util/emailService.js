import { Resend } from "resend";
import 'dotenv/config'

const resend = new Resend(process.env.RESEND_API_KEY)
const email = process.env.EMAIL_FROM

export async function sendCodePasswordReset(userEmail, verificationCode){
    console.log(email, userEmail, verificationCode)
    await resend.emails.send({
        from: email,
        to: userEmail,
        replyto: email,
        subject: 'Restablecimiento de la contraseña',
        html: `<h1>${verificationCode}</h1>`
    })
}