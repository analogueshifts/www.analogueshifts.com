import ResponsiveNavLink from '../guest-layout/responsive-navlink'
import { motion, AnimatePresence } from 'framer-motion'
import NotificationSection from '@/components/application/user-layout/notifications-section'

export default function MenuDropDown({
    user,
    open,
    handleLogout,
    notificationCount,
}) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    exit={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    initial={{ x: '-100%' }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                    className="bg-white z-40 overflow-y-auto  h-screen absolute overflow-hidden top-0 w-3/4 left-0 block lg:hidden">
                    <div className="pt-7 pb-5 px-8 w-full flex-col flex gap-8">
                        <ResponsiveNavLink href="/dashboard">
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="/notifications">
                            Notifications{' '}
                            <NotificationSection
                                notificationCount={notificationCount}
                                user={user}
                                sidebar={true}
                            />
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={
                                user?.user_mode === 'job'
                                    ? '/jobs-recommendations'
                                    : '/tools/hire'
                            }>
                            {user?.user_mode === 'job'
                                ? 'Recommendations'
                                : 'Hire Talents'}
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={
                                user?.user_mode === 'job'
                                    ? '/applied-jobs'
                                    : '/manage-companies'
                            }>
                            {user?.user_mode === 'job'
                                ? 'Applied Jobs'
                                : 'Manage Companies'}
                        </ResponsiveNavLink>
                        {user?.user_mode === 'job' && (
                            <ResponsiveNavLink href="https://auth.analogueshifts.app/job-seeker-kyc">
                                Update KYC
                            </ResponsiveNavLink>
                        )}
                        <ResponsiveNavLink href="" onClick={handleLogout}>
                            Logout
                        </ResponsiveNavLink>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
