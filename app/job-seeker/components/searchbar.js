import Image from 'next/image'
import Search from '@/public/images/user-layout/search.svg'

export default function SearchBar() {
    return (
        <div className="h-full w-full rounded-full border bg-[#FBFCFC] border-[#E7E7E7] flex items-center">
            <button className="ml-6">
                <Image src={Search} alt="" className="large:w-5 h-max w-4" />
            </button>{' '}
            <input
                placeholder="Search"
                className="w-[calc(100%-60px)] mr-6 ml-2.5 border-none bg-transparent outline-none placeholder:text-[#B0B0B0] text-tremor-brand-boulder700 text-sm large:text-base font-normal"
            />
        </div>
    )
}
