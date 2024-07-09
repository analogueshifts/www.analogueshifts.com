import { CheckCircle } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

export default function VerifiedCheckMark() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <CheckCircle
                        className="text-tremor-background-lightYellow"
                        width={17}
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Verified Account</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
