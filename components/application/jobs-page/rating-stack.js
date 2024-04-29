import Image from 'next/image'
import UserOne from '@/public/images/jobs/job-review-1.png'
import UserTwo from '@/public/images/jobs/job-review-2.png'
import UserThree from '@/public/images/jobs/job-review-3.png'
import UserFour from '@/public/images/jobs/job-review-4.png'
import UserFive from '@/public/images/jobs/job-review-5.png'
import StarRating from '@/public/images/jobs/ratings-star.png'

export default function UserRatingStack() {
    return (
        <div className="w-[280px] h-[43px] relative">
            <Image
                src={UserTwo}
                alt="User Image"
                className="absolute top-0 w-[43px] h-full"
            />
            <Image
                src={UserFive}
                alt="User Image"
                className="absolute top-0 left-[27px] w-[43px] h-full"
            />
            <Image
                src={UserFour}
                alt="User Image"
                className="absolute top-0 left-[54px] w-[43px] h-full"
            />
            <Image
                src={UserThree}
                alt="User Image"
                className="absolute top-0 left-[81px] w-[43px] h-full"
            />
            <Image
                src={UserOne}
                alt="User Image"
                className="absolute top-0 left-[108px] w-[43px] h-full"
            />
            <div className="absolute left-[165px] h-full flex flex-col justify-around">
                <p className="text-xs text-[#5A5A5A]">
                    <b>+800</b> Loved Talents
                </p>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                        <Image
                            key={crypto.randomUUID()}
                            src={StarRating}
                            alt="Star"
                            height={20}
                            width={20}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
