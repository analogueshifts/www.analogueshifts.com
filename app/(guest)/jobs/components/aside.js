import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function AsideSection({ user }) {
    return (
        <aside className="h-max w-full  flex tablet:flex-col flex-row xl:flex-col large:gap-10 gap-7">
            {!user && (
                <form className="w-full border border-tremor-brand-boulder200 rounded-2xl h-max py-10 px-7 flex flex-col items-center">
                    <Input
                        className="w-full mb-6 focus-visible:ring-tremor-background-darkYellow h-14 px-6 border border-tremor-brand-boulder200 placeholder:text-tremor-brand-boulder200 font-normal text-sm large:text-base text-tremor-brand-boulder500 rounded-2xl"
                        type="email"
                        placeholder="Your Email"
                    />
                    <button
                        type="submit"
                        className="w-full h-14 mb-4 rounded-2xl bg-tremor-background-darkYellow text-tremor-brand-boulder50 flex justify-center items-center text-sm large:text-base font-semibold">
                        Sign Up
                    </button>
                    <div className="w-max text-tremor-brand-boulder400 flex items-center text-sm large:text-base font-normal">
                        Already have an account?&nbsp;
                        <Link
                            href="/login"
                            className="text-tremor-background-darkYellow">
                            Login
                        </Link>
                    </div>
                </form>
            )}
            <div className="w-full border border-tremor-brand-boulder200 rounded-2xl h-max py-9 px-7 flex flex-col items-center">
                <p className="large:text-xl text-lg w-full text-start font-semibold text-black mb-6">
                    Post a job
                </p>
                <Link
                    href={user ? '/tools/hire' : '/login'}
                    className="w-full h-14 mb-4 rounded-2xl bg-white border border-tremor-background-darkYellow text-tremor-background-darkYellow flex justify-center items-center text-sm large:text-base font-semibold">
                    Post job
                </Link>
            </div>
        </aside>
    )
}
