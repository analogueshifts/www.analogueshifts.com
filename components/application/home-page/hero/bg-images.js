'use client'
import Image from 'next/image'

// Images
import GirlOne from '@/public/images/guest-layout/hero/girl_one.svg'
import LinkSign from '@/public/images/guest-layout/hero/link_sign.svg'
import BoyOne from '@/public/images/guest-layout/hero/boy_one.svg'
import Telephone from '@/public/images/guest-layout/hero/telephone.svg'
import Briefcase from '@/public/images/guest-layout/hero/briefcase.svg'
import BoyTwo from '@/public/images/guest-layout/hero/boy_two.svg'
import Coins from '@/public/images/guest-layout/hero/coins.svg'
import GirlTwo from '@/public/images/guest-layout/hero/girl_two.svg'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function BackgroundImages() {
    useGSAP(() => {
        gsap.to('.scale-img', {
            scale: 1,
            ease: 'back.out',
            duration: 2,
        })
    }, [])

    return (
        <>
            <Image
                src={BoyOne}
                alt=""
                className="scale-img absolute scale-0 w-max large:h-68 h-12 tablet:h-8 z-10 top-9 large:top-[47px] left-[110px] tablet:left-7 large:left-[148px]"
            />
            <Image
                src={GirlOne}
                alt=""
                className="scale-img absolute scale-0 w-max large:h-148 tablet:h-[70px] h-24 z-10 large:bottom-[105px] tablet:bottom-10 bottom-20 tablet:left-0"
            />
            <Image
                src={BoyTwo}
                alt=""
                className="scale-img absolute scale-0 w-max large:h-113 h-[75px] tablet:h-12 z-10 top-16 tablet:top-2 large:top-[73px] tablet:right-2 right-16 large:right-[94px]"
            />
            <Image
                src={Briefcase}
                alt=""
                className="absolute z-10 tablet:top-20 w-max h-max tablet:w-4 top-10 large:top-[23px] right-2.5 tablet:right-[13px] large:right-2.5"
            />
            <Image
                src={GirlTwo}
                alt=""
                className="scale-img absolute scale-0 w-max large:h-68 tablet:h-8 h-12 z-10 large:bottom-[173px] tablet:bottom-24 bottom-36 right-0"
            />
            <Image
                src={LinkSign}
                alt=""
                className="absolute large:top-[130px] w-max large:h-12 tablet:h-6 h-9 top-[100px] z-10  left-0"
            />
            <Image
                src={Telephone}
                alt=""
                className="absolute tablet:left-2 tablet:bottom-[43%] tablet:h-5  w-max large:h-[35px] h-7 bottom-[50%] large:left-[195px] left-[150px]"
            />
            <Image
                src={Coins}
                alt=""
                className="absolute  tablet:h-5 tablet:bottom-[43%] tablet:right-2 w-max 3xl:h-10 h-6 bottom-[50%] large:right-[120px] right-24"
            />
        </>
    )
}
