export function generateImageName(month, str) {
    let formattedStr = str.replace(/\s+/g, '-')
    formattedStr = formattedStr.replace(/[^\w-]/g, '') // Removed unnecessary escape
    return (
        'https://blog.analogueshifts.com/wp-content/uploads/2024/' +
        month +
        '/' +
        formattedStr +
        '.png'
    )
}

// Format Date
export function formatDate(dateString) {
    const date = new Date(dateString)

    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
}

export function extractMonth(dateString) {
    const date = new Date(dateString)
    let month = (date.getMonth() + 1).toString() // getMonth returns 0-based month, so we add 1

    // Pad the month with a leading zero if it's less than 10
    if (month.length < 2) {
        month = '0' + month
    }

    return month
}
