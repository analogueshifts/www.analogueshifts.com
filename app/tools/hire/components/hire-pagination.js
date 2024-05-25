import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function HirePagination({ currentPageInfo }) {
    return (
        <div className="w-max mx-auto overflow-x-hidden h-max rounded-full scrollbar-hidden">
            <Pagination className=" w-max">
                <PaginationContent className="bg-transparent h-full">
                    <PaginationItem>
                        <PaginationPrevious
                            href={
                                currentPageInfo?.prev_page_url
                                    ? currentPageInfo.prev_page_url.slice(34)
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
                                                    ? item.url.slice(34)
                                                    : ''
                                            }>
                                            {item.label}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            })}

                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            href={
                                currentPageInfo?.next_page_url
                                    ? currentPageInfo.next_page_url.slice(34)
                                    : ''
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
