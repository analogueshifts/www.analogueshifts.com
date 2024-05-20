const FormInput = ({ label, icon, value, type, placeholder, onChange }) => {
    return (
        <div className="w-full pb-5 flex flex-col gap-2.5">
            <p className="text-base font-normal text-tremor-content-grayText">
                {label}
            </p>
            <div className={`w-full relative flex items-center h-12`}>
                <i
                    className={
                        'absolute left-5  text-base text-tremor-content-grayText w-8 ' +
                        icon
                    }></i>

                <input
                    className={` w-full rounded-2xl border border-black/10 outline-1 outline-tremor-background-darkYellow h-full pl-12 pr-4  text-base font-normal text-gray-400`}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    onChange={onChange}
                    required
                />
            </div>
        </div>
    )
}

export default FormInput
