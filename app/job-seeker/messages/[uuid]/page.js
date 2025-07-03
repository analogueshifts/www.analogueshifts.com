'use client'
import Chat from '../components/chat'

export default function Page({ params }) {
    const uuid = params.uuid
    return (
        <div className="xl:w-[calc(100%-320px)] h-[655px] md:h-[485px] sticky top-[112px] large:top-[120px] tablet:static z-30 w-full bg-white rounded-[32px] flex justify-center items-center">
            <div className="h-full w-full relative rounded-[32px] overflow-hidden">
                <Chat chatId={uuid} />
            </div>
        </div>
    )
}
