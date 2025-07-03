import Form from './components/form'

export default function Page({ params }) {
    const { uuid } = params
    return <Form uuid={uuid} />
}
