'use client'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Success from '@/public/images/user-layout/recruiter/success.svg'

export default function SuccessModal({ open, setOpen }) {
    const router = useRouter()
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 left-0 h-screen w-screen z-50 bg-[#00000029] flex justify-center items-center">
                    <div className="w-max h-max bg-white rounded-3xl flex flex-col items-center justify-center max-w-[85%] py-12 tablet:py-8 px-[60px] tablet:px-10">
                        <Image
                            src={Success}
                            alt=""
                            className="max-w-full mb-4"
                        />
                        <p className="text-sm tablet:text-xs text-center mb-6 text-tremor-brand-boulder400 leading-6 font-normal">
                            Success! Your company details have been{' '}
                            <br className="tablet:hidden" /> saved.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                router.push('/recruiter/companies')
                                setOpen(false)
                            }}
                            className="w-full h-10 bg-tremor-background-darkYellow rounded-[10px] flex justify-center items-center text-white text-xs font-bold">
                            Done
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
