'use client'
import { useState } from 'react'

export default function Question({ data, setNewVetData }) {
    const [question, setQuestion] = useState(data.question)
    const [answer, setAnswer] = useState(data.answer)
    const [type, setType] = useState(data.type)
    const [options, setOptions] = useState(
        data.options
            ? data.options
            : [
                  {
                      value: 'Option 1',
                      id: crypto.randomUUID(),
                  },
              ],
    )

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

    const deleteOption = id => {
        setOptions(previous => previous.filter(item => item.id !== id))
    }

    const addOption = () => {
        setOptions(previous => [
            ...previous,
            { id: crypto.randomUUID(), value: `Option ${previous.length + 1}` },
        ])
    }

    return (
        <form className="w-full flex flex-wrap gap-x-5 gap-y-5">
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
            {(type === 'Radio' || type === 'Checkbox') && (
                <div className="w-full flex flex-col gap-3">
                    <p className="text-sm font-normal text-tremor-brand-boulder400 mb-1">
                        OPTIONS
                    </p>
                    {options.map((item, index) => {
                        return (
                            <div
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
                                    onClick={() => deleteOption(item.id)}
                                    type="button"
                                    className="text-base font-normal text-tremor-brand-boulder400">
                                    <i className="fas fa-xmark"></i>
                                </button>
                            </div>
                        )
                    })}
                    <button
                        onClick={addOption}
                        type="button"
                        className="text-sm font-normal text-tremor-brand-boulder400 mr-auto">
                        Add another
                    </button>
                </div>
            )}
        </form>
    )
}
