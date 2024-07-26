import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function HirePagination({ currentPageInfo }) {
    return (
        <div className="w-max max-w-full overflow-x-auto h-max rounded-full scrollbar-hidden">
            <Pagination className=" w-max">
                <PaginationContent className="bg-transparent h-full">
                    <PaginationItem>
                        <PaginationPrevious
                            href={
                                currentPageInfo?.prev_page_url
                                    ? '/tools/hire' +
                                      currentPageInfo?.prev_page_url?.slice(49)
                                    : ''
                            }
                        />
                    </PaginationItem>

                    {currentPageInfo?.links &&
                        currentPageInfo.links
                            .slice(1, currentPageInfo.links.length - 1)
                            .map(item => {
                                return (
                                    <PaginationItem key={item.label}>
                                        <PaginationLink
                                            isActive={item.active}
                                            href={
                                                item.url
                                                    ? '/tools/hire' +
                                                      item?.url?.slice(49)
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
                                      currentPageInfo?.next_page_url?.slice(49)
                                    : ''
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
