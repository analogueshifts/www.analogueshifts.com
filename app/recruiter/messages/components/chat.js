'use client'
import { useChat } from '@/hooks/chat'
import { useState, useEffect } from 'react'
import { MdArrowBackIos, MdSend } from 'react-icons/md'

export default function Chat({
    user,
    selectedChat,
    setSelectedChat,
    setSelectedTab,
}) {
    const [chat, setChat] = useState(selectedChat?.members[0])
    const [messages, setMessages] = useState(selectedChat?.messages || [])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const { getChat, createChat } = useChat()

    useEffect(() => {
        getChat({
            setChat,
            setLoading,
            setMessages,
            url: `/chat/${selectedChat.uuid}`,
        })
    }, [])

    const handleSendMessage = async () => {
        if (!message.trim()) return
        setLoading(true)

        const newMessage = {
            uuid: crypto.randomUUID(),
            user_uuid: user.uuid,
            message,
        }

        setMessages(prev => [...prev, newMessage])

        createChat({
            url: `chat/${chat.user_uuid}`,
            data: { message },
            setSelectedTab: setLoading,
            setLoading,
            setMessage,
        })
    }

    const backButton = () => {
        setSelectedChat(null)
        setSelectedTab('chats')
    }

    return (
        <div>
            <div>
                {/* Chat Header */}
                <div className="flex items-center p-4 border-b border-gray-100">
                    <button
                        onClick={() => backButton}
                        className="mr-4 text-gray-500 hover:text-yellow-500">
                        <MdArrowBackIos />
                    </button>
                    <img
                        src={
                            chat?.user?.user_profile?.avatar ??
                            '/images/profile_avatar.jpg'
                        }
                        alt={chat?.user?.first_name}
                        className="w-10 h-10 rounded-full mr-3"
                        onError={e =>
                            (e.target.src = '/images/profile_avatar.jpg')
                        }
                    />
                    <div>
                        <p className="text-sm font-semibold">
                            {chat?.user?.user_profile?.first_name}{' '}
                            {chat?.user?.user_profile?.last_name}
                        </p>
                        <p className="text-xs text-gray-400">
                            {chat?.user?.email}
                        </p>
                    </div>
                </div>

                {/* Messages List */}
                <div className="flex flex-col p-4 space-y-4 overflow-y-auto h-[500px] md:h-[330px] scroll">
                    {messages.map((msg, index) => (
                        <div
                            key={msg.uuid || index}
                            className={`py-2 px-4 rounded-lg ${
                                msg.user_uuid === user.uuid
                                    ? 'self-end bg-yellow-500 text-white'
                                    : 'self-start bg-gray-100 text-gray-600'
                            }`}>
                            {msg.message}
                        </div>
                    ))}
                </div>

                {/* Message Input */}
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
        </div>
    )
}
