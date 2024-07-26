import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function NotificationsPagination({ currentPageInfo }) {
    return (
        <Pagination className="w-full overflow-x-auto overflow-y-hidden mt-5">
            <PaginationContent className="bg-white w-max">
                <PaginationItem>
                    <PaginationPrevious
                        href={
                            currentPageInfo?.prev_page_url
                                ? '/notifications' +
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
                                <PaginationItem key={item.label}>
                                    <PaginationLink
                                        isActive={item.active}
                                        href={
                                            item.url
                                                ? '/notifications' +
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
                                ? '/notifications' +
                                  currentPageInfo?.next_page_url?.slice(52)
                                : ''
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
