import NotificationList from '@/app/recruiter/notifications/components/NotificationList'

export default function Page() {
    return (
        <div className="xl:w-[calc(100%-320px)] overflow-hidden w-full bg-white rounded-[32px] flex flex-col">
            <NotificationList />
        </div>
    )
}
