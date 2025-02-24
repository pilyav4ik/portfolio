import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSSWORD,
    }
} as SMTPTransport.Options);

