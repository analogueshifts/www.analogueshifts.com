'use client'
import { useState } from 'react'

import JobGridTile from '../../../(guest)/jobs/components/job-grid-tile'
import DidYouApply from '../../../(guest)/jobs/[slug]/components/did-you-apply'

export default function GridTile({ item, index, total }) {
    const [idiomModal, setIdiomModal] = useState(false)

    return (
        <>
            {' '}
            <DidYouApply
                slug={item?.slug}
                open={idiomModal}
                close={() => setIdiomModal(false)}
            />
            <JobGridTile
                index={index}
                total={total}
                handleApply={() => {
                    window.open(item.apply || '', '_blank')
                    setIdiomModal(true)
                }}
                item={item}
            />
        </>
    )
}
