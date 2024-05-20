export function fetchJobPosts(url, token, handleSuccess, handleError) {
    const axios = require('axios')
    let config = {
        method: 'GET',
        url: url,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }
    axios.request(config).then(handleSuccess).catch(handleError)
}
