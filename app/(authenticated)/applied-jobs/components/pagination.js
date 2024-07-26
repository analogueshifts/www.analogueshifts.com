import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function AppliedJobsPagination({ currentPageInfo }) {
    return (
        <Pagination className="w-full overflow-x-auto overflow-y-hidden bg-white mb-5">
            <PaginationContent className="bg-white w-max">
                <PaginationItem>
                    <PaginationPrevious
                        href={
                            currentPageInfo?.prev_page_url
                                ? '/applied-jobs' +
                                  currentPageInfo?.prev_page_url?.slice(47)
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
                                                ? '/applied-jobs' +
                                                  item?.url?.slice(47)
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
                                ? '/applied-jobs' +
                                  currentPageInfo?.next_page_url?.slice(47)
                                : ''
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
