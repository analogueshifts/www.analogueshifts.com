import Redirect from './redirect'

export async function generateMetadata() {
    return {
        title: 'Redirecting you',
    }
}

export default function Page({ params }) {
    return <Redirect viewId={params.viewId} />
}
