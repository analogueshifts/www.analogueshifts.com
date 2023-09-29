import { useEffect } from 'react'
import axios from '../../lib/axios'
import { navigate } from 'gatsby'

export default function View(props) {

    const slug = props.params.viewId

    useEffect(() => {
        if (slug) {
            axios
                .get(`/job/${slug}`)
                .then(res => {
                    const data = res.data

                    navigate(`/jobs/${data.display}`)
                })
                .catch(error => {
                    alert(error)
                })
        }
    }, [slug])

    return null
}
