'use client'

import { useState } from 'react'
import { useUser } from '@/contexts/user'
import Chat from './components/chat'
import Chats from './components/chats'
import NewChat from './components/newChat'
import Progress from '../dashboard/components/progress'

export default function Page() {
    const { user } = useUser()
    const [selectedChat, setSelectedChat] = useState(null)
    const [selectedTab, setSelectedTab] = useState('chats')

    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-[1003px] xl:flex-row flex-col flex gap-8">
                <div className="xl:w-[calc(100%-320px)] h-[633px] md:h-[525px] sticky top-[112px] large:top-[120px] tablet:static z-30 w-full bg-white rounded-[32px] flex justify-center items-center">
                    <div className="h-full w-full rounded-lg overflow-hidden">
                        {selectedTab === 'chats' && !selectedChat && (
                            <Chats
                                setSelectedChat={setSelectedChat}
                                setSelectedTab={setSelectedTab}
                            />
                        )}
                        {selectedTab === 'search' && !selectedChat && (
                            <NewChat setSelectedTab={setSelectedTab} />
                        )}
                        {selectedTab === 'chat' && selectedChat && (
                            <Chat
                                user={user}
                                setSelectedChat={setSelectedChat}
                                setSelectedTab={setSelectedTab}
                                selectedChat={selectedChat}
                            />
                        )}
                    </div>
                </div>

                <Progress />
            </div>
        </section>
    )
}
