'use client'
import { useState, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useAuth } from '@/hooks/auth'
import skills from '../resources/skills.json'
import yearsOfExperience from '../resources/years-of-experience.json'
import levelOfExperience from '../resources/level-of-experience.json'
import Spinner from '@/public/images/spinner-white.svg'
import Image from 'next/image'
import { useToast } from '@/contexts/toast'

import Cookies from 'js-cookie'
import InputGroup from './input-group'
import ActionList from './action-list'
import Dropdown from './dropdown'
import Tiptap from './tiptap'
import ResumeList from './resume-list'
import UploadResume from './upload-resume'
import ExperienceList from './experience-list'

export default function EditProfileForm() {
    const { user } = useUser()
    const { getKycDetails, updateProfile, getUser } = useAuth()
    const [profileDetails, setProfileDetails] = useState(null)
    const [kycDetails, setKycDetails] = useState(null)
    const [skillTracker, setSkillTracker] = useState('')
    const [initialKycInfo, setInitialKycInfo] = useState(null)
    const [loading, setLoading] = useState(false)
    const [socials, setSocials] = useState(null)
    const { notifyUser } = useToast()

    const token = Cookies.get('analogueshifts')

    const updateProfileDetails = (label, newValue) =>
        setProfileDetails(prev => {
            return { ...prev, [label]: newValue }
        })

    const updateKycDetails = (label, newValue) =>
        setKycDetails(prev => {
            return { ...prev, [label]: newValue }
        })

    const updateSocials = (label, newValue) =>
        setSocials(prev => {
            return { ...prev, [label]: newValue }
        })

    useEffect(() => {
        if (skillTracker !== '' && !kycDetails.skills?.includes(skillTracker)) {
            if (kycDetails?.skills?.length >= 12) {
                notifyUser(
                    'error',
                    'You can select a maximum of 12 skills',
                    'right',
                )
            } else {
                setKycDetails(prev => {
                    return { ...prev, skills: [...prev.skills, skillTracker] }
                })
            }
        }
    }, [skillTracker])

    useEffect(() => {
        if (user) {
            setProfileDetails({
                username: user?.username || '',
                first_name: user?.user_profile?.first_name || '',
                profile: user?.user_profile?.avatar || '',
                biography: user?.user_profile?.biography || '',
                last_name: user?.user_profile?.last_name || '',
            })
            setKycDetails({
                headline: user?.user_job_profile?.headline || '',
                skills: [],
                yearsOfExperience:
                    user?.user_job_profile?.years_of_experience || '',
                levelOfExperience:
                    user?.user_job_profile?.experience_level || '',
                website: user?.user_job_profile?.website || '',
                resumes: user?.user_job_profile?.resume_cv || [],
                experience: user?.user_job_profile?.experience || [
                    {
                        id: 'experienceOne',
                        role: '',
                        company: '',
                        startDate: '',
                        endDate: '',
                        description: '',
                    },
                ],
            })
            setSocials({
                behance: user?.user_job_profile?.socials?.behance || '',
                dribble: user?.user_job_profile?.socials?.dribble || '',
                linkedin: user?.user_job_profile?.socials?.linkedin || '',
                tiktok: user?.user_job_profile?.socials?.tiktok || '',
            })
        }
    }, [user])

    useEffect(() => {
        if (token) {
            getKycDetails({ setLoading: v => {}, setData: setInitialKycInfo })
        }
    }, [token])

    useEffect(() => {
        setKycDetails(prev => {
            return { ...prev, skills: initialKycInfo?.preferences || [] }
        })
    }, [initialKycInfo])

    const handleSubmit = async e => {
        e.preventDefault()
        const kycInfo = {
            headline: kycDetails.headline,
            preference: kycDetails.skills.join(', '),
            years_of_experience: kycDetails.yearsOfExperience,
            experience_level: kycDetails.levelOfExperience,
            website: kycDetails.website,
            resume_cv: kycDetails.resumes,
            experience: kycDetails.experience,
            socials: socials,
        }
        const profileInfo = {
            ...profileDetails,
            profile: Cookies.get('ProfileAvatar') || profileDetails.profile,
        }

        try {
            setLoading(true)
            await updateProfile({ data: kycInfo, url: '/update/kyc' })
            await updateProfile({ data: profileInfo, url: '/update/profile' })
            notifyUser('success', 'Profile and Kyc Info Updated', 'right')
            setLoading(false)
            await getUser({ setLoading: v => {}, layout: 'authenticated' })
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col">
            <div className="w-full mb-7">
                <InputGroup
                    label="First Name"
                    placeholder="Enter your first name"
                    value={profileDetails?.first_name || ''}
                    required={true}
                    setValue={value =>
                        updateProfileDetails('first_name', value)
                    }
                    type="text"
                />
            </div>
            <div className="w-full mb-5 large:mb-7">
                <InputGroup
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={profileDetails?.last_name || ''}
                    setValue={value => updateProfileDetails('last_name', value)}
                    type="text"
                />
            </div>
            <div className="w-full mb-5 large:mb-7">
                <InputGroup
                    label="User Name"
                    placeholder="Enter your username"
                    value={profileDetails?.username || ''}
                    required={true}
                    setValue={value => updateProfileDetails('username', value)}
                    type="text"
                />
            </div>
            <div className="w-full mb-5 large:mb-7">
                <InputGroup
                    label="Headline"
                    placeholder="i.e Software Engineer"
                    value={kycDetails?.headline || ''}
                    required={true}
                    setValue={value => updateKycDetails('headline', value)}
                    type="text"
                />
            </div>
            <div className="w-full mb-5 large:mb-7 flex flex-col">
                <p className="text-sm tablet:text-xs tablet:mb-1.5 large:text-base text-tremor-brand-boulder950 font-medium mb-3">
                    Skills
                </p>
                <p className="text-xs text-tremor-brand-boulder500 font-normal tablet:text-[10px] tablet:mb-3 mb-[19px]">
                    Note: You can select max of 12
                </p>
                {kycDetails?.skills?.length > 0 && (
                    <ActionList
                        list={kycDetails.skills}
                        setList={list => updateKycDetails('skills', list)}
                    />
                )}
                <div className="w-full mt-5">
                    <Dropdown
                        list={skills}
                        placeholder="Select skills"
                        value={skillTracker}
                        setValue={setSkillTracker}
                    />
                </div>
            </div>
            <div className="w-full mb-5 large:mb-7 flex flex-col gap-2 large:gap-2.5">
                <p className="text-sm tablet:text-xs large:text-base text-tremor-brand-boulder950 font-medium">
                    Bio
                </p>
                <div className="w-full flex flex-col">
                    {profileDetails?.biography && (
                        <Tiptap
                            initialData={profileDetails?.biography}
                            changed={value => {
                                updateProfileDetails('biography', value)
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="w-full mb-5 large:mb-7 tablet:gap-1.5 flex flex-col gap-2 large:gap-2.5">
                <p className="text-sm tablet:text-xs large:text-base text-tremor-brand-boulder950 font-medium">
                    Years of Experience
                </p>

                <Dropdown
                    list={yearsOfExperience}
                    placeholder="Years of experience"
                    value={kycDetails?.yearsOfExperience || ''}
                    setValue={value =>
                        updateKycDetails('yearsOfExperience', value)
                    }
                />
            </div>
            <div className="w-full mb-5 tablet:gap-1.5 large:mb-7 flex flex-col gap-2 large:gap-2.5">
                <p className="text-sm tablet:text-xs large:text-base text-tremor-brand-boulder950 font-medium">
                    Level of Experience
                </p>

                <Dropdown
                    list={levelOfExperience}
                    placeholder="Level of experience"
                    value={kycDetails?.levelOfExperience || ''}
                    setValue={value =>
                        updateKycDetails('levelOfExperience', value)
                    }
                />
            </div>
            <div className="w-full mb-7">
                <InputGroup
                    label="Link (Visit Website or Portfolio)"
                    placeholder="Enter website"
                    value={kycDetails?.website || ''}
                    required={false}
                    setValue={value => updateKycDetails('website', value)}
                    type="text"
                />
            </div>
            <div className="w-full mb-5 large:mb-7 grid grid-cols-2 tablet:grid-cols-1 tablet:gap-2">
                <p className="text-sm col-span-1 tablet:text-xs pt-4 large:text-base text-tremor-brand-boulder950 font-medium">
                    Social Media Links:
                </p>
                <div className="grid-cols-1 flex flex-col gap-4">
                    <input
                        type="url"
                        placeholder="Behance"
                        value={socials?.behance}
                        onChange={e => updateSocials('bahance', e.target.value)}
                        className="w-full rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 large:text-base text-sm"
                    />
                    <input
                        type="url"
                        placeholder="Dribble"
                        value={socials?.dribble}
                        onChange={e => updateSocials('dribble', e.target.value)}
                        className="w-full rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 large:text-base text-sm"
                    />
                    <input
                        type="url"
                        placeholder="Linkedln"
                        value={socials?.linkedin}
                        onChange={e =>
                            updateSocials('linkedin', e.target.value)
                        }
                        className="w-full rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 large:text-base text-sm"
                    />
                    <input
                        type="url"
                        placeholder="Tiktok"
                        value={socials?.tiktok}
                        onChange={e => updateSocials('tiktok', e.target.value)}
                        className="w-full rounded-2xl border border-tremor-brand-boulder100 outline-none px-6 py-3.5 large:py-4 placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 large:text-base text-sm"
                    />
                </div>
            </div>
            <div className="w-full tablet:gap-4 mb-5 large:mb-6 flex flex-col gap-5 large:gap-6">
                <p className="text-sm tablet:text-xs large:text-base text-tremor-brand-boulder950 font-medium">
                    CV/Resume
                </p>
                <ResumeList
                    setResumes={data => updateKycDetails('resumes', data)}
                    resumes={kycDetails?.resumes || []}
                />
                <div className="w-full pt-5">
                    <UploadResume
                        addResume={data => updateKycDetails('resumes', data)}
                        resumes={kycDetails?.resumes || []}
                    />
                </div>
            </div>
            <div className="w-full  flex flex-col">
                <div className="large:pt-6 pt-5 flex w-full justify-between items-center">
                    {' '}
                    <p className="text-sm tablet:text-xs large:text-base text-tremor-brand-boulder950 font-medium">
                        Experience
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            updateKycDetails('experience', [
                                ...kycDetails?.experience,
                                {
                                    id: crypto.randomUUID(),
                                    role: '',
                                    startDate: '',
                                    endDate: '',
                                    description: '',
                                },
                            ])
                        }}
                        className="text-sm tablet:text-xs large:text-base text-tremor-background-darkYellow font-medium">
                        {kycDetails?.experience?.length > 0
                            ? 'Add Another'
                            : 'Add Experience'}
                    </button>
                </div>
                <ExperienceList
                    experience={kycDetails?.experience || []}
                    setExperience={data => updateKycDetails('experience', data)}
                />
            </div>
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
        </form>
    )
}
