import { NextRequest, NextResponse } from 'next/server'
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');

const mailer = require("nodemailer");
const template_path = path.join(__dirname, '../../../../../public/mail-templates/');
 
export async function POST(request: NextRequest) {
    try {
        const formData: any = await request.json();

        // Extract request metadata for logging and email
        const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0] ||
                         request.headers.get('x-real-ip') ||
                         'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';
        const submissionTimestamp = new Date().toISOString();

        if (!formData || !formData.email || !formData.subject || !formData.message) {
            return NextResponse.json({ status: "error", message: "formdata missing" })
        }

        // Bot protection: Honeypot field check
        if (formData.honeypot && formData.honeypot.trim() !== '') {
            console.log(`Bot detected: honeypot field filled | IP: ${ipAddress} | User-Agent: ${userAgent} | Time: ${submissionTimestamp}`);
            return NextResponse.json({ status: "error", message: "invalid submission" })
        }

        // Bot protection: Time-based validation (minimum 3 seconds)
        if (formData.formLoadTime) {
            const submissionTime = Date.now();
            const timeDiff = (submissionTime - formData.formLoadTime) / 1000; // Convert to seconds

            if (timeDiff < 3) {
                console.log(`Bot detected: form submitted too quickly (${timeDiff.toFixed(2)}s) | IP: ${ipAddress} | User-Agent: ${userAgent} | Time: ${submissionTimestamp}`);
                return NextResponse.json({ status: "error", message: "invalid submission" })
            }
        }

        const smtpHost = process.env.MAIL_SMTP_HOST
        const smtpPort = process.env.MAIL_SMTP_PORT
        const smtpUser = process.env.MAIL_ADRESS
        const smtpPassword =  process.env.MAIL_PASSWORD

        if (smtpHost == undefined || smtpPort == undefined || smtpUser == undefined || smtpPassword == undefined) {
            throw Error("SMTP configuration not properly set. host=" + smtpHost + " port=" + smtpPort + " user=" + smtpUser + " password=" + smtpPassword)
        }
    
        const clientMail = await rewriteMailContent({ file: template_path + "contact-form-user", email: formData.email, subject: formData.subject, message: formData.message });
        const teamMail = await rewriteMailContent({
            file: template_path + "contact-form-team",
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            ipAddress,
            userAgent,
            timestamp: submissionTimestamp
        });

        //create reuseable transporter for SMTP transporter
        const transporter = mailer.createTransport({
            host: process.env.MAIL_SMTP_HOST,
            port: process.env.MAIL_SMTP_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_ADRESS,
                pass: process.env.MAIL_PASSWORD,
            },
        });
    
        const sendMailToSlynite = await transporter.sendMail({
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
    } catch (e) {

        console.error("Something went wrong by sending an email. Error " + e)
        return NextResponse.json({ status: "error", message: "error while sending mail" })
    }
    
}

async function rewriteMailContent({ file, email, subject, message, ipAddress, userAgent, timestamp }: {
    file: string,
    email: string,
    subject: string,
    message: string,
    ipAddress?: string,
    userAgent?: string,
    timestamp?: string
}): Promise<any> {
    let content = await readFile(file + ".html", 'utf8');
    if (content !== null) {
        content = content.replace("{EMAIL-ADRESS}", email);
        content = content.replace("{SUBJECT}", subject);
        content = content.replace("{MESSAGE}", message);

        // Replace optional metadata fields (for team email)
        if (ipAddress) content = content.replace("{IP-ADDRESS}", ipAddress);
        if (userAgent) content = content.replace("{USER-AGENT}", userAgent);
        if (timestamp) content = content.replace("{TIMESTAMP}", timestamp);

        return content;
    }
};