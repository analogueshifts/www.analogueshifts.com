import Image from 'next/image'
import Lightbox from '@/public/images/guest-layout/organisations/lightbox.svg'
import Boltshift from '@/public/images/guest-layout/organisations/boltshift.svg'
import Paystack from '@/public/images/guest-layout/organisations/paystack.svg'
import GlobalBank from '@/public/images/guest-layout/organisations/globalbank.svg'
import Flutterwave from '@/public/images/guest-layout/organisations/flutterwave.svg'
import Spherule from '@/public/images/guest-layout/organisations/spherule.svg'

export default function ParallaxSection() {
    return (
        <div className="flex space-x-12 overflow-hidden pb-10">
            <div className="flex space-x-14 animate-loop-scroll">
                <Image
                    src={Lightbox}
                    alt="Lightbox"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Boltshift}
                    alt="Boltshift"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Paystack}
                    alt="Paystack"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={GlobalBank}
                    alt="GlobalBank"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Flutterwave}
                    alt="Flutterwave"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Spherule}
                    alt="Spherule"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
            </div>{' '}
            <div
                className="flex space-x-14 animate-loop-scroll"
                aria-hidden="true">
                <Image
                    src={Lightbox}
                    alt="Lightbox"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Boltshift}
                    alt="Boltshift"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Paystack}
                    alt="Paystack"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={GlobalBank}
                    alt="GlobalBank"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Flutterwave}
                    alt="Flutterwave"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
                <Image
                    src={Spherule}
                    alt="Spherule"
                    className="large:h-max w-max h-10 tablet:h-8 max-w-none"
                />
            </div>
        </div>
    )
}
