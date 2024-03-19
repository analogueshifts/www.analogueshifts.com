'use client'
import { useState, Fragment } from 'react'

export default function ActionMenu({
    handleEdit,
    handleDelete,
    handlePreview,
    handleShare,
    handleVetResponse,
}) {
    const [isOpen, setIsOpen] = useState(false)
    let list = [
        { name: 'Preview Vet', action: handlePreview },
        { name: 'Edit Vet', action: handleEdit },
        { name: 'Share Vet', action: handleShare },
        { name: 'Vet Response', action: handleVetResponse },
        { name: 'Delete Vet', action: handleDelete },
    ]

    const toggleDrawer = () => {
        setIsOpen(previous => !previous)
    }

    return (
        <>
            <div className="relative h-[72px] flex items-center">
                <button
                    onClick={toggleDrawer}
                    className="relative text-sm cursor-pointer text-tremor-brand-boulder500 w-full rounded-2xl bg-transparent  focus:outline-none ">
                    <span className="flex items-center w-[calc(100%-25px)] justify-end">
                        <span className=" block truncate">SELECT OPTION</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0  flex items-center">
                        <i
                            className="fas fa-ellipsis-vertical w-5 text-gray-400"
                            aria-hidden="true"></i>
                    </span>
                </button>

                <div
                    style={{
                        boxShadow: '0px 20px 417px 0px #00000012',
                    }}
                    className={`absolute z-[500] duration-300 top-[60px] max-h-56 w-[90%] overflow-auto rounded-3xl bg-white text-base shadow-lg focus:outline-none sm:text-sm py-3 ${
                        isOpen
                            ? 'visible opacity-100 translate-y-0'
                            : 'invisible opacity-0 translate-y-2'
                    }`}>
                    {list.map(item => (
                        <div
                            onClick={() => {
                                setIsOpen(false)
                                item.action()
                            }}
                            key={crypto.randomUUID()}
                            className={
                                'text-tremor-brand-boulder300 cursor-pointer border-transparent relative h-[42px] text-[13px] border select-none py-2 pl-3 pr-9 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]'
                            }>
                            <div className="flex items-center">
                                <span
                                    className={
                                        'ml-3 block truncate font-normal'
                                    }>
                                    {item?.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
