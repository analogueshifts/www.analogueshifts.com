'use client'
import { useState } from 'react'
import InputGroup from '../../profile/edit/components/input-group'
import Spinner from '@/public/images/spinner-white.svg'
import Image from 'next/image'

export default function ChangePasswordForm() {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <form className="w-full flex tablet:gap-5 tablet:flex-col gap-108 tablet:pt-5 pt-10">
            <div className="w-max max-w-[40%] tablet:max-w-full h-max flex flex-col">
                <h2 className="text-tremor-brand-boulder950 font-bold text-base tablet:mb-3 tablet:text-sm mb-5">
                    Change Password
                </h2>
                <p className="text-sm tablet:leading-5 tablet:text-xs font-normal text-tremor-brand-boulder600 max-w-full w-259 leading-8">
                    Manage your personal information and update your account
                    details.
                </p>
            </div>
            <div className="w-484 tablet:gap-4 tablet:max-w-full tablet:w-full max-w-[60%] flex flex-col gap-8">
                <InputGroup
                    label="Current Password"
                    placeholder="Enter Current Password"
                    required={true}
                    setValue={setCurrentPassword}
                    type="password"
                    value={currentPassword}
                />
                <InputGroup
                    label="New Password"
                    placeholder="Enter New Password"
                    required={true}
                    setValue={setNewPassword}
                    type="password"
                    value={newPassword}
                />
                <InputGroup
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                    required={true}
                    setValue={setConfirmPassword}
                    type="password"
                    value={confirmPassword}
                />
                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-tremor-background-darkYellow h-10 rounded-xl text-xs font-semibold text-tremor-brand-boulder50 px-9">
                        {loading ? (
                            <Image className="w-max h-7" src={Spinner} alt="" />
                        ) : (
                            'Save'
                        )}
                    </button>
                </div>
            </div>
        </form>
    )
}
