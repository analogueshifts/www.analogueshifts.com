import JobDetails from './components/job-details'

export default function Page({ params }) {
    const slug = params.slug

    return <JobDetails slug={slug} />
}
