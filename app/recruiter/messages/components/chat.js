'use client'
import { useUser } from '@/contexts/user'
import { useChat } from '@/hooks/chat'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Send, Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useUserProfile } from '@/hooks/user'

export default function Chat({ chatId }) {
    const [chat, setChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingChats, setLoadingChats] = useState(true)
    const [displayStatus, setDisplayStatus] = useState(false)
    const { getChat, createChat } = useChat()
    const { user } = useUser()
    const { getUser } = useUserProfile()
    const [newUser, setNewUser] = useState(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const isNewChat = searchParams.get('start')

    useEffect(() => {
        if (!isNewChat) {
            getChat({
                setChat,
                setLoading: setLoadingChats,
                setMessages,
                url: `/chat/${chatId}`,
            })
        } else {
            getUser({
                setUser: setNewUser,
                setLoading: setLoadingChats,
                url: `/users/${chatId}`,
            })
        }
    }, [isNewChat])

    useEffect(() => {
        if (messages[0]?.user_uuid === user?.uuid) {
            setDisplayStatus(true)
        } else {
            setDisplayStatus(false)
        }
    }, [messages])

    const handleSendMessage = async e => {
        e.preventDefault()
        if (!message.trim()) return
        setLoading(true)

        if (isNewChat) {
            createChat({
                url: `chat/${newUser.uuid}`,
                data: { message },
                setLoading,
                setMessage,
                addMessage: () => router.back(),
            })
            return
        }

        createChat({
            url: `chat/${chat.user_uuid}`,
            data: { message },
            setLoading,
            setMessage,
            addMessage: () =>
                setMessages(prev => [
                    {
                        uuid: crypto.randomUUID(),
                        user_uuid: user.uuid,
                        status: 'sent',
                        message,
                    },
                    ...prev,
                ]),
        })
    }

    const backButton = () => {
        router.back()
    }

    return (
        <div>
            {/* Chat Header */}
            <div className="flex items-center p-4 border-b border-gray-100">
                <button
                    onClick={backButton}
                    className="mr-1 text-gray-500 hover:text-gray-700">
                    <MdArrowBackIos />
                </button>
                {loadingChats ? (
                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 animate-pulse"></div>
                ) : (
                    <img
                        src={
                            chat?.user?.user_profile?.avatar ||
                            newUser?.user_profile?.avatar ||
                            '/images/profile_avatar.jpg'
                        }
                        alt={chat?.user?.first_name}
                        className="w-10 h-10 rounded-full mr-3"
                        onError={e =>
                            (e.target.src = '/images/profile_avatar.jpg')
                        }
                    />
                )}
                {loadingChats ? (
                    <div className="space-y-2 animate-pulse">
                        <div className="w-24 h-4 bg-gray-200 rounded"></div>
                        <div className="w-40 h-3 bg-gray-200 rounded"></div>
                    </div>
                ) : (
                    <div>
                        <p className="text-sm font-semibold">
                            {!isNewChat ? (
                                <>
                                    {chat?.user?.user_profile?.first_name}{' '}
                                    {chat?.user?.user_profile?.last_name}
                                </>
                            ) : (
                                <>
                                    {newUser?.user_profile?.first_name}{' '}
                                    {newUser?.user_profile?.last_name}
                                </>
                            )}
                        </p>
                        {chat?.user?.username && (
                            <p className="text-xs text-gray-400">
                                @{chat?.user?.username}
                            </p>
                        )}
                        {newUser?.username && (
                            <p className="text-xs text-gray-400">
                                @{newUser?.username}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Messages List */}
            {loadingChats ? (
                <div className="flex justify-center items-center p-4 h-[500px] md:h-[330px]">
                    <p className="text-tremor-brand-boulder text-sm">
                        Loading...
                    </p>
                </div>
            ) : (
                <>
                    {!isNewChat && (
                        <div className="flex flex-col-reverse p-4 gap-4 overflow-y-auto h-[500px] md:h-[330px] scroll">
                            {displayStatus && (
                                <span className="text-[11px] text-gray-400 -translate-y-3 -translate-x-1 ml-auto">
                                    {messages[0]?.status}
                                </span>
                            )}
                            {messages.map((msg, index) => (
                                <div
                                    key={msg.uuid || index}
                                    className={`py-2 max-w-[90%] mobile:max-w-[80%] px-3 text-sm rounded-lg ${
                                        msg.user_uuid === user?.uuid
                                            ? 'self-end bg-amber text-white'
                                            : 'self-start bg-gray-100 text-gray-600'
                                    }`}>
                                    {msg.message}
                                </div>
                            ))}
                        </div>
                    )}

                    {isNewChat && (
                        <div className="flex justify-center items-center p-4 h-[500px] md:h-[330px]">
                            <p className="text-tremor-brand-boulder text-sm">
                                Draft a message to{' '}
                                <>
                                    {newUser?.user_profile?.first_name}{' '}
                                    {newUser?.user_profile?.last_name}
                                </>
                            </p>
                        </div>
                    )}
                </>
            )}

            {/* Message Input */}
            <form
                onSubmit={handleSendMessage}
                className="flex items-center p-4">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    disabled={loading}
                    placeholder="Type your message..."
                    className="flex-grow text-sm bg-gray-100 text-gray-700 rounded-lg py-3 px-4 focus:outline-none"
                />
                <button
                    type="submit"
                    disabled={loading || !message.trim()}
                    className={`flex h-full ml-3 px-3 py-2.5 rounded-lg ${
                        loading
                            ? 'bg-gray-300'
                            : 'bg-amber text-white hover:bg-amber/80'
                    } ${!message.trim() ? 'opacity-50' : ''}`}>
                    {loading ? (
                        <Loader2
                            className="animate-spin text-white"
                            size={16}
                        />
                    ) : (
                        <Send size={16} />
                    )}
                </button>
            </form>
        </div>
    )
}
