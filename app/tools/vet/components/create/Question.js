'use client'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import {
    Reorder,
    AnimatePresence,
    motion,
    useDragControls,
} from 'framer-motion'

export default function Question({
    data,
    setVetQuestions,
    newVetData,
    vetQuestions,
}) {
    const [question, setQuestion] = useState(data.question)
    const [answer, setAnswer] = useState(data.answer)
    const [type, setType] = useState(data.type)
    const [options, setOptions] = useState(data.options ? data.options : [])
    const [isRequired, setIsRequired] = useState(data.required)
    const controls = useDragControls()

    const toggleSwitch = () => {
        setIsRequired(prev => !prev)
    }

    // Update the value of an option
    const updateOption = (id, newValue) => {
        setOptions(prev =>
            prev.map(item => {
                if (item.id !== id) {
                    return item
                } else {
                    return { ...item, value: newValue }
                }
            }),
        )
    }

    // Remove an option from the list
    const deleteOption = id => {
        setOptions(previous => previous.filter(item => item.id !== id))
    }

    // Add an option
    const addOption = () => {
        setOptions(previous => [
            ...previous,
            { id: crypto.randomUUID(), value: `Option ${previous.length + 1}` },
        ])
    }

    // Removing a vet question
    const removeVetQuestion = id => {
        setVetQuestions(prev => prev.filter(item => item.id !== id))
    }

    // Duplicate A vet question
    const duplicateVetQuestion = () => {
        setVetQuestions(prev => {
            return [
                {
                    id: crypto.randomUUID(),
                    question: question,
                    type: type,
                    answer: answer,
                    options: options,
                    required: isRequired,
                },
                ...prev,
            ]
        })
    }

    // Update our vetQuestions when ever a value gets changed
    useEffect(() => {
        setVetQuestions(prev =>
            prev.map(item => {
                if (item.id !== data.id) {
                    return item
                } else {
                    return {
                        id: data.id,
                        question: question,
                        type: type,
                        answer: answer,
                        options: options,
                        required: isRequired,
                    }
                }
            }),
        )
    }, [question, answer, type, options, isRequired])

    useEffect(() => {
        Cookies.set(
            'vetCreationData',
            JSON.stringify({
                ...newVetData,
                vet_questions: vetQuestions,
            }),
        )
    }, [vetQuestions])

    return (
        <Reorder.Item
            value={data}
            key={data.id}
            dragListener={false}
            dragControls={controls}>
            <form className="w-full mt-5 flex flex-wrap gap-x-5 gap-y-5 bg-[#FEFEFE] border border-[#E7E7E7] h-max px-4 lg:px-10 py-5 rounded-3xl">
                <div
                    onPointerDown={e => controls.start(e)}
                    className="cursor-move w-full h-3 flex justify-center items-center">
                    <i className="fas fa-grip text-tremor-brand-boulder400"></i>
                </div>
                <div className="w-full md:w-[calc(65%-10px)] flex flex-col gap-3">
                    <p className="text-sm font-normal text-tremor-brand-boulder400">
                        QUESTION
                    </p>
                    <input
                        required
                        type="text"
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                        placeholder="e.g “What is your role?”"
                        className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                    />
                </div>
                <div className="w-full md:w-[calc(35%-10px)] flex flex-col gap-3">
                    <p className="text-sm font-normal text-tremor-brand-boulder400">
                        TYPE
                    </p>
                    <select
                        value={type}
                        onChange={e => setType(e.target.value)}
                        className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-none">
                        {['Short Text', 'Long Text', 'Radio', 'Checkbox'].map(
                            option => {
                                return (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                )
                            },
                        )}
                    </select>
                </div>

                {(type === 'Short Text' || type === 'Long Text') && (
                    <div className="w-full flex flex-col gap-3">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ANSWER
                        </p>

                        {type === 'Long Text' ? (
                            <textarea
                                value={answer}
                                onChange={e => setAnswer(e.target.value)}
                                placeholder="e.g “Frontend Development”"
                                className="max-w-full w-full h-24 pt-3 rounded-2xl px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"></textarea>
                        ) : (
                            <input
                                required
                                type="text"
                                value={answer}
                                onChange={e => setAnswer(e.target.value)}
                                placeholder="e.g “Frontend Development”"
                                className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                            />
                        )}
                    </div>
                )}
                {(type === 'Radio' || type === 'Checkbox') && (
                    <div className="w-full flex flex-col gap-3">
                        <p className="text-sm font-normal text-tremor-brand-boulder400 mb-1">
                            OPTIONS
                        </p>
                        <AnimatePresence mode={'sync'}>
                            {options.map(item => {
                                return (
                                    <motion.div
                                        layout
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ type: 'spring' }}
                                        key={item.id}
                                        className="w-full flex justify-between items-center">
                                        <div className="w-11/12 flex items-center gap-2.5">
                                            <div
                                                className={`w-4 h-4 border border-tremor-brand-boulder200 ${
                                                    type === 'Radio'
                                                        ? 'rounded-full'
                                                        : 'rounded'
                                                }`}></div>
                                            <input
                                                onChange={e =>
                                                    updateOption(
                                                        item.id,
                                                        e.target.value,
                                                    )
                                                }
                                                value={item.value}
                                                className="w-[calc(100%-26px)] border-b focus:border-tremor-brand-boulder300/80 border-tremor-brand-boulder200/50 text-[13px] pb-1 px-1 font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-none"
                                            />
                                        </div>
                                        <button
                                            onClick={() =>
                                                deleteOption(item.id)
                                            }
                                            type="button"
                                            className="text-base hover:text-tremor-brand-boulder950 font-normal text-tremor-brand-boulder400">
                                            <i className="fas fa-xmark"></i>
                                        </button>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>

                        <button
                            onClick={addOption}
                            type="button"
                            className="text-sm font-normal hover:text-tremor-brand-boulder950 text-tremor-brand-boulder400 mr-auto">
                            Add {options.length > 0 ? 'another' : 'option'}
                        </button>
                    </div>
                )}
                <div className="w-full flex items-center gap-4">
                    <p className="text-sm font-normal text-tremor-brand-boulder400">
                        REQUIRED
                    </p>
                    <div
                        className="switch"
                        data-isOn={isRequired}
                        onClick={toggleSwitch}>
                        <motion.div
                            className="handle"
                            layout
                            transition={{
                                opacity: { ease: 'linear' },
                                layout: { duration: 0.3 },
                            }}
                        />
                    </div>
                </div>
                <div className="w-full  flex-wrap justify-center items-center flex md:justify-end py-5 gap-5 border-t border-tremor-brand-boulder200">
                    <button
                        onClick={duplicateVetQuestion}
                        type="button"
                        className="text-xs font-normal hover:text-tremor-brand-boulder950 text-tremor-brand-boulder400 border-none bg-transparent outline-none flex items-center gap-1">
                        <i className="fa-regular fa-copy text-sm"></i> DUPLICATE
                    </button>
                    <button
                        onClick={() => removeVetQuestion(data.id)}
                        type="button"
                        className="text-xs font-normal hover:text-tremor-brand-boulder950 text-tremor-brand-boulder400 border-none bg-transparent outline-none flex items-center gap-1">
                        <i className="fa-regular fa-trash-can text-sm"></i>{' '}
                        REMOVE
                    </button>
                </div>
            </form>
        </Reorder.Item>
    )
}
