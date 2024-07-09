import Link from 'next/link'
import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <footer className="container mx-auto p-4">
                <div className="wrapper">
                    <div className="space-y-12  overflow-hidden">
                        <a href="/" className="logo flex gap-3  ">
                            <img
                                src="/logo.png"
                                className="w-16 md:w-10 h-max"
                                alt=""
                            />
                            <h3 className="flex flex-col gap-0.5 leading-5 text-lg">
                                <span className="tracking-widest text-yellow-400 ">
                                    Analogue
                                </span>

                                <span className="tracking-[1rem]">Shifts</span>
                            </h3>
                        </a>

                        <div className="grid gap-3  text-zinc-100 w-full text-base font-medium ">
                            <a
                                href="tel:+2348066708343"
                                target="blank"
                                className="hover:underline">
                                Call: +2348066708343
                            </a>
                            <a
                                href="mailto:hello@analogueshifts.com"
                                className="hover:underline"
                                target="blank">
                                Mail: hello@analogueshifts.com
                            </a>
                            <span>
                                Address: 7, Smart Idomia Street Along KOKA,
                                Asaba, Delta State.
                            </span>
                        </div>

                        <div className="flex gap-5 text-3xl text-zinc-100 justify-center p-5">
                            <a
                                href="https://www.facebook.com/profile.php?id=100078666855898"
                                target="blank">
                                <FaFacebookSquare />
                            </a>
                            <a
                                href="https://www.instagram.com/analogueshifts_/"
                                target="blank">
                                <FaInstagram />
                            </a>
                            <a
                                href="https://twitter.com/AnalogueShifts"
                                target="blank">
                                <FaTwitter />
                            </a>
                            {/* <a href="mailto:hello@analogueshifts.com" target='blank' target="blank"><ImGithub /></a> */}
                            <a
                                href="https://www.linkedin.com/company/analogue-shifts/"
                                target="blank">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="">
                            <li>Discover Talents</li>
                            <a
                                className="mb-2"
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                For Companies
                            </a>
                            <a
                                className="mb-2"
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                Enterprises
                            </a>
                            <a
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                Case Study
                            </a>
                        </div>
                        <div className="">
                            <li>Find Work</li>
                            <a
                                className="mb-2"
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                For Technologies
                            </a>
                            <a
                                className="mb-2"
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                Learning Community
                            </a>
                            <a
                                className="mb-2"
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                Leadership Program
                            </a>
                            <a
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                Resources
                            </a>
                        </div>
                        <div className="">
                            <li>Analogue Shifts</li>
                            <Link className="mb-2" href="/about">
                                About Us
                            </Link>
                            <Link
                                className="mb-2"
                                href="mailto:hello@analogueshifts.com">
                                Events
                            </Link>
                            <Link className="mb-2" href="/blog">
                                Blog
                            </Link>
                            <Link
                                className="mb-2"
                                href="mailto:hello@analogueshifts.com">
                                Press Center
                            </Link>
                            <Link href="mailto:hello@analogueshifts.com">
                                Careers
                            </Link>
                        </div>
                        <div className="">
                            <li>Pages</li>
                            <Link className="mb-2" href="/docs/privacy-policy">
                                Privacy Policy
                            </Link>
                            <Link href="/docs/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="copy text-center col-span-4 text-lg text-zinc-100 mt-10">
                    &copy; {new Date().getFullYear()} | All Rights Reserved
                </p>
            </footer>
        </div>
    )
}

export default Footer
