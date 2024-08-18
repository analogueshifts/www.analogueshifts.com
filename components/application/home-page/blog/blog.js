import Carousel from './carousel'

export default function Blogs({ blogs }) {
    return (
        <section className="w-full large:px-112 tablet:px-6 z-20 sticky px-20 h-max bg-white items-center overflow-hidden large:pt-168 tablet:pt-14 pt-24 flex flex-col">
            <h2 className="text-center mb-5 font-semibold text-2xl tablet:text-lg large:text-32 text-black">
                From Our{' '}
                <span className="text-tremor-background-darkYellow">Blog</span>
            </h2>
            <p className="text-tremor-brand-boulder400 mb-12 large:mb-16 tablet:text-sm text-base large:text-xl text-center font-normal">
                Our Blog Provides Helpful Information To Help You Stay On Top.
            </p>
            <Carousel posts={blogs} />
        </section>
    )
}
