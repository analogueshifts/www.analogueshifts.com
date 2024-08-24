import { Suspense } from 'react'
import Validate from './components/validate'

export default function Page() {
    return (
        <Suspense fallback={<p></p>}>
            <Validate />
        </Suspense>
    )
}
