import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`large:text-base text-[13px] h-6 leading-5  relative font-medium text-tremor-brand-boulder950`}>
        {children}
        {active && (
            <div className="absolute bottom-0 translate-y-[100%] w-full h-1 rounded-sm bg-tremor-background-darkYellow"></div>
        )}
    </Link>
)

export default NavLink
