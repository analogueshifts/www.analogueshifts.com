import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
import Calendar from '@/public/images/user-layout/calendar.svg'

import DeleteButton from './delete-btn'

export default function ResumeList({ resumes, setResumes }) {
    return (
        <AnimatePresence initial={false} mode="popLayout">
            <div className="w-full flex flex-col-reverse gap-3.5 large:gap-4">
                {resumes.map((item, index) => {
                    return (
                        <motion.div
                            layout
                            key={index}
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring' }}
                            className="w-full flex justify-between items-center">
                            <Link
                                href={item.url}
                                target="_blank"
                                className="w-max max-w-[60%] flex gap-3 items-center">
                                <Image
                                    src={Calendar}
                                    alt=""
                                    className="min-w-10 h-max"
                                />
                                <div className="flex w-[calc(100%-52px)] max-w-full flex-col gap-1.5">
                                    <p className="truncate max-w-full text-sm text-black font-normal">
                                        {item.name}
                                    </p>
                                    <p className="truncate max-w-full text-[11px] text-[#0000005C] font-normal">
                                        {item.dateAdded}
                                    </p>
                                </div>
                            </Link>
                            <DeleteButton
                                action={() =>
                                    setResumes(
                                        resumes.filter(
                                            resume => resume.id !== item.id,
                                        ),
                                    )
                                }
                                label="resume"
                            />
                        </motion.div>
                    )
                })}
            </div>
        </AnimatePresence>
    )
}
