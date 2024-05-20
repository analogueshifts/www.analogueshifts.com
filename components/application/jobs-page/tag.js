import Image from 'next/image'

export default function Tag({ image, text, alt }) {
    return (
        <div className="h-21 px-2 py-1 bg-gray-500/20 rounded-sm flex items-center gap-1">
            {image && <Image src={image} alt={alt ? alt : ''} />}
            <span className="text-xs font-normal text-tremor-brand-boulder900">
                {text}
            </span>
        </div>
    )
}
