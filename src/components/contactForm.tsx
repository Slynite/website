"use client"

import Link from "next/link";
import { FormEvent, useState } from "react";
import InfoCard from "./infoCard";
import Image from "next/image";

interface ApiResponse {
    status: string
    message: string    
} 

export default function ContactForm({dict, lang}: {dict: any, lang: string}) {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [warning, setWaring] = useState('');

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()     
        const response = await fetch('/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                subject,
                message
            }),
        })
        const data: ApiResponse = await response.json()

        if (data.status == 'error') {
            setError(data.message);
        }

        if (data.status == 'warning') {
            setWaring(data.message);
            setSuccess(true);
        }

        if (data.status == 'success') {
            setSuccess(true);
        }
      }

    function resetStates() {
        setEmail('');
        setSubject('');
        setMessage('');
        setSuccess(false);
        setError('');
        setWaring('');
    }

    function prefillFieldsWithMeetingRequest() {
        resetStates();
        setSubject(dict.contact.video_call.form_subject);
        setMessage(dict.contact.video_call.form_message);
    }

    return(
            <div className='md:grid md:grid-cols-4 mt-8'>
                <div className='space-y-6 mb-6 md:mb-0'>
                    <div className='transform hover:scale-102 duration-300 motion-reduce:transform-none cursor-pointer' onClick={() => prefillFieldsWithMeetingRequest()}>
                        <div className='animate-once animate-fade-up animate-ease-out transform hover:scale-102 duration-300 motion-reduce:transform-none'>
                            <InfoCard 
                                title={dict.contact.video_call.title}
                                description={dict.contact.video_call.description}
                                imagePath='/ressources/icons/video-camera.png' />
                        </div>
                    </div>
                    <div className='transform hover:scale-102 duration-300 motion-reduce:transform-none'>
                        <div className='animate-once animate-fade-up animate-delay-[200ms] animate-ease-out transform hover:scale-102 duration-300 motion-reduce:transform-none'>
                            <Link href={'mailto:hello@slynite.com'}>
                                <InfoCard 
                                    title={dict.contact.email.title}
                                    description={dict.contact.email.description}
                                    imagePath='/ressources/icons/envelope.png' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='col-span-3 m-3 p-6 rounded-3xl bg-zinc-800 animate-once animate-fade-up animate-delay-[400ms]'>
                    {success ? (
                        <>
                            {warning && <p className="bg-orange-500 p-2.5 rounded-lg -mb-6">{dict.contact.form.warning} {warning}</p>}
                            <div className='flex flex-col items-center justify-center text-center min-h-full'>
                                <Image src={'/ressources/icons/check-circle-white.png'} alt='checkmark' width={100} height={100} />
                                <h2 className="text-2xl">{dict.contact.form.success}</h2>
                                <p className="text-base">{dict.contact.form.success_description}</p>
                                <button type="button" className="text-black bg-zinc-200 hover:bg-zinc-300 font-medium rounded-full px-4 py-1.5 text-center mt-4" onClick={() => resetStates()}>{dict.contact.form.success_back_button}</button>
                            </div>
                        </>
                    ) : (
                        <form className="space-y-3" onSubmit={onSubmit}>
                            {error && <p className="bg-red-500 p-2.5 rounded-lg">{dict.contact.form.error} {error}</p>}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">{dict.contact.form.email}</label>
                                <input type="email" id="email" className="block p-3 w-full shadow-sm text-sm rounded-lg bg-zinc-600" placeholder={dict.contact.form.email_placeholder} value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">{dict.contact.form.subject}</label>
                                <input type="text" id="subject" className="block p-3 w-full shadow-sm text-sm rounded-lg bg-zinc-600"  placeholder={dict.contact.form.subject_placeholder} value={subject} onChange={(e) => setSubject(e.target.value)} required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">{dict.contact.form.message}</label>
                                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm rounded-lg shadow-sm bg-zinc-600" placeholder={dict.contact.form.message_placeholder} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            </div>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{dict.contact.form.privacy_notice} <Link className='underline' href={"/" + lang + "/legal/privacy"} target="_blank">{dict.contact.form.privacy_notice_link}</Link>.</p>
                            <button type="submit" className="text-black bg-zinc-200 hover:bg-zinc-300 font-medium rounded-full px-4 py-1.5 text-center mt-4">{dict.contact.form.send}</button>
                        </form>
                    )}
                </div>
            </div>
    )
}