import Image from 'next/image'
import data from './utilities/team.json'

export default function OurTeam() {
    return (
        <section className="w-full large:pt-168 tablet:pt-14 large:pb-52 pb-40 tablet:pb-16 pt-24 large:px-[127px] px-24 tablet:px-6 flex flex-col items-center">
            <h2 className="text-center large:mb-5 mb-3 font-semibold text-2xl tablet:text-lg large:text-32 text-black">
                Our{' '}
                <span className="text-tremor-background-darkYellow">Team</span>
            </h2>
            <p className="font-normal large:max-w-[761px] max-w-564 tablet:max-w-full text-center large:mb-[72px] mb-12 text-tremor-brand-boulder400 leading-10 large:leading-48 text-base large:text-xl">
                We’re a dedicated, diverse, and close-knit team on an adventure
                to deliver quality and your success
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {data.map(item => {
                    return (
                        <div
                            key={item.role}
                            className="col-span-1 flex flex-col items-center">
                            <Image
                                height={220}
                                width={266}
                                src={item.image}
                                alt=""
                                className="w-full h-[220px] object-contain mb-2"
                            />
                            <h3 className="text-black mb-[2.8px] text-lg leading-8 text-center font-semibold">
                                {item.name}
                            </h3>
                            <p className="text-tremor-brand-boulder400 text-sm font-semibold leading-[34px] text-center">
                                {item.role}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
