import Overview from './components/overview'

export default function Page({ params }) {
    const slug = params.slug

    return (
        <section className="w-full flex justify-center">
            <Overview slug={slug} />
        </section>
    )
}
