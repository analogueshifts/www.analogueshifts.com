export function deletePost(url, token, handleSuccess, handleError) {
    const axios = require('axios')
    let config = {
        method: 'DELETE',
        url: url,
        headers: {
            Authorization: 'Bearer ' + token,
        },
    }
    axios.request(config).then(handleSuccess).catch(handleError)
}
