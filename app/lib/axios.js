import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    maxBodyLength: Infinity,
    headers: {
        Accept: 'application/json',
    },
    // withCredentials: true,
})

export default axios

const axiosBlog = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    maxBodyLength: Infinity,
    headers: {
        Accept: 'application/json',
    },
    // withCredentials: true,
})

export { axiosBlog }

const axiosDashboardJob = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

export { axiosDashboardJob }
