import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export default function JobsPagination({ currentPageInfo, keywordQuery }) {
    return (
        <Pagination className="max-w-full w-max overflow-x-auto pb-3">
            <PaginationContent className="w-full">
                <PaginationItem>
                    <PaginationPrevious
                        href={
                            currentPageInfo?.prev_page_url
                                ? '/jobs?page=' +
                                  currentPageInfo.prev_page_url[
                                      currentPageInfo.prev_page_url.length - 1
                                  ] +
                                  `${
                                      keywordQuery[0]
                                          ? '&keywords=' + keywordQuery[0]
                                          : ''
                                  }`
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
                                                ? '/jobs?page=' +
                                                  item.url[
                                                      item.url.length - 1
                                                  ] +
                                                  `${
                                                      keywordQuery[0]
                                                          ? '&keywords=' +
                                                            keywordQuery[0]
                                                          : ''
                                                  }`
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
                                ? '/jobs?page=' +
                                  currentPageInfo.next_page_url[
                                      currentPageInfo.next_page_url.length - 1
                                  ] +
                                  `${
                                      keywordQuery[0]
                                          ? '&keywords=' + keywordQuery[0]
                                          : ''
                                  }`
                                : ''
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
