// Fetch All Jobs

export const fetchJobs = (url, handleSuccess, handleError) => {
    const axios = require('axios')
    let config = {
        method: 'GET',
        url: url,
    }
    axios
        .request(config)
        .then(response => {
            if (response.status === 200) {
                handleSuccess(response)
            }
        })
        .catch(error => {
            handleError(error)
        })
}
