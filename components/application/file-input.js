'use client'
import { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function FileInput({ value, setValue }) {
    const [uploadState, setUploadState] = useState(value ? 'Success' : '')
    const fileRef = useRef()

    const handleFileChange = e => {
        const maxFileSize = 5 * 1024 * 1024
        const selectedFile = e.target.files[0]
        if (selectedFile && selectedFile.size > maxFileSize) {
            toast.error('File size exceeds the limit (5 MB)', {
                position: 'top-right',
                autoClose: 3000,
            })
            return
        }
        if (selectedFile) {
            setValue(selectedFile)
        } else {
            setUploadState('')
        }
    }

    useEffect(() => {
        if (value) {
            setUploadState('Success')
        }
    }, [value])

    return (
        <section>
            {/* The File Input */}
            <input
                accept="image/jpeg,image/png,application/pdf"
                onChange={handleFileChange}
                ref={fileRef}
                type="file"
                className="-z-10 hidden opacity-0"
            />
            <div
                onClick={() => fileRef.current.click()}
                className={`max-w-full cursor-pointer py-5 w-full h-auto border-dashed rounded-3xl  px-5 border  flex flex-col items-center ${
                    uploadState === 'Success'
                        ? 'border-tremor-brand-success'
                        : 'border-tremor-brand-boulder200'
                }`}>
                {uploadState !== 'Success' ? (
                    <>
                        <p className="flex text-tremor-brand-boulder700 items-center gap-1.5 mb-1">
                            <span className="font-medium text-sm">
                                Upload Here
                            </span>
                            <i className="fas fa-cloud-arrow-up text-sm"></i>
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder500 mb-1">
                            Supports JPG, JPEG, PNG, PDF
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder500 mb-1">
                            Maximum file size 5mb
                        </p>
                    </>
                ) : (
                    <>
                        <p className="flex text-tremor-brand-success items-center gap-1.5 mb-1">
                            <span className="font-medium text-sm">
                                Upload Successful
                            </span>
                            <i className="fas fa-circle-check text-sm"></i>
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-success mb-1">
                            {value?.name}
                        </p>
                    </>
                )}
            </div>
        </section>
    )
}
