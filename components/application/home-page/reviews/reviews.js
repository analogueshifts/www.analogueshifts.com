import Image from 'next/image'

import ratings from './utilities/data.json'
import Star from '@/public/images/guest-layout/ratings/star.svg'
import Quote from '@/public/images/guest-layout/ratings/quote.svg'

export default function Reviews() {
    return (
        <section className="w-full sticky z-20 h-max bg-white items-center overflow-hidden large:pt-168 tablet:pt-14 pt-24 flex flex-col">
            <h2 className="text-center mb-10 tablet:px-5 large:mb-16 font-semibold text-2xl tablet:text-lg large:text-32 text-black">
                What Do Our Clients Say{' '}
                <span className="text-tremor-background-darkYellow">
                    About Us
                </span>
            </h2>
            <div className="w-full overflow-x-auto tablet:h-max h-[400px] large:h-434 tablet:px-8 px-12 scroll-hidden">
                <div className="tablet:w-full w-max tablet:flex-wrap tablet:h-max h-full flex gap-8 large:gap-12 items-center">
                    {ratings.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="large:w-407 w-[380px] tablet:w-full h-full flex flex-col justify-between px-6 py-7 rounded-2xl review-box">
                                <div className="w-full flex flex-col h-[calc(100%-80px)] gap-4">
                                    <div className="w-full flex items-center gap-[5.4px]">
                                        {item.ratings.map(rating => {
                                            return (
                                                <Image
                                                    src={Star}
                                                    alt=""
                                                    key={rating}
                                                />
                                            )
                                        })}
                                    </div>
                                    <p className="text-tremor-brand-vulcan950 font-normal text-sm large:text-base leading-7 large:leading-8">
                                        {item.message}
                                    </p>
                                </div>
                                <div className="w-full h-max items-end flex justify-between">
                                    <div className="w-max h-10 flex gap-2.5 items-center">
                                        <Image
                                            src={item.userImage}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="h-10 w-10 object-cover"
                                        />
                                        <div className="flex flex-col gap-[2.7px]">
                                            <p className="text-tremor-brand-vulcan950 font-medium text-[9.5px]">
                                                {item.userName}
                                            </p>
                                            <p className="text-[#8C8C93] font-normal text-[9.5px]">
                                                {item.userRole}
                                            </p>
                                        </div>
                                    </div>{' '}
                                    <Image src={Quote} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
