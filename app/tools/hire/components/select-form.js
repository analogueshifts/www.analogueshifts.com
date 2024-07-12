'use client'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'
import Cookies from 'js-cookie'
import FormGridTile from './form-grid-tile'
import { ChevronDown } from 'lucide-react'
import { clearUserSession } from '@/utils/clear-user-session'
import { errorToast } from '@/utils/error-toast'
import { Plus } from 'lucide-react'

export default function SelectForm({ selectedForm, setSelectedForm }) {
    const [loading, setLoading] = useState(false)
    const [forms, setForms] = useState([])
    const [currentPageInfo, setCurrentPageInfo] = useState(null)
    const getFormUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/tools/form`
    const token = Cookies.get('analogueshifts')

    const fetchForms = async url => {
        const axios = require('axios')
        const config = {
            method: 'GET',
            url: url,
            headers: { Authorization: 'Bearer ' + token },
        }

        try {
            setLoading(true)
            const response = await axios.request(config)
            setCurrentPageInfo(response.data.data.forms)
            setForms(response.data.data.forms.data)
            setLoading(false)
        } catch (error) {
            errorToast(
                'Error Fetching Forms',
                error?.response?.data?.message || error.message || '',
            )
            setLoading(false)
            if (error?.response?.status === 401) {
                clearUserSession()
            }
        }
    }

    return (
        <Dialog className="">
            {loading && (
                <div className="w-full top-0 left-0 z-[3100] fixed h-full flex justify-center items-center bg-opacity-80">
                    <div className="md:w-[70%] w-[90%] max-w-[1000px] h-[80dvh] max-h-[80dvh] bg-gray-300/30 flex items-center justify-center rounded-md">
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full flex gap-3 items-center">
                <DialogTrigger className="w-full">
                    {' '}
                    <Button
                        onClick={() => fetchForms(getFormUrl)}
                        type="button"
                        variant="outline"
                        className="text-tremor-brand-boulder950 h-14 rounded-2xl w-full flex justify-between items-center">
                        <p className="w-max max-w-[90%]  truncate text-sm font-normal text-tremor-brand-boulder700">
                            {selectedForm === ''
                                ? 'Select Form'
                                : 'https://forms.analogueshifts.com/forms/show/' +
                                  selectedForm}
                        </p>
                        <ChevronDown width={15} />
                    </Button>
                </DialogTrigger>
            </div>
            <DialogContent className="md:w-[70%] w-[90%] duration-300 max-w-[1000px] h-[80dvh] max-h-[80dvh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-tremor-brand-boulder950">
                        Select A Form
                    </DialogTitle>

                    <div className="w-full flex-wrap gap-5 flex justify-between items-center pt-2">
                        <DialogDescription className="text-tremor-brand-boulder700">
                            You have to select a Form that will be used as the
                            Job URL.
                        </DialogDescription>
                        <a
                            rel="noreferrer"
                            className="bg-tremor-background-lightYellow gap-1.5 text-sm text-white flex items-center justify-center w-max h-10 px-8"
                            target="_blank"
                            href="https://forms.analogueshifts.com/forms/create">
                            <Plus width={16} /> Create new form
                        </a>
                    </div>
                </DialogHeader>

                {/* Content */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 my-5">
                    {forms[0] &&
                        forms.map(item => {
                            return (
                                <FormGridTile
                                    key={crypto.randomUUID()}
                                    item={item}
                                    selectedUrl={selectedForm}
                                    setSelectedUrl={setSelectedForm}
                                />
                            )
                        })}
                </div>

                {/* Footer */}
                <DialogFooter className="w-full h-max">
                    {currentPageInfo && (
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem className="cursor-pointer">
                                    <PaginationPrevious
                                        onClick={() => {
                                            if (
                                                currentPageInfo?.prev_page_url
                                            ) {
                                                fetchForms(
                                                    currentPageInfo.prev_page_url,
                                                )
                                            }
                                        }}
                                    />
                                </PaginationItem>

                                {currentPageInfo?.links &&
                                    currentPageInfo.links
                                        .slice(
                                            1,
                                            currentPageInfo.links.length - 1,
                                        )
                                        .map(item => {
                                            return (
                                                <PaginationItem
                                                    className="cursor-pointer"
                                                    key={crypto.randomUUID()}>
                                                    <PaginationLink
                                                        isActive={item.active}
                                                        onClick={() =>
                                                            fetchForms(item.url)
                                                        }>
                                                        {item.label}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            )
                                        })}

                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem className="cursor-pointer">
                                    <PaginationNext
                                        onClick={() => {
                                            if (
                                                currentPageInfo?.next_page_url
                                            ) {
                                                fetchForms(
                                                    currentPageInfo.next_page_url,
                                                )
                                            }
                                        }}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
