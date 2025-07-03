export const getOneMonthAgoDate = () => {
    const today = new Date()
    const oneMonthAgo = new Date(today.setMonth(today.getMonth() - 1))
    return oneMonthAgo
}
export const getOneWeekAgoDate = () => {
    const today = new Date()
    const oneWeekAgo = new Date(today.setDate(today.getDate() - 7))
    return oneWeekAgo
}
export const getOneYearAgoDate = () => {
    const today = new Date()
    const oneYearAgo = new Date(today.setFullYear(today.getFullYear() - 1))
    return oneYearAgo
}
