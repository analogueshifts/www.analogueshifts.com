'use client'
import { useState } from 'react'
import Authenticated from '@/app/Layouts/AuthenticatedLayout'
import Image from 'next/image'
import Curve from '@/public/images/curve.png'
import Editor from '@/app/components/utilities/Editor'

export default function Create() {
    const [user, setUser] = useState(null)
    const [data, setData] = useState({
        display: '1',
        application: '',
        role: '',
        hire_type: '',
        range: '',
        experience: '',
        duration: '',
        description: '',
    })
    const [errors, setErrors] = useState({
        description: null,
    })

    const submit = e => {
        e.preventDefault()
        if (data.description.trim().length <= 0) {
            setErrors(prev => {
                return { ...prev, description: 'Job Description Is Needed' }
            })
        } else {
            setErrors(prev => {
                return { ...prev, description: null }
            })
        }
    }

    return (
        <Authenticated
            user={user}
            header={
                <h2 className="font-semibold text-lg text-gray-500 leading-tight">
                    Hire Talents
                </h2>
            }>
            <div className="w-full min-w-[300px] min-h-[calc(100dvh-128px)]">
                <div className="w-full h-60 rounded-2xl bg-tremor-background-brown flex justify-end">
                    <Image src={Curve} alt="" />
                </div>
                <form
                    onSubmit={submit}
                    className="bg-white -translate-y-12 ml-5 h-max w-[calc(100%-40px)] px-5 pt-3 pb-5 rounded-xl flex flex-col gap-3">
                    <div className="flex justify-between py-3">
                        <select
                            className="outline-none border border-tremor-content-grayText/70 text-tremor-content-grayText pl-2 cursor-pointer"
                            value={data.display}
                            onChange={e =>
                                setData(prev => {
                                    return { ...prev, display: e.target.value }
                                })
                            }>
                            <option value="1">Live</option>
                            <option value="0">Offline</option>
                        </select>

                        <button
                            type="submit"
                            name="send"
                            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Save
                        </button>
                    </div>
                    <div className="w-full  p-3 relative">
                        <div className="flex flex-col  gap-5">
                            <label className="block mb-3 text-sm font-medium text-gray-900">
                                Hire Details -Required (*)
                            </label>

                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Role*
                                </label>
                                <input
                                    type="text"
                                    value={data.role}
                                    onChange={e =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                role: e.target.value,
                                            }
                                        })
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none"
                                    placeholder="Full-Stack Web Developer"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Type*
                                </label>
                                <input
                                    type="text"
                                    value={data.hire_type}
                                    onChange={e =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                hire_type: e.target.value,
                                            }
                                        })
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none"
                                    placeholder="Remote or Job Location"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Salary Range*
                                </label>
                                <input
                                    type="text"
                                    value={data.range}
                                    onChange={e =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                range: e.target.value,
                                            }
                                        })
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none"
                                    placeholder="$100K"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Experience*
                                </label>
                                <input
                                    type="text"
                                    value={data.experience}
                                    onChange={e =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                experience: e.target.value,
                                            }
                                        })
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none"
                                    placeholder="5 Years"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
                                <label className="block text-sm font-medium text-gray-900">
                                    Job Duration*
                                </label>
                                <input
                                    type="text"
                                    value={data.duration}
                                    onChange={e =>
                                        setData(prev => {
                                            return {
                                                ...prev,
                                                duration: e.target.value,
                                            }
                                        })
                                    }
                                    className="w-full py-3 px-5 border border-l-4 border-as outline-none"
                                    placeholder="9 Months"
                                    required
                                />
                            </div>
                            <div className="mb-1 ">
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
                            </div>
                            <div className="mb-6 ">
                                {errors.description && (
                                    <p className="text-red-500">
                                        {errors.description}
                                    </p>
                                )}
                                <label className="block mb-1 text-sm font-medium text-gray-900">
                                    Description*
                                </label>
                                <Editor data={data} setData={setData} />
                                {/* <textarea
                                name="decription"
                                id="message"
                                value={data.description}
                                onChange={(e) =>
                                    setData(
                                        "description",
                                        e.target.value
                                    )
                                }
                                rows="4"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="Describe skill requirements..."
                            ></textarea> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Authenticated>
    )
}
