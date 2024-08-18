import Image from 'next/image'
import products from './utilities/data.json'
import SectionMessage from '../section-message'
import RightArrow from '@/public/images/guest-layout/products/right-arrow.svg'
import Payroll from '@/public/images/guest-layout/payroll.svg'

export default function Products() {
    return (
        <>
            <div className="w-full z-10 h-max pb-10 large:pb-20 large:pt-168 pt-12 sticky top-12 large:top-0 bg-white items-center flex flex-col tablet:px-6 px-20 large:px-112">
                <h2 className="text-center mb-2 large:mb-0 font-semibold text-2xl tablet:text-lg large:text-32 text-black">
                    What’s{' '}
                    <span className="text-tremor-background-darkYellow">
                        More?
                    </span>
                </h2>
                <p className="large:leading-48 leading-7 text-tremor-brand-boulder400 tablet:text-sm text-base large:text-xl text-center large:max-w-[640px] font-normal">
                    Explore more ways to take your business/company to the next
                    level with our online tools
                </p>
            </div>
            <section className="w-full h-max justify-center tablet:px-6 px-20 large:px-112 bg-white items-center overflow-hidden large:pb-168 pb-12  flex flex-col">
                <div className="w-full gap-16  flex flex-col">
                    {products.map(item => {
                        return (
                            <div
                                key={item.title}
                                className="w-full  grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                                <div className="col-span-1 relative overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={400}
                                        height={500}
                                        className="w-full h-max object-cover"
                                    />
                                    {item.payroll && (
                                        <Image
                                            src={Payroll}
                                            alt=""
                                            className="absolute tablet:-top-14 tablet:right-0 -top-24 -right-32 large:-right-44 w-full h-full"
                                        />
                                    )}
                                </div>
                                <div className="col-span-1">
                                    <SectionMessage
                                        title={item.title}
                                        highlighted={item?.highlighted || ''}
                                        buttonChildren={
                                            <>
                                                Try it for free{' '}
                                                <Image
                                                    src={RightArrow}
                                                    alt=""
                                                />
                                            </>
                                        }
                                        description={item.description}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
