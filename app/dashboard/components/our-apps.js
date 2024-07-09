import Image from 'next/image'
import Data from '@/components/application/home-page/utilities/FeaturesData.json'

export default function OurApps() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pt-7">
                {Data.FeaturesData.map(el => (
                    <a
                        key={el.title}
                        href={el.url}
                        className="bg-white col-span-1 duration-300 h-max rounded-xl  p-5 flex flex-col gap-5 motion-safe:hover:scale-[1.02] transition-all duration-250">
                        <div className="w-full h-max max-h-52 sm:h-24 overflow-hidden rounded-2xl">
                            <Image
                                className="w-full max-w-full rounded-2xl h-max object-cover"
                                src={el.image}
                                alt="Image"
                                height={208}
                                width={347}
                            />
                        </div>
                        <div>
                            <h2 className="text-base mb-5 font-normal text-tremor-brand-boulder900">
                                {el.title}
                            </h2>
                        </div>
                    </a>
                ))}
                <a
                    href={'https://learn.analogueshifts.com'}
                    className="bg-white col-span-1 duration-300 h-max rounded-xl p-5 flex flex-col gap-5 motion-safe:hover:scale-[1.02] transition-all duration-250">
                    <div className="w-full h-max max-h-52  sm:h-24 flex justify-center items-center overflow-hidden rounded-2xl">
                        <Image
                            className="w-full max-w-full rounded-2xl h-max object-cover"
                            src={'/images/learn.webp'}
                            alt="Image"
                            height={208}
                            width={347}
                        />
                    </div>
                    <div>
                        <h2 className="text-base mb-5 font-normal text-tremor-brand-boulder900">
                            Learning Platform
                        </h2>
                    </div>
                </a>
            </div>
        </div>
    )
}
