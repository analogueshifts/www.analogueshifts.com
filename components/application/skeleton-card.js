import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonCard() {
    return (
        <div className="flex items-center space-x-4 w-full">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 w-[calc(100%-62px)]">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[calc(100%-10px)]" />
                <Skeleton className="h-4 w-[calc(100%-20px)]" />
            </div>
        </div>
    )
}
