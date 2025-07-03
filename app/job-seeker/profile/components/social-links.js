import Link from 'next/link'
import socialLinks from './social-links.json'

export default function SocialLinks({ user }) {
    return (
        <>
            {' '}
            {user?.user_job_profile?.socials && (
                <div className="w-full flex items-center justify-end mt-5 gap-4 flex-wrap">
                    {user?.user_job_profile?.socials?.behance && (
                        <Link
                            href={user.user_job_profile.socials.behance}
                            className="w-max flex gap-2 text-sm font-normal text-[#262626] items-center">
                            <img
                                className="w-7 h-7 object-cover"
                                src={socialLinks['behance'].image}
                            />
                            {socialLinks['behance'].title}
                        </Link>
                    )}
                    {user?.user_job_profile?.socials?.dribble && (
                        <Link
                            href={user.user_job_profile.socials.dribble}
                            className="w-max flex gap-2 text-sm font-normal text-[#262626] items-center">
                            <img
                                className="w-7 h-7 object-cover"
                                src={socialLinks['dribble'].image}
                            />
                            {socialLinks['dribble'].title}
                        </Link>
                    )}
                    {user?.user_job_profile?.socials?.linkedin && (
                        <Link
                            href={user.user_job_profile.socials.linkedin}
                            className="w-max flex gap-2 text-sm font-normal text-[#262626] items-center">
                            <img
                                className="w-7 h-7 object-cover"
                                src={socialLinks['linkedin'].image}
                            />
                            {socialLinks['linkedin'].title}
                        </Link>
                    )}
                    {user?.user_job_profile?.socials?.tiktok && (
                        <Link
                            href={user.user_job_profile.socials.tiktok}
                            className="w-max flex gap-2 text-sm font-normal text-[#262626] items-center">
                            <img
                                className="w-7 h-7 object-cover"
                                src={socialLinks['tiktok'].image}
                            />
                            {socialLinks['tiktok'].title}
                        </Link>
                    )}
                </div>
            )}
        </>
    )
}
