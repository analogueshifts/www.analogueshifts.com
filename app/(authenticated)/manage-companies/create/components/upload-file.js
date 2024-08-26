'use client'
import { useState } from 'react'
import { useHire } from '@/hooks/hires'
import { motion } from 'framer-motion'

import FileInput from '@/components/application/file-input'
import Primary from '@/components/spinners/primary'

export default function UploadFile({
    title,
    description,
    setFileUrl,
    fileUrl,
}) {
    const [logoFile, setLogoFile] = useState()
    const [isUrlType, setIsUrlType] = useState(
        fileUrl?.trim()?.length > 0 ? true : false,
    )
    const [fileUploading, setFileUploading] = useState(false)

    const { uploadFile } = useHire()

    const uploadImage = async value => {
        try {
            await uploadFile({
                fileValue: value,
                setLoading: setFileUploading,
                setData: url => {
                    setFileUrl(url)
                    setLogoFile(value)
                },
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                <p className="text-sm font-normal text-tremor-brand-boulder400">
                    {title}
                </p>
                <p className="font-light text-[13px] text-tremor-brand-boulder900">
                    {description}
                </p>
                <div className="w-full flex items-center flex-wrap gap-2.5">
                    <p className="font-light text-[13px] text-tremor-brand-boulder900">
                        Use Url Format
                    </p>
                    <div
                        className="switch"
                        data-isOn={isUrlType}
                        onClick={() => setIsUrlType(!isUrlType)}>
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
            </div>
            <div className="w-full md:w-1/2">
                {!isUrlType ? (
                    <div className="relative w-full h-max rounded-3xl overflow-hidden">
                        {fileUploading && (
                            <div
                                style={{ zIndex: 3000 }}
                                className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white border border-dashed rounded-3xl border-tremor-brand-boulder200">
                                <Primary color="#FFBB0A70" />
                            </div>
                        )}
                        <FileInput value={logoFile} setValue={uploadImage} />
                    </div>
                ) : (
                    <input
                        type="url"
                        value={fileUrl}
                        required={true}
                        onChange={e => setFileUrl(e.target.value)}
                        placeholder="e.g “www.analogueshifts.com/logo.png”"
                        className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                    />
                )}
            </div>
        </div>
    )
}
