import { motion, AnimatePresence } from 'framer-motion'

export default function ActionList({ list, setList }) {
    const remove = value => setList(list.filter(item => item !== value))

    return (
        <AnimatePresence initial={false} mode="popLayout">
            <div className="w-full flex flex-wrap tablet:gap-2 gap-3 large:gap-4">
                {list?.map((item, index) => {
                    return (
                        <motion.button
                            onClick={() => remove(item)}
                            layout
                            key={index}
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring' }}
                            type="button"
                            className="w-mx bg-[#FEC84B] rounded-2xl large:py-2.5 py-2 large:pr-2.5 pr-2 tablet:px-2.5 tablet:text-xs large:pl-6 pl-4 flex large:gap-2.5 gap-2 items-center text-white font-normal large:text-base text-sm">
                            {item}{' '}
                            <svg
                                className="large:h-6 tablet:w-2.5 tablet:h-2.5 large:w-6 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect
                                    width="24"
                                    height="24"
                                    rx="12"
                                    fill="white"
                                />
                                <path
                                    d="M6.1665 13.668L9.08317 16.5846L17.8332 7.41797"
                                    stroke="#FFBB0A"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </motion.button>
                    )
                })}
            </div>
        </AnimatePresence>
    )
}
