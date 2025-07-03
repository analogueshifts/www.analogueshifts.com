// components/AutoCompleteInput.js
import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import 'tailwindcss/tailwind.css'

const AutoCompleteInput = ({
    suggestions,
    value,
    setValue,
    placeholder,
    required,
}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const suggestionCardRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = event => {
            if (
                suggestionCardRef.current &&
                !suggestionCardRef.current.contains(event.target)
            ) {
                setShowSuggestions(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleChange = e => {
        const userInput = e.target.value
        const filtered = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
        )
        setValue(userInput)
        setFilteredSuggestions(filtered)
        setShowSuggestions(true)
    }

    const handleClick = suggestion => {
        setValue(suggestion)
        setShowSuggestions(false)
    }

    return (
        <div className="relative w-full max-w-md mx-auto mt-10">
            <input
                type="text"
                placeholder={placeholder}
                required={required}
                className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                onChange={handleChange}
                value={value}
            />
            <CSSTransition
                in={showSuggestions}
                timeout={300}
                classNames="fade"
                unmountOnExit>
                <div
                    ref={suggestionCardRef}
                    className="absolute z-50 top-full left-0  mt-1  rounded-3xl w-full bg-white text-base shadow-lg focus:outline-none sm:text-sm py-3">
                    {filteredSuggestions
                        .slice(0, 7)
                        .map((suggestion, index) => (
                            <div
                                key={index}
                                className="text-tremor-brand-boulder300 cursor-pointer border-transparent h-[42px] text-[13px] border py-2 pl-3 pr-9 hover:bg-[#FFBB0A0F] hover:text-tremor-brand-boulder950 hover:border-[#FFBB0A0D]"
                                onClick={() => handleClick(suggestion)}>
                                {suggestion}
                            </div>
                        ))}
                </div>
            </CSSTransition>

            <style>{`
                .fade-enter {
                    opacity: 0;
                    transform: translateY(10px);
                }
                .fade-enter-active {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 300ms, transform 300ms;
                }
                .fade-exit {
                    opacity: 1;
                }
                .fade-exit-active {
                    opacity: 0;
                    transition: opacity 300ms;
                }
            `}</style>
        </div>
    )
}

export default AutoCompleteInput
