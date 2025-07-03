import Image from 'next/image'

// Images
import LinkSign from '@/public/images/guest-layout/hero/link_sign.svg'
import Telephone from '@/public/images/guest-layout/hero/telephone.svg'
import Briefcase from '@/public/images/guest-layout/hero/briefcase.svg'
import Coins from '@/public/images/guest-layout/hero/coins.svg'

export default function BackgroundImages() {
    return (
        <div className="z-10">
            <Image
                src={LinkSign}
                alt=""
                className="absolute  large:top-[72px] w-max large:h-12 h-9 left-[49px] tablet:hidden top-[52px] z-10"
            />

            <Image
                src={Telephone}
                alt=""
                className="absolute tablet:top-[90%] tablet:left-[20px] large:bottom-[68px] w-max large:h-8 h-7 left-[248px] bottom-[64px] z-10"
            />
            <Image
                src={Briefcase}
                alt=""
                className="absolute   large:top-4 w-max tablet:hidden large:h-6 h-4 right-[33px] top-3 z-10"
            />

            <Image
                src={Coins}
                alt=""
                className="absolute  large:bottom-[56px] tablet:bottom-[5%] tablet:right-[20px] w-max large:h-10 h-7 right-[140px] bottom-[48px] z-10"
            />
        </div>
    )
}
