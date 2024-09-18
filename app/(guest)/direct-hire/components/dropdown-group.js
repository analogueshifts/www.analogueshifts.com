import Dropdown from './dropdown'

const DropdownGroup = ({
    label,
    image,
    value,
    placeholder,
    onChange,
    required,
    list,
    inCludeSearchBar,
}) => {
    return (
        <div className="w-full relative flex flex-col gap-3 large:gap-5">
            <p className="text-base large:text-xl font-medium text-tremor-brand-boulder950">
                {label} {required && <span className="text-[#FF0000]">*</span>}
            </p>
            <Dropdown
                inCludeSearchBar={inCludeSearchBar}
                placeholder={placeholder}
                label={placeholder}
                list={list}
                setValue={onChange}
                value={value}
                image={image}
            />
        </div>
    )
}

export default DropdownGroup
