'use client'
import { useUser } from '@/contexts/user'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

import SectionMessage from './section-message'

import FormImage from '@/public/images/guest-layout/post-a-job/form.svg'
import VerifiedImage from '@/public/images/guest-layout/post-a-job/verified.svg'

export default function PostAJob() {
    const { user } = useUser()
    const router = useRouter()

    return (
        <section className="w-full relative overflow-hidden large:py-168 tablet:py-14 py-24 tablet:px-6 px-20 items-center large:px-112 tablet:flex flex-col-reverse grid large:grid grid-cols-2 tablet:gap-10 gap-88">
            <div className=" col-span-1  w-max max-w-full">
                <Image
                    src={FormImage}
                    alt=""
                    className="w-max h-max max-w-[calc(100%-63px)]"
                />
            </div>
            <Image
                src={VerifiedImage}
                className="absolute z-10 tablet:w-full w-6/12 tablet:translate-y-[-100%] tablet:top-[100%] tablet:left-[30%] top-[170px] left-[170px] large:w-max max-w-full  h-max large:left-0 large:top-0"
                alt=""
            />
            <div className="col-span-1 z-20 w-full">
                <SectionMessage
                    action={() => {
                        router.push(
                            user
                                ? '/dashboard'
                                : 'https://auth.analogueshifts.app?app=main',
                        )
                    }}
                    title="Post A Job"
                    highlighted="Today"
                    buttonChildren="Get Started"
                    description="Reach a pool of highly skilled tech candidates and find the perfect fit for your team. Start your recruitment journey now and take the first step towards building your dream team!"
                />
            </div>
        </section>
    )
}
