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
                src={Coins}
                alt=""
                className="absolute tablet:hidden large:top-[37px] w-max large:h-10 h-7 left-[433px]  top-[24px] z-10"
            />
            <Image
                src={Briefcase}
                alt=""
                className="absolute tablet:hidden large:top-[371px] w-max large:h-6 tablet:h-3 h-5 left-[57px]  top-[271px] z-10"
            />
            <Image
                src={Coins}
                alt=""
                className="absolute tablet:hidden large:top-[570px] w-max large:h-10 h-7 left-[259px]  top-[460px] z-10"
            />
            <Image
                src={Telephone}
                alt=""
                className="absolute  w-max large:h-[32px] h-7 large:bottom-[276px] bottom-[180px]  tablet:hidden left-[252px]"
            />
            <Image
                src={LinkSign}
                alt=""
                className="absolute large:top-[102px] w-max large:h-12 tablet:h-6 h-9 tablet:left-[50px] left-[150px] tablet:top-[85px] top-[70px] z-10"
            />

            <Image
                src={Telephone}
                alt=""
                className="absolute  w-max large:h-[32px] h-7 large:top-[248px] top-[200px] tablet:top-[180px] large:left-[284px] tablet:left-[90%] left-[240px]"
            />
            <Image
                src={LinkSign}
                alt=""
                className="absolute large:bottom-[406px] w-max large:h-12 tablet:h-6 h-9 tablet:left-[90%] tablet:top-0 left-[118px] bottom-[306px] z-10"
            />

            <Image
                src={Briefcase}
                alt=""
                className="absolute large:top-[77px] w-max large:h-6 tablet:hidden h-5 right-[444px] tablet:top-0 top-[50px] z-10"
            />
            <Image
                src={Coins}
                alt=""
                className="absolute large:top-[276px] w-max large:h-10 tablet:hidden tablet:h-4 h-7 right-[226px]  top-[210px] z-10"
            />
            <Image
                src={Briefcase}
                alt=""
                className="absolute tablet:hidden large:top-[596px] w-max large:h-6 tablet:h-3 h-5 right-[276px]  top-[400px] z-10"
            />
            <Image
                src={Coins}
                alt=""
                className="absolute tablet:hidden large:bottom-[383px] w-max large:h-10 h-7 right-[58px]  bottom-[290px] z-10"
            />
            <Image
                src={LinkSign}
                alt=""
                className="absolute tablet:hidden large:top-[497px] w-max large:h-12 h-9 right-[89px] top-[397px] z-10"
            />
            <Image
                src={Telephone}
                alt=""
                className="absolute  w-max large:h-[32px] h-7 large:bottom-[276px] bottom-[176px] tablet:hidden   right-[256px]"
            />
        </div>
    )
}
