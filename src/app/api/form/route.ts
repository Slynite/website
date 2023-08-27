import { NextRequest, NextResponse } from 'next/server'
let fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');

const mailer = require("nodemailer");
const template_path = path.join(__dirname, '../../../../../public/mail-templates/');
 
export async function POST(request: NextRequest) {
    let formData: any = await request.json();
    
    if (!formData || !formData.email || !formData.subject || !formData.message) {
        return NextResponse.json({ status: "error", message: "formdata missing" })
    }

    const clientMail = await rewriteMailContent({ file: template_path + "contact-form-user", email: formData.email, subject: formData.subject, message: formData.message });
    const teamMail = await rewriteMailContent({ file: template_path + "contact-form-team", email: formData.email, subject: formData.subject, message: formData.message });

    //create reuseable transporter for SMTP transporter
    let transporter = mailer.createTransport({
        host: process.env.MAIL_SMTP_HOST,
        port: process.env.MAIL_SMTP_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_ADRESS,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    let sendMailToSlynite = await transporter.sendMail({
        from: process.env.MAIL_NAME + '<' + process.env.MAIL_ADRESS +'>',
        to: "hello@slynite.com",
        subject: "A new message from Slynite.com contact form",
        html: teamMail
    });

    if (sendMailToSlynite.messageId != null && sendMailToSlynite.messageId != undefined) {
        try {
            await transporter.sendMail({
                from: process.env.MAIL_NAME + '<' + process.env.MAIL_ADRESS +'>',
                to: formData.email,
                subject: "We received your message",
                html: clientMail
            });
        } catch(e) {
            return NextResponse.json({ status: "warning", message: "mail to " + formData.email + " failed." })
        }
        return NextResponse.json({ status: "success", message: "complete" })
    } else {
        return NextResponse.json({ status: "error", message: "error while sending mail" })
    }
}

async function rewriteMailContent({ file, email, subject, message }: { file: string, email: string, subject: string, message: string }): Promise<any> {
    let content = await readFile(file + ".html", 'utf8');
    if (content !== null) {
        content = content.replace("{EMAIL-ADRESS}", email);
        content = content.replace("{SUBJECT}", subject);
        content = content.replace("{MESSAGE}", message);
        return content;
    }
};