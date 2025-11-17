import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useToast } from '@/contexts/toast'
import { useHire } from '@/hooks/hires'
import Upload from '@/public/images/user-layout/profile/upload.svg'
import Cookies from 'js-cookie'

export default function UploadProfile({ url, setUrl }) {
    const [loading, setLoading] = useState(false)
    const { notifyUser } = useToast()
    const fileRef = useRef()
    const { uploadFile } = useHire()
    const [progress, setProgress] = useState(0)
    const uploadInterval = useRef(null)

    const handleFileChange = e => {
        const maxFileSize = 5 * 1024 * 1024
        const selectedFile = e.target.files[0]
        if (selectedFile && selectedFile.size > maxFileSize) {
            notifyUser('error', 'File size exceeds the limit (5 MB)')
            return
        }
        if (selectedFile) {
            setLoading(true)
            uploadFile({
                fileValue: selectedFile,
                setLoading,
                setData: path => {
                    setUrl(path)
                    Cookies.set('ProfileAvatar', path)
                    setLoading(false)
                },
                fileType: 'file',
            })
        } else {
            setLoading(false)
        }
    }

    const handleUploadStarted = () => {
        // Clear any existing interval before starting a new one
        if (uploadInterval.current) clearInterval(uploadInterval.current)

        // Start a new interval and assign it to the ref
        uploadInterval.current = setInterval(() => {
            setProgress(prev => (prev < 99 ? prev + 1 : 99))
        }, 50)
    }

    const stopUpload = () => {
        setProgress(0) // Reset progress when upload completes
        clearInterval(uploadInterval.current) // Clear the interval
        uploadInterval.current = null // Reset ref to null
    }

    useEffect(() => {
        if (loading) {
            handleUploadStarted()
        } else {
            stopUpload()
        }

        // Clear the interval on component unmount
        return () => clearInterval(uploadInterval.current)
    }, [loading])

    return (
        <div className="translate-x-[38px] cursor-pointer -translate-y-8 tablet:-translate-y-5">
            <div
                onClick={() => fileRef.current.click()}
                className="relative w-[92px] h-[92px] bg-white rounded-full flex items-center justify-center">
                {/* Show the loading progress ring */}
                {loading && (
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: `conic-gradient(#4CAF50 ${progress * 3.6
                                }deg, white 0deg)`,
                        }}
                    />
                )}

                {/* Profile image */}
                <div className="relative w-[70px] h-[70px] bg-white rounded-full overflow-hidden">
                    <div
                        style={{
                            backgroundImage: `url(${url || '/images/user-layout/profile/avatar.svg'
                                })`,
                        }}
                        className="w-full h-full bg-no-repeat overflow-hidden rounded-full bg-cover bg-center">
                        <div className="w-full h-full scale-[1.1] bg-[#000000A3] flex items-end">
                            <Image
                                src={Upload}
                                alt=""
                                className="w-full h-full translate-y-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Progress percentage display */}
                {loading && (
                    <div className="absolute flex items-center justify-center bottom-[-5px] bg-[#4CAF50] text-white text-[7.3px] w-8 h-5 rounded-[19.48px]">
                        {progress}%
                    </div>
                )}
            </div>

            <input
                accept="image/jpeg,image/png"
                onChange={handleFileChange}
                ref={fileRef}
                type="file"
                className="hidden"
            />
        </div>
    )
}
