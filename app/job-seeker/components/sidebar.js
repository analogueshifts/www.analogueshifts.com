'use client'
import SideBarMenuLink from './sidebar-menu-link'
import { Logout } from './links.js'
import SwitchMode from './switch-mode'

import Image from 'next/image'
import NavLogo from '@/public/images/guest-layout/nav-logo.svg'
import Link from 'next/link'

export default function SideBar({
    handleLogout,
    open,
    setOpen,
    sidebarMenuLinks,
}) {
    return (
        <>
            <section className="fixed z-50 tablet:hidden top-0 left-0 w-[305px] large:w-[344px] h-screen px-0.5 border-r border-[#E7E7E7] bg-white  ">
                <div className=" w-full h-full flex items-center flex-col px-[31px] large:py-16 py-7">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="h-[27px] w-full flex justify-center  items-start mb-5 large:mb-10">
                        <Image
                            src={NavLogo}
                            alt="Logo"
                            className="h-full w-max"
                        />
                    </Link>
                    {/* Logo */}

                    {/* Menus */}
                    <div className="w-full large:mt-6 mt-4 h-max max-h-[calc(100%-192px)] flex flex-col items-center  large:max-h-[calc(100%-256px)] overflow-y-auto ">
                        <div className="w-max h-max flex flex-col">
                            {sidebarMenuLinks.top.map(item => {
                                return (
                                    <SideBarMenuLink
                                        item={item}
                                        key={item.title}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    <div className="w-[73%]  items-start  h-24 large:h-32 absolute bottom-5 large:bottom-12 flex flex-col">
                        {sidebarMenuLinks.bottom.map(item => {
                            return (
                                <SideBarMenuLink item={item} key={item.title} />
                            )
                        })}
                        <button
                            onClick={handleLogout}
                            className={`w-max px-8 tablet:px-5 large:h-16 h-12 large:rounded-3xl rounded-2xl flex items-center gap-3 large:gap-[21px] bg-transparent`}>
                            <div className="h-4 w-4 large:h-6 large:w-6">
                                <Logout size={'100%'} />
                            </div>
                            <p
                                className={`large:text-lg text-sm font-normal text-[#FF0000]`}>
                                Log Out
                            </p>
                        </button>
                    </div>
                </div>
            </section>{' '}
            <section
                className={`fixed z-50 top-0 hidden duration-300 tablet:block w-screen h-screen ${
                    open ? 'left-0' : 'left-[-100%]'
                }`}>
                <div
                    className="w-full h-full z-20 top-0 left-0 absolute"
                    onClick={() => setOpen(false)}></div>
                <div
                    className={` z-50 absolute top-0 left-0 w-[344px] max-w-[75%] h-full px-0.5 border-r  border-gainsBoro bg-white  `}>
                    <div className=" w-full h-full items-center flex flex-col px-[31px] h-lg:py-16 py-7">
                        <div className="w-full flex justify-center mb-3">
                            <SwitchMode />
                        </div>
                        {/* Logo */}

                        {/* Menus */}
                        <div className="w-full large:mt-6 mt-4 flex justify-center  h-max max-h-[calc(100%-192px)]  large:max-h-[calc(100%-256px)] overflow-y-auto ">
                            <div className="w-max h-max flex flex-col">
                                {sidebarMenuLinks.top.map(item => {
                                    return (
                                        <SideBarMenuLink
                                            item={item}
                                            key={item.title}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                        <div className="w-max h-24 large:h-32 absolute bottom-5 large:bottom-12 flex flex-col">
                            {sidebarMenuLinks.bottom.map(item => {
                                return (
                                    <SideBarMenuLink
                                        item={item}
                                        key={item.title}
                                    />
                                )
                            })}
                            <button
                                onClick={handleLogout}
                                className={`w-max px-8 tablet:px-5 large:h-16 h-12 large:rounded-3xl rounded-2xl flex items-center gap-3 large:gap-[21px] bg-transparent`}>
                                <div className="h-4 w-4 large:h-6 large:w-6">
                                    <Logout size={'100%'} />
                                </div>
                                <p
                                    className={`large:text-lg text-sm font-normal text-[#FF0000]`}>
                                    Log Out
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
