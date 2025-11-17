import React from 'react'
import Tiptap from '../../../../../job-seeker/profile/edit/components/tiptap'
import TrashCan from '@/public/images/user-layout/trash-can.svg'
import Image from 'next/image'

export default function RenderScreeningQuestion({
    question,
    updateQuestion,
    index,
    deleteEnabled,
    onDelete,
    isLast,
}) {
    return (
        <div
            className={`w-full pb-7 ${
                isLast ? '' : 'border-b border-tremor-brand-boulder100'
            }`}>
            <div className="flex justify-between mb-6 items-center">
                <h3 className="large:text-base text-sm font-medium text-tremor-brand-boulder950 max-w-[80%] tablet:max-w-full w-max">
                    Question {index + 1}
                </h3>
                {deleteEnabled && (
                    <button
                        type="button"
                        onClick={() => onDelete(question.id)}
                        className=" flex items-center gap-1.5 large:gap-2.5 font-medium text-sm large:text-base text-[#FF0000] px-0 py-0">
                        <Image
                            src={TrashCan}
                            className="h-max large:w-max w-5"
                            alt=""
                        />
                        Delete
                    </button>
                )}
            </div>
            <Tiptap
                placeholder="Type in your question"
                initialData={question.question}
                changed={value => {
                    updateQuestion(question.id, value)
                }}
            />
        </div>
    )
}
