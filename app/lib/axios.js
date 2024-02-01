import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export default axios

const axiosBlog = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
})

export { axiosBlog }

const axiosDashboardJob = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

export { axiosDashboardJob }
