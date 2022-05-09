import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e10594705da7a5",
      pass: "e0f095202a71a2"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendEmail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Duda Santos <dudasancar@gmail.com>",
        subject,
        html: body,
    })
    };
}