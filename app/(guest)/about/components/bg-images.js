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
                className="absolute  large:top-[36px] w-max large:h-12 h-9 tablet:left-10 left-[104px] top-[27px] z-10"
            />
            <Image
                src={Coins}
                alt=""
                className="absolute tablet:top-[80%] tablet:left-[calc(100%-100px)]  large:top-[67px] w-max large:h-10 h-7 left-[313px] top-[52px] z-10"
            />
            <Image
                src={Telephone}
                alt=""
                className="absolute tablet:top-[80%] tablet:left-[100px] large:top-[192px] w-max large:h-8 h-7 left-[179px] top-[140px] z-10"
            />
            <Image
                src={Briefcase}
                alt=""
                className="absolute tablet:hidden  large:top-[381px] w-max large:h-6 h-4 left-[106px] top-[280px] z-10"
            />

            <Image
                src={LinkSign}
                alt=""
                className="absolute  large:top-[42px] w-max large:h-12 h-9 tablet:right-10 right-[344px] top-[32px] z-10"
            />
            <Image
                src={Briefcase}
                alt=""
                className="absolute tablet:hidden  large:top-[67px] w-max tablet:top-20 large:h-6 h-4 right-[63px] top-[52px] z-10"
            />
            <Image
                src={Telephone}
                alt=""
                className="absolute tablet:hidden  large:top-[188px] w-max large:h-8 h-7 right-[178px] top-[140px] z-10"
            />
            <Image
                src={Coins}
                alt=""
                className="absolute tablet:hidden    large:top-[376px] w-max large:h-10 h-7 right-[72px] top-[276px] z-10"
            />
        </div>
    )
}
