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

// Search for a job

export const searchJob = (url, searchValue, handleSuccess, handleError) => {
    const axios = require('axios')
    let config = {
        method: 'POST',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: { search: searchValue },
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
