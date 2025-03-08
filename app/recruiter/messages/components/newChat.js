import { useUserProfile } from '@/hooks/user'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import SearchBar from '../../../job-seeker/components/searchbar'
import { useRouter } from 'next/navigation'

export default function NewChat({ visible, setVisible }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const [allUsers, setAllUsers] = useState([])
    const { searchUsers, getUsers } = useUserProfile()
    const router = useRouter()

    useEffect(() => {
        if (!searchQuery) {
            getUsers({
                setUser: v => {
                    setUsers(v)
                    setAllUsers(v)
                },
                setLoading,
                url: '/users',
            })
        }
    }, [visible])

    useEffect(() => {
        if (searchQuery.trim().length <= 2) {
            setUsers(allUsers)
            return
        }

        const delayDebounceFn = setTimeout(() => {
            searchUsers({
                setLoading,
                setUser: setUsers,
                url: `/users/find?search=${searchQuery}`,
            })
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchQuery])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ top: '110%' }}
                    animate={{ top: '0px' }}
                    exit={{ top: '110%' }}
                    className="absolute bg-white w-full h-full top-0 left-0">
                    <div className="h-full">
                        <div className="flex justify-between items-center text-lg font-semibold py-4 px-6 mb-4 border-b border-gray-100">
                            <button
                                onClick={() => setVisible(false)}
                                className="mr-1 text-gray-500 hover:text-gray-700">
                                <MdArrowBackIos />
                            </button>
                            <div className="w-full h-12">
                                <SearchBar
                                    value={searchQuery}
                                    placeholder="Search user by name"
                                    setValue={setSearchQuery}
                                />
                            </div>
                        </div>
                        {loading ? (
                            <div className="w-full h-[calc(100%-130px)] flex justify-center items-center">
                                <div className="lds-ring">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        ) : (
                            <div className="pb-4 pt-0 px-2 w-full scroll-hidden h-[calc(100%-130px)] overflow-y-auto">
                                <ul className=" space-y-4 h-max">
                                    {users.map(user => (
                                        <>
                                            <li
                                                onClick={() =>
                                                    router.push(
                                                        `/recruiter/messages/${user?.uuid}?start=true`,
                                                    )
                                                }
                                                key={user.uuid}
                                                className="flex items-center hover:bg-gray-50 px-3 cursor-pointer  text-gray-700">
                                                <img
                                                    src={
                                                        user?.user_profile
                                                            ?.avatar ??
                                                        '/images/profile_avatar.jpg'
                                                    }
                                                    alt="User Image"
                                                    className="w-10 h-10 rounded-full mr-3"
                                                    onError={e =>
                                                        (e.target.src =
                                                            '/images/profile_avatar.jpg')
                                                    }
                                                />
                                                <div className="h-[70px] flex items-center border-b border-gray-100 w-full">
                                                    <p className="text-sm font-semibold">
                                                        {
                                                            user?.user_profile
                                                                ?.first_name
                                                        }{' '}
                                                        {
                                                            user?.user_profile
                                                                ?.last_name
                                                        }
                                                    </p>
                                                </div>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
