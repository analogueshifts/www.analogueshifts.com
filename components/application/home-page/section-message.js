export default function SectionMessage({
    title,
    highlighted,
    description,
    buttonChildren,
    action,
}) {
    return (
        <div className="section w-max max-w-full flex flex-col">
            <h3
                className={`section-tittle overflow-hidden large:text-32 tablet:text-xl text-2xl tablet:leading-8 leading-10 mb-7 large:mb-[38px] font-semibold large:leading-64 text-black`}>
                {title}{' '}
                <span className="text-tremor-background-darkYellow">
                    {highlighted}
                </span>
            </h3>
            <p
                className={`text-tremor-brand-boulder400 mb-8 large:text-xl text-base leading-9 large:leading-48 font-normal `}>
                {description}
            </p>
            <button
                onClick={action}
                className={`flex gap-1 items-center py-2.5 h-12 large:h-14 px-12 bg-tremor-background-darkYellow rounded-2xl text-sm large:text-base text-tremor-brand-boulder50 font-semibold w-max `}>
                {buttonChildren}
            </button>
        </div>
    )
}
