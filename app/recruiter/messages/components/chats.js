'use client'
import { useState, useEffect } from 'react'
import { useChat } from '@/hooks/chat'

export default function Chats({ setSelectedChat, setSelectedTab }) {
    const { allChats } = useChat()
    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        allChats({
            setChats,
            setLoading,
            url: '/chat/index',
        })
    }, [])

    const showChat = chat => {
        setSelectedChat(chat)
        setSelectedTab('chat')
    }
    return (
        <div>
            <div className="flex justify-between text-lg font-semibold p-4 border-b border-gray-100">
                <h2>Chats</h2>
                <button
                    onClick={() => setSelectedTab('search')}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                    +
                </button>
            </div>
            <ul className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
                {loading
                    ? Array.from({ length: 5 }).map((_, index) => (
                          <li
                              key={index}
                              className="flex items-center p-3 rounded-xl bg-gray-100 animate-pulse">
                              <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                              <div className="space-y-2">
                                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                                  <div className="w-40 h-3 bg-gray-300 rounded"></div>
                              </div>
                          </li>
                      ))
                    : chats.map(chat => (
                          <li
                              key={chat.id}
                              onClick={() => showChat(chat)}
                              className="flex items-center p-3 rounded-xl cursor-pointer bg-gray-100 text-gray-700 hover:bg-yellow-500 hover:text-white">
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
                              <div>
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
                                  <p className="text-xs">
                                      {chat?.members[0]?.user?.email}
                                  </p>
                              </div>
                          </li>
                      ))}
            </ul>
        </div>
    )
}
