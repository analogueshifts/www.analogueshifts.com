import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function CompaniesPagination({ currentPageInfo }) {
    return (
        <div className="w-max max-w-full overflow-x-auto h-max rounded-full scrollbar-hidden">
            <Pagination className=" w-max">
                <PaginationContent className="bg-transparent h-full">
                    <PaginationItem>
                        <PaginationPrevious
                            href={
                                currentPageInfo?.prev_page_url
                                    ? '/tools/hire' +
                                      currentPageInfo?.prev_page_url?.slice(52)
                                    : ''
                            }
                        />
                    </PaginationItem>

                    {currentPageInfo?.links &&
                        currentPageInfo.links
                            .slice(1, currentPageInfo.links.length - 1)
                            .map(item => {
                                return (
                                    <PaginationItem key={crypto.randomUUID()}>
                                        <PaginationLink
                                            isActive={item.active}
                                            href={
                                                item.url
                                                    ? '/manage-companies' +
                                                      item?.url?.slice(52)
                                                    : ''
                                            }>
                                            {item.label}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            })}

                    <PaginationItem>
                        <PaginationNext
                            href={
                                currentPageInfo?.next_page_url
                                    ? '/tools/hire' +
                                      currentPageInfo?.next_page_url?.slice(52)
                                    : ''
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
