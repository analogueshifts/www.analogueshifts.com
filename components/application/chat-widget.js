'use client'
import { useState, useRef, useEffect } from 'react'
import { useUser } from '@/contexts/user'
import { useAssistant } from '@/hooks/assistant'

export default function ChatWidget() {
    const { user } = useUser()
    const { sendMessage } = useAssistant()

    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const scrollRef = useRef(null)

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
    }, [messages, open])

    if (!user) {
        return null
    }

    const handleSend = async () => {
        const content = input.trim()
        if (!content || loading) {
            return
        }

        const nextMessages = [...messages, { role: 'user', content }]
        setMessages(nextMessages)
        setInput('')

        const reply = await sendMessage({
            messages: nextMessages,
            setLoading,
        })

        if (reply) {
            setMessages(prev => [...prev, { role: 'assistant', content: reply }])
        }
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-[4000] flex flex-col items-end gap-3">
            {open && (
                <div className="w-[90vw] max-w-[340px] h-[460px] max-h-[70vh] bg-white rounded-3xl shadow-xl border border-[#E7E7E7] flex flex-col overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#E7E7E7] flex items-center justify-between">
                        <p className="text-sm font-semibold text-[#292929]">
                            AnalogueShifts Assistant
                        </p>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="text-[#7C7C7C] text-xs"
                            aria-label="Close chat">
                            ✕
                        </button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
                        {messages.length === 0 && (
                            <p className="text-xs text-[#7C7C7C]">
                                Ask me anything about how AnalogueShifts
                                works — job search, Easy Apply, the Resume
                                Optimizer, or posting jobs.
                            </p>
                        )}
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs ${
                                    message.role === 'user'
                                        ? 'self-end bg-[#FFBB0A] text-white'
                                        : 'self-start bg-[#F9F9F9] text-[#292929]'
                                }`}>
                                {message.content}
                            </div>
                        ))}
                        {loading && (
                            <div className="self-start rounded-2xl px-3 py-2 text-xs bg-[#F9F9F9] text-[#7C7C7C]">
                                Typing...
                            </div>
                        )}
                    </div>

                    <div className="px-3 py-3 border-t border-[#E7E7E7] flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type a message..."
                            className="flex-1 h-10 rounded-full bg-[#F9F9F9] px-4 text-xs outline-none"
                        />
                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            className="h-10 w-10 shrink-0 disabled:opacity-60 disabled:cursor-not-allowed rounded-full bg-[#FFBB0A] text-white text-xs font-bold">
                            Go
                        </button>
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className="h-14 w-14 rounded-full bg-[#FFBB0A] shadow-lg flex items-center justify-center text-white hover:opacity-90"
                aria-label="Toggle assistant chat">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    )
}
