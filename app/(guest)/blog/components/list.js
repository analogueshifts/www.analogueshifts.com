'use client'
import { useToast } from '@/contexts/toast'
import { useState, useEffect } from 'react'
import { axiosBlog } from '@/app/lib/axios'
import Image from 'next/image'
import A4 from '@/public/images/blogHero.jpg'
import SearchIcon from '@/public/images/search-icon.png'
import LoadingTwo from '@/components/ui/loading-spinner'
import MasonryGrid from './mansory-grid'
import Link from 'next/link'
// import { data } from 'autoprefixer'

export default function BlogList() {
    const [blogData, setBlogData] = useState([])
    const [searchFilter, setSearchFilter] = useState('')
    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState([])
    const [selectedNumber, setSelectedNumber] = useState(1)
    const [numbers, setNumbers] = useState([])

    const { notifyUser } = useToast()

    useEffect(() => {
        // Fetch job data from your API
        setLoading(true)
        axiosBlog
            .get('/posts')
            .then(res => {
                const data = res.data
                setBlogs(data)
                setLoading(false)
            })
            .catch(error => {
                notifyUser(
                    'error',
                    error?.response?.data?.message ||
                        error?.response?.data?.data?.message,
                )
                setLoading(false)
            })
    }, [])

    const handlePagination = () => {
        setNumbers([])
        let division = blogs.length / 6
        if (division.toString().length > 1) {
            for (let i = 1; i <= Math.floor(division) + 1; i++) {
                setNumbers(previous => [...previous, i])
            }
        } else {
            for (let i = 1; i <= division; i++) {
                setNumbers(previous => [...previous, i])
            }
        }
    }

    useEffect(() => {
        handlePagination()
    }, [blogs])

    useEffect(() => {
        if (blogs[0]) {
            setBlogData(
                blogs
                    .filter(data =>
                        data.title.rendered
                            .toLowerCase()
                            .includes(searchFilter.toLowerCase()),
                    )
                    .slice(0, 6 * selectedNumber),
            )
        }
    }, [blogs, selectedNumber, searchFilter])

    // console.log(blogData)

    // useEffect(() => {
    //     if (searchValue.length > 1) {
    //         setBlogData(
    //             blogData.filter(blog => {
    //                 return blog.title
    //                     .toLowerCase()
    //                     .includes(searchValue.toLowerCase())
    //             }),
    //         )
    //     } else {
    //         setBlogData(data)
    //     }
    // }, [searchValue])

    return (
        <>
            {loading && <LoadingTwo />}
            <div className="py-9">
                {/* <h1 id="title" className="font-bold text-2xl mb-9">
                    AnalogueShifts Blog
                </h1> */}
                <div className="bg-white border-0 shadow rounded-lg overflow-hidden">
                    <div className="grid lg:grid-cols-12">
                        <div className="grid lg:col-span-6 p-7 lg:p-14">
                            <div className="grid justify-center lg:justify-start gap-5 lg:col-span-6">
                                <h1
                                    id="title"
                                    className="text-3xl md:text-4xl font-bold lg:leading-[50px] tracking-normal">
                                    AnalogueShifts HelpFul Articles
                                </h1>
                                <h2 className="">
                                    Your Success in Recruitment and Technical
                                    Support is our Priority. Welcome to Analogue
                                    Shifts, where we blend the expertise of
                                    recruitment with the precision of technical
                                    support to deliver exceptional results for
                                    your business. We understand that finding
                                    top talent and providing reliable technical
                                    assistance are crucial to driving your
                                    company’s growth.
                                </h2>
                            </div>
                        </div>
                        <div className="grid lg:col-span-6">
                            <Image
                                className="object-cover h-full w-full"
                                src={A4}
                                alt="landing"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full relative h-12 flex items-center my-5">
                    <input
                        placeholder="Search Blog"
                        value={searchFilter}
                        onChange={e => setSearchFilter(e.target.value)}
                        className="w-full h-full border  rounded pl-3 pr-12 py-2 outline-none border-black/20"
                    />
                    <Image
                        className="absolute cursor-pointer top-3.5 right-3 w-5 h-5 mr-3 opacity-70"
                        src={SearchIcon}
                        alt="Search Icon"
                    />
                </div>
                <div className="pt-5 w-full flex justify-between flex-wrap gap-y-5">
                    {blogData && <MasonryGrid posts={blogData} />}
                </div>
                <div className="mt-10 w-full flex justify-between gap-x-5 gap-y-5 flex-wrap">
                    <div className="w-max gap-x-3.5 gap-y-3.5 flex flex-wrap">
                        {blogs[0] &&
                            numbers.map(num => {
                                return (
                                    <button
                                        key={num}
                                        onClick={() => setSelectedNumber(num)}
                                        className={`w-8 h-8 flex justify-center items-center font-medium text-base ${
                                            selectedNumber === num
                                                ? 'bg-as text-white'
                                                : 'bg-gray-200 text-black/80'
                                        }`}>
                                        {num}
                                    </button>
                                )
                            })}
                    </div>
                    <Link
                        href="https://blog.analogueshifts.com"
                        className="flex justify-center w-max items-center rounded px-5 gap-2 bg-as text-white py-2 text-base font-semibold">
                        View All Blog
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}
