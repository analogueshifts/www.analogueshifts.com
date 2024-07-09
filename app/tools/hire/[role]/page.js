import Redirect from './redirect'

export default function Page({ params }) {
    const { role } = params

    return <Redirect role={role} />
}
