import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/guest-layout/nav-logo.svg'

import footerLinks from '../utilities/footer-links.json'
import socialLinks from '../utilities/social-icons.json'
import DownloadAppBtn from '../home-page/download-app-btn'

function Footer() {
    return (
        <footer className="z-20 sticky bg-white tablet:pt-20 pt-168 pb-9 tablet:px-6 px-20 large:px-112 flex flex-col">
            <div className="w-full flex 1186:gap-5 flex-col 1186:flex-row gap-10 justify-between">
                <div className="380:min-w-[320px] min-w-0 tablet:max-w-full max-w-[320px] flex flex-col">
                    <Link
                        href="/"
                        className="max-w-full h-max tablet:mb-8 mb-12">
                        <Image src={Logo} alt="" />
                    </Link>
                    <Link
                        href="tel:+2348066708343"
                        className="text-tremor-brand-boulder950 tablet:text-base text-lg mb-3 leading-7 font-normal">
                        Call: +2348066708343
                    </Link>
                    <Link
                        href="mailto:hello@analogueshifts.com"
                        className="text-tremor-brand-boulder950 tablet:text-base text-lg mb-3 leading-7 font-normal">
                        Mail: hello@analogueshifts.com
                    </Link>
                    <p className="text-tremor-brand-boulder950 tablet:text-base text-lg  leading-7 font-normal">
                        {/* Address: 5 Chief Sunday Olaiya Close Salawe Avenue, Off
                        Love All Street Ikosi, Lagos-Nigeria */}
                        Address: Remote Tech Company
                    </p>
                </div>
                <div className="grid grid-cols-1 380:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-16 items-start">
                    {footerLinks.map(item => {
                        return (
                            <div
                                key={item.title}
                                className="flex flex-col gap-3">
                                <p className="text-tremor-brand-boulder950 font-bold text-base leading-6">
                                    {item.title}
                                </p>
                                <div className="flex flex-col gap-2">
                                    {item.links.map(link => {
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.path}
                                                className="text-base leading-6 font-normal text-tremor-brand-boulder600">
                                                {link.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full tablet:mt-10 tablet:mb-14 mb-20 flex flex-wrap gap-5 justify-between items-end">
                <div className="items-center flex tablet:gap-4 gap-8">
                    {socialLinks.map(item => {
                        return (
                            <Link key={item.path} href={item.path}>
                                <Image
                                    width={24}
                                    height={24}
                                    src={item.icon}
                                    alt=""
                                />
                            </Link>
                        )
                    })}
                </div>
                <div className="flex flex-col gap-4">
                    <p className="border-tremor-brand-boulder950 font-bold text-base">
                        Download the app on
                    </p>
                    <div className="flex tablet:gap-4 gap-8 items-center">
                        <DownloadAppBtn platform="playstore" />
                        <DownloadAppBtn platform="appstore" />
                    </div>
                </div>
            </div>
            <p className="text-center text-tremor-brand-boulder950 font-normal tablet:text-base text-lg">
                © {new Date().getFullYear()} | All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer
