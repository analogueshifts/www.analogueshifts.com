'use client'
import Card from './card'

import Image from 'next/image'
import Briefcase from '@/public/images/guest-layout/talent-pool/briefcase_bg.svg'
import FocusIcon from '@/public/images/guest-layout/talent-pool/focus-icon.svg'
import WorkIcon from '@/public/images/guest-layout/hero/filled_briefcase.svg'
import EfficientIcon from '@/public/images/guest-layout/talent-pool/efficient-icon.svg'
import SectionMessage from '../section-message'

import { useUser } from '@/contexts/user'
import { useRouter } from 'next/navigation'

export default function TalentPool() {
    const router = useRouter()
    const { user } = useUser()

    const app = process.env.NEXT_PUBLIC_SITE_BUILD_UUID

    return (
        <section className="w-full relative items-end flex flex-col gap-6 large:gap-12 large:pb-69 tablet:pb-4 pb-6 large:pt-168 tablet:pt-3 pt-16 tablet:px-6 px-20 large:px-112">
            <Image
                src={Briefcase}
                alt=""
                className="absolute bottom-0 right-0 tablet:w-2/5 w-[340px] large:w-max h-max"
            />
            <div className="1186:absolute static  large:left-[112px] sm:left-20 left-6 max-w-full  1186:max-w-564 w-max">
                <SectionMessage
                    action={() =>
                        router.push(
                            user
                                ? '/recruiter/dashboard'
                                : `https://auth.analogueshifts.app?app=${app}`,
                        )
                    }
                    title="Connecting you to the Right Tech"
                    highlighted="Talents"
                    description="The global talent pool is at your fingertips. We take the hassle  out of remote recruitment, connecting you with highly skilled tech professionals worldwide."
                    buttonChildren="Get Started"
                />
            </div>

            <Card
                title="Best Work"
                description="We tailor our services to understand exactly what kind of tech talent you want, delivering the best results for businesses in all industries."
                image={WorkIcon}
            />
            <div className="large:translate-x-[-231px] mobile:translate-x-[-150px] translate-x-0 w-full md:w-max">
                <Card
                    title="Focused"
                    description="We focus on cultural fit, talent acquisition, and matching your candidate pool with the talent you need."
                    image={FocusIcon}
                />
            </div>
            <div className="large:translate-x-[-327px] w-full flex justify-end mobile:w-max translate-x-0 mobile:translate-x-[-240px]">
                <Card
                    title="Efficient"
                    description="Our streamlined recruitment process ensures efficiency and reduces the time-to-fill positions, saving you valuable resources.."
                    image={EfficientIcon}
                />
            </div>
        </section>
    )
}
