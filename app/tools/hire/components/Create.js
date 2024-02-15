'use client'
import { useEffect, useState } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import Image from 'next/image'
import Curve from '@/public/images/curve.png'
import Tiptap from '@/app/components/utilities/Tiptap'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import DashboardLoader from '@/app/components/DashboardLoader'

export default function Create() {
    const [user, setUser] = useState(null)
    const [urlType, setUrlType] = useState('External')
    const [applicantLocationType, setApplicantLocationType] = useState('State')
    const [applicantLocationName, setApplicantLocationName] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/store'

    useEffect(() => {
        let storedData = JSON.parse(
            window.localStorage.getItem('analogueshifts'),
        )
        if (storedData) {
            setUser(storedData)
        }
    }, [])

    const [data, setData] = useState({
        title: '',
        description: '',
        identifier: {
            '@type': 'PropertyValue',
            name: '',
            value: '',
        },
        datePosted: new Date().toISOString(),
        validThrough: '',
        employmentType: 'CONTRACTOR',
        hiringOrganization: {
            '@type': 'Organization',
            name: '',
            sameAs: '',
            logo: '',
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '',
                addressLocality: '',
                addressRegion: '',
                postalCode: '',
                addressCountry: '',
            },
        },
        jobLocationType: '',
        applicantLocationRequirements: [],
        baseSalary: {
            '@type': 'MonetaryAmount',
            currency: '',
            value: {
                '@type': 'QuantitativeValue',
                value: 0,
                unitText: 'HOUR',
            },
        },
        apply: '',
    })

    const submit = e => {
        e.preventDefault()
        const axios = require('axios')
        let config = {
            method: 'POST',
            maxBodyLength: Infinity,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + user.token,
            },
            body: JSON.stringify(data),
        }
        setLoading(true)
        fetch(url, config)
            .then(response => {
                setLoading(false)
                if (response.ok) {
                    toast.success('Your Hire Request Has Been Sent', {
                        position: 'top-right',
                        autoClose: 3000,
                    })
                    router.push('/tools/hire')
                }
            })
            .catch(error => {
                console.log(error)
                toast.error(error, {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
    }

    const addApplicantLocation = (type, name) => {
        let checker = true
        data.applicantLocationRequirements.forEach(item => {
            if (item['@type'] === type && item.name === name) {
                checker = false
            }
        })
        if (checker) {
            setData(prev => ({
                ...prev,
                applicantLocationRequirements: [
                    ...prev.applicantLocationRequirements,
                    { '@type': type, name: name },
                ],
            }))
            setApplicantLocationName('')
            setApplicantLocationType('State')
        } else {
            setApplicantLocationName('')
            setApplicantLocationType('State')
            toast.error('Location Already Exist', {
                position: 'top-right',
                autoClose: 3000,
            })
        }
    }
    const deleteApplicantLocation = (type, name) => {
        setData(prev => ({
            ...prev,
            applicantLocationRequirements: prev.applicantLocationRequirements.filter(
                item => item.name !== name,
            ),
        }))
    }

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Hire Talents
                </h2>
            }>
            {loading && <DashboardLoader />}
            <div className="w-full min-w-[300px] min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-112px)]">
                <div className="w-full h-60 rounded-2xl bg-tremor-background-brown flex justify-end">
                    <Image src={Curve} alt="" />
                </div>
                <form
                    onSubmit={submit}
                    className="bg-white -translate-y-32 ml-5 h-max w-[calc(100%-40px)] px-2.5 lg:px-5 pt-3 pb-3 rounded-xl flex flex-col gap-3">
                    <div className="w-full  p-3 relative">
                        <div className="flex flex-col  gap-5">
                            <label className="block mb-3 text-sm font-medium text-gray-900">
                                Hire Details -Required (*)
                            </label>

                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Title*
                                </label>
                                <input
                                    type="text"
                                    value={data.role}
                                    onChange={e =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                title: e.target.value,
                                            }
                                        })
                                    }
                                    className="w-full py-3 text-black/70 px-5 border border-l-4 border-as outline-none"
                                    placeholder="Full-Stack Web Developer"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Identifier Name*
                                </label>
                                <input
                                    type="text"
                                    value={data.identifier.name}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            identifier: {
                                                ...prev.identifier,
                                                name: e.target.value,
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    placeholder="Google"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Identifier Value*
                                </label>
                                <input
                                    type="text"
                                    value={data.identifier.value}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            identifier: {
                                                ...prev.identifier,
                                                value: e.target.value,
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    placeholder="123456"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Hiring Organization Name*
                                </label>
                                <input
                                    type="text"
                                    value={data.hiringOrganization.name}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            hiringOrganization: {
                                                ...prev.hiringOrganization,
                                                name: e.target.value,
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    placeholder="Google"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Organization Website
                                </label>
                                <input
                                    type="url"
                                    value={data.hiringOrganization.sameAs}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            hiringOrganization: {
                                                ...prev.hiringOrganization,
                                                sameAs: e.target.value,
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    placeholder="https://www.google.com"
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Organization Logo
                                </label>
                                <input
                                    type="url"
                                    value={data.hiringOrganization.logo}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            hiringOrganization: {
                                                ...prev.hiringOrganization,
                                                logo: e.target.value,
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    placeholder="https://www.example.com/images/logo"
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Job Location Type
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.jobLocationType}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            jobLocationType: e.target.value,
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    placeholder="TELECOMMUTE"
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Valid Through*
                                </label>
                                <input
                                    type="date"
                                    value={data.validThrough}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            validThrough: e.target.value,
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Employment Type*
                                </label>
                                <select
                                    value={data.employmentType}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            employmentType: e.target.value,
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    required>
                                    <option value="FULL_TIME">FULL_TIME</option>
                                    <option value="PART_TIME">PART_TIME</option>
                                    <option value="CONTRACTOR">
                                        CONTRACTOR
                                    </option>
                                    <option value="TEMPORARY">TEMPORARY</option>
                                    <option value="INTERN">INTERN</option>
                                    <option value="VOLUNTEER">VOLUNTEER</option>
                                    <option value="PER_DIEM">PER_DIEM</option>
                                    <option value="OTHER">OTHER</option>
                                </select>
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Salary Currency*
                                </label>
                                <input
                                    type="text"
                                    value={data.baseSalary.currency}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            baseSalary: {
                                                ...prev.baseSalary,
                                                currency: e.target.value,
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    placeholder="USD"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Salary Value*
                                </label>
                                <input
                                    type="number"
                                    min={0}
                                    value={data.baseSalary.value.value}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            baseSalary: {
                                                ...prev.baseSalary,
                                                value: {
                                                    ...prev.baseSalary.value,
                                                    value: e.target.value,
                                                },
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Unit Text*
                                </label>
                                <select
                                    value={data.baseSalary.value.unitText}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            baseSalary: {
                                                ...prev.baseSalary,
                                                value: {
                                                    ...prev.baseSalary.value,
                                                    unitText: e.target.value,
                                                },
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    required>
                                    <option value="HOUR">HOUR</option>
                                    <option value="DAY">DAY</option>
                                    <option value="WEEK">WEEK</option>
                                    <option value="MONTH">MONTH</option>
                                    <option value="YEAR">YEAR</option>
                                </select>
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Job Location*
                                </label>
                                <select
                                    value={data.jobLocation['@type']}
                                    onChange={e =>
                                        setData(prev => ({
                                            ...prev,
                                            jobLocation: {
                                                ...prev.jobLocation,
                                                '@type': e.target.value,
                                            },
                                        }))
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                    required>
                                    <option value="Place">Place</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>
                            {data.jobLocation['@type'] === 'Place' && (
                                <>
                                    <div className="mb-1 ">
                                        <label className="block text-sm font-medium text-gray-900">
                                            Address Type*
                                        </label>
                                        <select
                                            value={
                                                data.jobLocation.address[
                                                    '@type'
                                                ]
                                            }
                                            onChange={e =>
                                                setData(prev => ({
                                                    ...prev,
                                                    jobLocation: {
                                                        ...prev.jobLocation,
                                                        address: {
                                                            ...prev.jobLocation
                                                                .address,
                                                            '@type':
                                                                e.target.value,
                                                        },
                                                    },
                                                }))
                                            }
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                            required>
                                            <option value="Postal Address">
                                                Postal Address
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-1 ">
                                        <label className="block text-sm font-medium text-gray-900">
                                            Street Address*
                                        </label>
                                        <input
                                            type="text"
                                            value={
                                                data.jobLocation.address
                                                    .streetAddress
                                            }
                                            onChange={e =>
                                                setData(prev => ({
                                                    ...prev,
                                                    jobLocation: {
                                                        ...prev.jobLocation,
                                                        address: {
                                                            ...prev.jobLocation
                                                                .address,
                                                            streetAddress:
                                                                e.target.value,
                                                        },
                                                    },
                                                }))
                                            }
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                            placeholder="555 Clancy St"
                                            required
                                        />
                                    </div>
                                    <div className="mb-1 ">
                                        <label className="block text-sm font-medium text-gray-900">
                                            Address Locality*
                                        </label>
                                        <input
                                            type="text"
                                            value={
                                                data.jobLocation.address
                                                    .addressLocality
                                            }
                                            onChange={e =>
                                                setData(prev => ({
                                                    ...prev,
                                                    jobLocation: {
                                                        ...prev.jobLocation,
                                                        address: {
                                                            ...prev.jobLocation
                                                                .address,
                                                            addressLocality:
                                                                e.target.value,
                                                        },
                                                    },
                                                }))
                                            }
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                            placeholder="Detroit"
                                            required
                                        />
                                    </div>
                                    <div className="mb-1 ">
                                        <label className="block text-sm font-medium text-gray-900">
                                            Address Region*
                                        </label>
                                        <input
                                            type="text"
                                            value={
                                                data.jobLocation.address
                                                    .addressRegion
                                            }
                                            onChange={e =>
                                                setData(prev => ({
                                                    ...prev,
                                                    jobLocation: {
                                                        ...prev.jobLocation,
                                                        address: {
                                                            ...prev.jobLocation
                                                                .address,
                                                            addressRegion:
                                                                e.target.value,
                                                        },
                                                    },
                                                }))
                                            }
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                            placeholder="MI"
                                            required
                                        />
                                    </div>
                                    <div className="mb-1 ">
                                        <label className="block text-sm font-medium text-gray-900">
                                            Postal Code*
                                        </label>
                                        <input
                                            type="text"
                                            value={
                                                data.jobLocation.address
                                                    .postalCode
                                            }
                                            onChange={e =>
                                                setData(prev => ({
                                                    ...prev,
                                                    jobLocation: {
                                                        ...prev.jobLocation,
                                                        address: {
                                                            ...prev.jobLocation
                                                                .address,
                                                            postalCode:
                                                                e.target.value,
                                                        },
                                                    },
                                                }))
                                            }
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                            placeholder="48201"
                                            required
                                        />
                                    </div>
                                    <div className="mb-1 ">
                                        <label className="block text-sm font-medium text-gray-900">
                                            Address Country*
                                        </label>
                                        <input
                                            type="text"
                                            value={
                                                data.jobLocation.address
                                                    .addressCountry
                                            }
                                            onChange={e =>
                                                setData(prev => ({
                                                    ...prev,
                                                    jobLocation: {
                                                        ...prev.jobLocation,
                                                        address: {
                                                            ...prev.jobLocation
                                                                .address,
                                                            addressCountry:
                                                                e.target.value,
                                                        },
                                                    },
                                                }))
                                            }
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                            placeholder="US"
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            <div className="w-full flex flex-col gap-5">
                                <p className="block text-base font-medium text-gray-900">
                                    Applicant Location Requirements
                                </p>

                                <div className="mb-1">
                                    <label className="block text-sm pb-1 font-medium text-gray-900">
                                        Add A Requirement
                                    </label>
                                    <div className="w-full flex flex-col gap-3">
                                        <select
                                            value={applicantLocationType}
                                            onChange={e =>
                                                setApplicantLocationType(
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70">
                                            <option value="State">State</option>
                                            <option value="Country">
                                                Country
                                            </option>
                                        </select>
                                        <input
                                            type="text"
                                            value={applicantLocationName}
                                            onChange={e => {
                                                setApplicantLocationName(
                                                    e.target.value,
                                                )
                                            }}
                                            placeholder="Name"
                                            className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                        />

                                        {data
                                            .applicantLocationRequirements[0] &&
                                            data.applicantLocationRequirements.map(
                                                item => {
                                                    return (
                                                        <div
                                                            key={
                                                                item.name +
                                                                item['@type']
                                                            }
                                                            className="w-full flex justify-between gap-5 flex-wrap gap-y-3 items-center">
                                                            <p className=" text-sm font-medium text-gray-900">
                                                                {item['@type']}{' '}
                                                                - {item.name}
                                                            </p>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    deleteApplicantLocation(
                                                                        item[
                                                                            '@type'
                                                                        ],
                                                                        item.name,
                                                                    )
                                                                }
                                                                className="text-white w-max bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                                <i className="fas fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    )
                                                },
                                            )}
                                        {applicantLocationName.length > 0 && (
                                            <button
                                                onClick={() =>
                                                    addApplicantLocation(
                                                        applicantLocationType,
                                                        applicantLocationName,
                                                    )
                                                }
                                                type="button"
                                                className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center gap-2 w-max text-center">
                                                Add Requirement{' '}
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-5">
                                <p className="block text-base font-medium text-gray-900">
                                    Application URL
                                </p>

                                <div className="mb-1">
                                    <div className="w-full flex flex-col gap-1.5">
                                        <div
                                            onClick={() =>
                                                setUrlType('External')
                                            }
                                            className="w-max cursor-pointer gap-2 flex items-center">
                                            <input
                                                type="radio"
                                                name="url-type"
                                                value={'External'}
                                                onChange={e =>
                                                    setUrlType(e.target.value)
                                                }
                                                checked={urlType === 'External'}
                                            />{' '}
                                            <label className="text-xs font-medium text-gray-900">
                                                External URL
                                            </label>
                                        </div>
                                        <div
                                            onClick={() =>
                                                setUrlType('Internal')
                                            }
                                            className="w-max cursor-pointer gap-2 flex items-center">
                                            <input
                                                type="radio"
                                                name="url-type"
                                                value={'Internal'}
                                                onChange={e =>
                                                    setUrlType(e.target.value)
                                                }
                                                checked={urlType === 'Internal'}
                                            />{' '}
                                            <label className="text-xs font-medium text-gray-900">
                                                Internal URL
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-3 pt-1.5">
                                        {urlType === 'External' ? (
                                            <input
                                                type="url"
                                                value={data.apply}
                                                onChange={e =>
                                                    setData(prev => ({
                                                        ...prev,
                                                        apply: e.target.value,
                                                    }))
                                                }
                                                className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                                placeholder="https://www.analogueshifts.com/jobs"
                                                required
                                            />
                                        ) : (
                                            <select
                                                value={data.apply}
                                                onChange={e =>
                                                    setData(prev => ({
                                                        ...prev,
                                                        apply: e.target.value,
                                                    }))
                                                }
                                                className="w-full py-3 px-5 border border-l-4 border-as outline-none text-black/70"
                                                required>
                                                <option>Select URL</option>
                                            </select>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Application/applicationting URL*
                                </label>
                                <input
                                    type="url"
                                    value={data.application}
                                    onChange={e =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                application: e.target.value,
                                            }
                                        })
                                    }
                                    className="w-full py-3 border px-5 border-l-4 border-as outline-none"
                                    placeholder="https://analogueshifts.com/application/url"
                                    required
                                />
                            </div> */}
                            <div className=" ">
                                <label className="block mb-1 text-sm font-medium text-gray-900">
                                    Description*
                                </label>
                                <Tiptap
                                    changed={data =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                description: data,
                                            }
                                        })
                                    }
                                    initialData={data.description}
                                />
                            </div>
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    name="send"
                                    className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Authenticated>
    )
}
