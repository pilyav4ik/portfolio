// src/app/api/sendemail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to send an email
async function sendEmail({ name, email, phone, message, interestedIn, files }: any) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const interestedInString = Object.entries(interestedIn)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(', ');


    let mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.GMAIL_USER,
        subject: 'New Contact Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
            Interested in: ${interestedInString}
        `,
        attachments: files.map((file: any) => ({
            filename: file.name,
            path: file.path,
            contentType: file.type,
        })),
    };

    await transporter.sendMail(mailOptions);
}

// POST handler
export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, message, interestedIn, files } = await request.json();
        await sendEmail({ name, email, phone, message, interestedIn, files });
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
    }
}
