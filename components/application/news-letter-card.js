export default function NewsLetterCard() {
    const handleSubscribe = e => {
        e.preventDefault()
    }
    return (
        <div
            style={{
                backgroundImage: 'url(/images/rectangle.png)',
            }}
            className="w-full max-w-full overflow-x-hidden rounded-[32px] bg-[#D3A121] flex justify-center items-center mt-10 pb-5 pt-14">
            <div className="w-[85%] md:w-[80%] desktop:w-[820px] flex flex-col items-center">
                <p
                    className={`text-lg md:text-3xl font-semibold md:leading-9 text-center mb-5 text-white`}>
                    New Products delivered to you
                </p>
                <p className="font-normal text-base md:text-xl mb-7 text-white/70">
                    Kindly, sign up to out jobsletter for the latest updates
                </p>
                <form
                    onSubmit={handleSubscribe}
                    className="w-[298px] mb-12 flex h-[48px] overflow-x-hidden rounded-full border border-white ">
                    <input
                        placeholder="Enter email"
                        className="w-[55%] px-5 h-full rounded-full border-none outline-none text-sm placeholder:text-white/50 text-white bg-transparent "
                    />
                    <button
                        type="submit"
                        className="text-xs text-[#D3A121] rounded-full text-center w-[50%] bg-white">
                        Subscribe
                    </button>
                </form>
                <p className="font-normal text-sm md:text-base mb-7 text-white/50">
                    We are about privacy and we will never share your data
                </p>
            </div>
        </div>
    )
}
