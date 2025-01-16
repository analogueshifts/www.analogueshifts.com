import { useUser } from '@/hooks/user'
import { useChat } from '@/hooks/chat'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdSend } from 'react-icons/md'

export default function NewChat({ setSelectedTab }) {
    const [selectedUser, setSelectedUser] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [users, setUsers] = useState([])
    const { searchUsers, getUsers } = useUser()
    const { createChat } = useChat()

    useEffect(() => {
        getUsers({
            setUser: setUsers,
            setLoading,
            url: '/users',
        })
    }, [])

    useEffect(() => {
        if (searchQuery.trim().length < 3) {
            setUsers([])
            return
        }

        const delayDebounceFn = setTimeout(() => {
            searchUsers({
                setLoading,
                setUser: setUsers,
                url: `/users/find?search=${searchQuery}`,
            })
        }, 3000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchQuery])

    const handleSendMessage = async () => {
        if (!message.trim()) return
        setLoading(true)
        createChat({
            url: `chat/${selectedUser.uuid}`,
            data: { message },
            setSelectedTab,
            setLoading,
            setMessage,
        })
    }

    return (
        <div>
            {!selectedUser ? (
                <div>
                    <div className="flex justify-between items-center text-lg font-semibold p-4 mb-4 border-b border-gray-100">
                        <button
                            onClick={() => setSelectedTab('chats')}
                            className="mr-4 text-gray-500 hover:text-yellow-500">
                            <MdArrowBackIos />
                        </button>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search by name..."
                            className="w-full p-2 border border-gray-300 outline-none rounded-lg"
                        />
                    </div>
                    <ul className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
                        {users.map(user => (
                            <li
                                key={user.uuid}
                                onClick={() => setSelectedUser(user)}
                                className="p-2 border rounded-lg cursor-pointer hover:bg-yellow-100">
                                <p className="font-normal">
                                    {user?.user_profile?.first_name}{' '}
                                    {user?.user_profile?.last_name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {user.email}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <div className="flex items-center text-lg font-semibold p-4 mb-4 border-b border-gray-100">
                        <button
                            onClick={() => setSelectedUser(null)}
                            className="mr-4 text-gray-500 hover:text-yellow-500">
                            <MdArrowBackIos />
                        </button>
                        <h2>Send message to {selectedUser.username}</h2>
                    </div>
                    <div className="flex items-center p-4">
                        <input
                            type="text"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            disabled={loading}
                            placeholder="Type your message..."
                            className="flex-grow bg-gray-100 text-gray-700 rounded-lg py-2 px-4 focus:outline-none"
                        />
                        <button
                            disabled={loading || !message.trim()}
                            onClick={handleSendMessage}
                            className={`flex h-full ml-3 px-4 py-2 rounded-lg ${
                                loading
                                    ? 'bg-gray-300'
                                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                            }`}>
                            <MdSend />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
