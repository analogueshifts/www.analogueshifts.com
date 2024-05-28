'use client'

import Image from 'next/image'
import FormTemplateImage from '@/public/images/form-template.jpg'

const FormGridTile = ({ item, selectedUrl, setSelectedUrl }) => {
    return (
        <div
            onClick={() => setSelectedUrl(item.uuid)}
            className={`${
                selectedUrl === item.uuid
                    ? 'border-tremor-background-darkYellow'
                    : 'border-black/10'
            } col-span-1 cursor-pointer bg-[#FEFEFE] h-64 rounded-lg border flex flex-col overflow-hidden hover:border-tremor-background-darkYellow`}>
            <Image
                src={FormTemplateImage}
                alt="Form Background"
                className="w-full h-3/4 object-cover"
            />
            <div className="w-full h-1/4 border-t px-3 md:px-5 items-center py-2.5 flex justify-between">
                <div className="w-4/5 flex flex-col justify-between h-full">
                    <h3 className="text-tremor-brand-boulder950 font-semibold text-sm truncate">
                        {item.title}
                    </h3>
                    <span className="text-xs text-tremor-brand-boulder400 truncate">
                        Deadline: {item.deadline}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FormGridTile
