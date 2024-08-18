import Image from 'next/image'
import data from './utilities/our-values.json'

export default function OurValues() {
    return (
        <section className="w-full large:pt-168 tablet:pt-14 pt-24 large:px-[127px] px-24 tablet:px-6 flex flex-col items-center">
            <h2 className="text-center large:mb-[35px] mb-6 font-semibold text-2xl tablet:text-lg large:text-32 text-black">
                Our{' '}
                <span className="text-tremor-background-darkYellow">
                    Values
                </span>
            </h2>
            <div className="w-full flex flex-wrap justify-center xl:grid grid-cols-2 xl:grid-cols-3 gap-[50px]">
                {data.map(item => {
                    return (
                        <div
                            key={item.title}
                            className="col-span-1 xl:w-full w-max max-w-[362px] border border-tremor-background-darkYellow rounded-3xl px-8 py-8 flex flex-col gap-4">
                            <div className="flex justify-center items-center gap-[10.9px]">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={29.69}
                                    height={29.69}
                                />
                                <p className="text-black font-semibold text-lg large:text-[21.77px]">
                                    {item.title}
                                </p>
                            </div>
                            <p className="text-tremor-brand-boulder400 text-base font-normal leading-[31px] text-center">
                                {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
