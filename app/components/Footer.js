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
                    <div className="space-y-20">
                        <a href="/" className="logo flex gap-5">
                            <img
                                src="logo.png"
                                className="w-20 md:w-12"
                                alt=""
                            />
                            <h3 className="">
                                <span className="tracking-widest text-yellow-400">
                                    Analogue
                                </span>
                                <br />
                                <span className="tracking-[1rem]">Shifts</span>
                            </h3>
                        </a>

                        <div className="grid gap-3 text-lg text-gray-100 font-sans">
                            <a href="tel:+2348066708343" target="blank">
                                Call: +2348066708343
                            </a>
                            <a
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                Mail: hello@analogueshifts.com
                            </a>
                        </div>

                        <div className="flex gap-5 text-4xl text-zinc-100 justify-center p-5">
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
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                For Companies
                            </a>
                            <a
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
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                For Technologies
                            </a>
                            <a
                                href="mailto:hello@analogueshifts.com"
                                target="blank">
                                Learning Community
                            </a>
                            <a
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
                            <Link href="/about">About Us</Link>
                            <Link href="mailto:hello@analogueshifts.com">
                                Events
                            </Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="mailto:hello@analogueshifts.com">
                                Press Center
                            </Link>
                            <Link href="mailto:hello@analogueshifts.com">
                                Careers
                            </Link>
                        </div>
                        <div className="">
                            <li>Pages</li>
                            <Link href="/docs/privacy-policy" target="blank">
                                Privacy Policy
                            </Link>
                            <Link
                                href="/docs/terms-and-conditions"
                                target="blank">
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
