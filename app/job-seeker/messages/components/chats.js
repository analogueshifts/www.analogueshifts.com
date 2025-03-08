'use client'
import { useState, useEffect } from 'react'
import { useChat } from '@/hooks/chat'
import { Plus } from 'lucide-react'
import NewChat from './newChat'
import { useRouter } from 'next/navigation'

export default function Chats() {
    const { allChats } = useChat()
    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(true)
    const [showNewChat, setShowNewChat] = useState(false)
    const router = useRouter()

    useEffect(() => {
        allChats({
            setChats,
            setLoading,
            url: '/chat/index',
        })
    }, [])

    return (
        <>
            <NewChat visible={showNewChat} setVisible={setShowNewChat} />
            <div className="flex justify-between items-center px-8 py-4 border-b border-gray-100">
                <h2 className="large:text-lg text-base font-semibold text-black ">
                    Chats
                </h2>
                <button
                    onClick={() => setShowNewChat(true)}
                    className="bg-[#FFBB0A1F] text-amber px-3 py-2 rounded-lg">
                    <Plus width={16} />
                </button>
            </div>
            <ul className=" p-2 pb-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
                {loading
                    ? Array.from({ length: 5 }).map((_, index) => (
                          <li
                              key={index}
                              className="flex items-center p-3 rounded-xl animate-pulse">
                              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                              <div className="space-y-2">
                                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                                  <div className="w-40 h-3 bg-gray-200 rounded"></div>
                              </div>
                          </li>
                      ))
                    : chats.map(chat => (
                          <li
                              key={chat.id}
                              onClick={() => {
                                  router.push(
                                      `/job-seeker/messages/${chat.uuid}`,
                                  )
                              }}
                              className="flex items-center hover:bg-gray-50 px-3 cursor-pointer  text-gray-700">
                              <img
                                  src={
                                      chat?.members[0]?.user?.user_profile
                                          ?.avatar ??
                                      '/images/profile_avatar.jpg'
                                  }
                                  alt={chat?.members[0]?.user?.first_name}
                                  className="w-10 h-10 rounded-full mr-3"
                                  onError={e =>
                                      (e.target.src =
                                          '/images/profile_avatar.jpg')
                                  }
                              />
                              <div className="h-[70px] flex items-center border-b border-gray-100 w-full">
                                  <p className="text-sm font-semibold">
                                      {
                                          chat?.members[0]?.user?.user_profile
                                              ?.first_name
                                      }{' '}
                                      {
                                          chat?.members[0]?.user?.user_profile
                                              ?.last_name
                                      }
                                  </p>
                              </div>
                          </li>
                      ))}
            </ul>
        </>
    )
}
