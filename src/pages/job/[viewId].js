// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import axios from '../../lib/axios'

// export default function View() {
//     const router = useRouter()

//     const slug = router.query.viewId

//     useEffect(() => {
//         if (slug) {
//             axios
//                 .get(`/job/${slug}`)
//                 .then(res => {
//                     const data = res.data

//                     router.push(`/jobs/${data.display}`)
//                 })
//                 .catch(error => {
//                     alert(error)
//                 })
//         }
//     }, [slug, router])

//     // No need for a JSX return, as this page is intended for immediate redirection

//     return null
// }
