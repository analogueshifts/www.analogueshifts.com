import { Check } from 'lucide-react'

export default function CustomCheckBox({ checked }) {
    return (
        <div
            className={`large:w-6 flex justify-center items-center large:h-6 w-5 h-5 rounded border border-tremor-background-darkYellow ${
                checked ? 'bg-tremor-background-darkYellow' : 'bg-transparent'
            }`}>
            <Check
                className={`large:w-4 w-3 h-max text-white ${
                    checked ? 'block' : 'hidden'
                }`}
            />
        </div>
    )
}
