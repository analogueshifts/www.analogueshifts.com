export default function NewsLetter() {
    return (
        <section
            style={{
                backgroundImage: 'url(/images/guest-layout/lines-bg.png)',
            }}
            className="w-full z-20 sticky bg-no-repeat bg-cover overflow-hidden bg-tremor-background-darkYellow large:py-[160px] tablet:py-14 py-24 px-6 items-center flex flex-col">
            <h2 className="large:text-32 tablet:text-xl text-2xl text-center font-semibold text-black">
                Subscribe To <span className="text-white">Our Newsletter</span>
            </h2>
            <p className="max-w-[881px] tablet:max-w-full large:text-xl text-base leading-9 large:leading-48 font-normal text-[#907222]  text-center mt-5 mb-10">
                Gain instant access to exclusive remote job opportunities,
                personalized career guidance, and Tech industry insights
                tailored to your needs.
            </p>
            <form className="flex gap-3 max-w-full justify-center tablet:flex-wrap items-center">
                <input
                    type="email"
                    required
                    placeholder="Your Email Address..."
                    className="border border-white/30 bg-white/10 rounded-2xl h-14 px-6 outline-none max-w-full w-[351px] text-base font-normal text-white/60 placeholder:text-white/60"
                />
                <button
                    type="submit"
                    className="h-14 px-12 tablet:w-[351px] max-w-full flex justify-center items-center bg-tremor-brand-boulder950 rounded-2xl text-base text-tremor-brand-boulder50 font-semibold">
                    Submit
                </button>
            </form>
        </section>
    )
}
