import { motion, AnimatePresence } from 'framer-motion'
import DeleteButton from './delete-btn'
import Tiptap from './tiptap'
import Image from 'next/image'
import Calendar from '@/public/images/calendar.svg'

export default function ExperienceList({ experience, setExperience }) {
    const updateValue = (newValue, label, id) => {
        setExperience(
            experience.map(prev => {
                if (id === prev.id) {
                    return {
                        ...prev,
                        [label]: newValue,
                    }
                } else {
                    return prev
                }
            }),
        )
    }

    return (
        <AnimatePresence initial={false} mode="popLayout">
            <div className="w-full flex flex-col-reverse pt-5 gap-5 large:gap-6">
                {experience.map((item, index) => {
                    return (
                        <motion.div
                            layout
                            key={index}
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring' }}
                            className="w-full flex flex-col border-t border-[#E2E2E2] py-5">
                            <DeleteButton
                                label="experience"
                                action={() =>
                                    setExperience(
                                        experience.filter(
                                            e => e.id !== item.id,
                                        ),
                                    )
                                }
                            />
                            <div className="w-full flex flex-col mt-4 gap-6">
                                <input
                                    type="text"
                                    value={item?.role}
                                    onChange={e =>
                                        updateValue(
                                            e.target.value,
                                            'role',
                                            item?.id,
                                        )
                                    }
                                    placeholder="Role"
                                    className="w-full rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 large:text-base text-sm"
                                />
                                <input
                                    type="text"
                                    value={item?.company}
                                    onChange={e =>
                                        updateValue(
                                            e.target.value,
                                            'company',
                                            item?.id,
                                        )
                                    }
                                    placeholder="Company"
                                    className="w-full rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 large:text-base text-sm"
                                />

                                <div
                                    className={`w-full relative flex overflow-hidden justify-between items-center rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 large:text-base text-sm ${
                                        item?.startDate?.length > 0
                                            ? 'text-tremor-brand-boulder950'
                                            : 'text-tremor-brand-boulder300'
                                    }`}>
                                    {item?.startDate || 'Start Date'}{' '}
                                    <Image src={Calendar} alt="" />
                                    <input
                                        type="date"
                                        value={item?.startDate}
                                        onChange={e =>
                                            updateValue(
                                                e.target.value,
                                                'startDate',
                                                item?.id,
                                            )
                                        }
                                        className=" w-full h-full top-0 right-6 opacity-0 outline-none  absolute"
                                    />
                                </div>

                                <div
                                    className={`w-full relative flex overflow-hidden justify-between items-center rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 large:text-base text-sm ${
                                        item?.endDate?.length > 0
                                            ? 'text-tremor-brand-boulder950'
                                            : 'text-tremor-brand-boulder300'
                                    }`}>
                                    {item?.endDate || 'End Date'}{' '}
                                    <Image src={Calendar} alt="" />
                                    <input
                                        type="date"
                                        value={item?.endDate}
                                        onChange={e =>
                                            updateValue(
                                                e.target.value,
                                                'endDate',
                                                item?.id,
                                            )
                                        }
                                        className=" w-full h-full top-0 right-6 opacity-0 outline-none  absolute"
                                    />
                                </div>

                                <div className="w-full">
                                    <Tiptap
                                        initialData={item?.description}
                                        changed={v =>
                                            updateValue(
                                                v,
                                                'description',
                                                item?.id,
                                            )
                                        }
                                        placeholder="Write a description for this role."
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </AnimatePresence>
    )
}
