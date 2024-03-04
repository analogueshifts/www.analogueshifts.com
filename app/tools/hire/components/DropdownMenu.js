'use client'
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownMenu({ value, onChange, list }) {
    return (
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <div className="relative mt-2">
                        <Listbox.Button className="relative text-[13px] text-tremor-brand-boulder950 w-full h-14 cursor-default rounded-2xl bg-transparent py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-tremor-brand-boulder200 focus:outline-none focus:ring-2 focus:ring-tremor-background-darkYellow sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">
                                    {value?.name}
                                </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <i
                                    className="fas fa-angle-down w-5 text-gray-400"
                                    aria-hidden="true"></i>
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Listbox.Options
                                style={{
                                    boxShadow: '0px 20px 417px 0px #00000012',
                                }}
                                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-3xl bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm py-3">
                                {list.map(item => (
                                    <Listbox.Option
                                        key={item.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? 'bg-[#FFBB0A0F] text-tremor-brand-boulder950 border-[#FFBB0A0D]'
                                                    : 'text-tremor-brand-boulder300 border-transparent',
                                                'relative cursor-default h-[42px] text-[13px] border select-none py-2 pl-3 pr-9',
                                            )
                                        }
                                        value={item}>
                                        {({ value, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            value
                                                                ? 'font-semibold'
                                                                : 'font-normal',
                                                            'ml-3 block truncate',
                                                        )}>
                                                        {item?.name}
                                                    </span>
                                                </div>

                                                {value ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? 'text-white'
                                                                : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                                        )}>
                                                        <i
                                                            className="fas fa-check-mark h-5 w-5"
                                                            aria-hidden="true"></i>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
