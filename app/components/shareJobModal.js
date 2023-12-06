'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import CancelImage from '@/public/icons/cancel.png'
import CopyImage from '@/public/icons/copy.png'
import WhatsAppImage from '@/public/icons/whatsapp.png'
import LinkedInImage from '@/public/icons/linkedin.png'
import FacebookImage from '@/public/icons/facebook.png'
import MailImage from '@/public/icons/mail.jpeg'

export default function ShareJob({ cancel, link }) {
    const [bgOpacity, setBgOpacity] = useState(0)
    const [boxOpacity, setBoxOpacity] = useState(0)
    const [boxPosition, setBoxPosition] = useState(-30)

    useEffect(() => {
        setBgOpacity(1)
        setBoxOpacity(1)
        setBoxPosition(0)
    }, [])

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(link)
            alert('Text copied to clipboard')
        } catch (err) {
            console.error('Unable to copy text to clipboard', err)
        }
    }

    function shareViaWhatsApp() {
        // Encode the text for a URL
        const encodedText = encodeURIComponent(link)

        // Create the WhatsApp sharing link
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodedText}`

        // Open the link in a new tab or window
        window.open(whatsappLink, '_blank')
    }

    function shareViaLinkedIn() {
        // Encode parameters for a URL
        const encodedTitle = encodeURIComponent(
            'Check out this amazing job on AnalogueShifts',
        )
        const encodedUrl = encodeURIComponent(link)
        const encodedSummary = encodeURIComponent('Check it out!')

        // Create the LinkedIn sharing link
        const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`

        // Open the link in a new tab or window
        window.open(linkedinLink, '_blank')
    }

    function shareViaFacebook() {
        // Encode the URL for a Facebook sharing link
        const encodedUrl = encodeURIComponent(link)

        // Create the Facebook sharing link
        const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`

        // Open the link in a new tab or window
        window.open(facebookLink, '_blank')
    }

    function shareViaEmail() {
        // Encode parameters for a mailto link
        const encodedSubject = encodeURIComponent(
            'Checkout this awesome job I found on Analogueshifts',
        )
        const encodedBody = encodeURIComponent(link)

        // Create the mailto link
        const mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`

        // Open the link in a new tab or window
        window.location.href = mailtoLink
    }

    return (
        <div
            style={{ opacity: bgOpacity }}
            className="fixed duration-500 flex justify-center pt-[120px] z-30 w-screen h-screen bg-[rgba(245,249,255,0.9)] top-0 left-0">
            <div
                onClick={cancel}
                className="absolute top-0 left-0 w-screen h-screen bg-transparent z-30"></div>
            <div
                style={{
                    opacity: boxOpacity,
                    transform: `translateY(${boxPosition}px)`,
                }}
                className="h-max p-6 z-50 duration-300 delay-100 rounded-lg bg-[rgb(245,249,255)] shadow-xl max-w-[90%] w-[400px]">
                <div className="w-full flex justify-between items-center">
                    <p className="font-medium text-black/80 text-lg">
                        Share Job
                    </p>
                    <button
                        onClick={cancel}
                        className="p-2 bg-transparent duration-150 hover:bg-black/10 rounded">
                        <Image
                            src={CancelImage}
                            alt="Cancel Icon"
                            className="w-3 h-3 opacity-70"
                        />
                    </button>
                </div>
                <div className="w-full flex flex-col pt-5 gap-2.5">
                    <p className="font-medium text-black/80 text-base">Link</p>
                    <div className="w-full flex justify-between items-center p-2.5 rounded-md border">
                        <p className=" text-black/90 text-sm w-[80%] truncate">
                            {link}
                        </p>
                        <button
                            onClick={copyToClipboard}
                            className="p-2 bg-transparent duration-150 hover:bg-black/10 rounded">
                            <Image
                                src={CopyImage}
                                alt="Copy Icon"
                                className="w-3 h-3 opacity-70"
                            />
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col pt-3 gap-2.5">
                    <p className="font-medium text-black/80 text-base">
                        Share To
                    </p>
                    <div className="w-full flex items-center gap-2.5">
                        <button
                            onClick={shareViaWhatsApp}
                            className=" bg-transparent hover:opacity-80">
                            <Image
                                src={WhatsAppImage}
                                alt="Whatsapp Icon"
                                className="w-7 h-7 rounded-md"
                            />
                        </button>
                        <button
                            onClick={shareViaLinkedIn}
                            className=" bg-transparent hover:opacity-80">
                            <Image
                                src={LinkedInImage}
                                alt="LinkedIn Icon"
                                className="w-7 h-7 rounded-md"
                            />
                        </button>
                        <button
                            onClick={shareViaFacebook}
                            className=" bg-transparent hover:opacity-80">
                            <Image
                                src={FacebookImage}
                                alt="Facebook Icon"
                                className="w-7 h-7 rounded-md"
                            />
                        </button>
                        <button
                            onClick={shareViaEmail}
                            className=" bg-transparent hover:opacity-80">
                            <Image
                                src={MailImage}
                                alt="Mail Icon"
                                className="w-7 h-7 rounded-md"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
