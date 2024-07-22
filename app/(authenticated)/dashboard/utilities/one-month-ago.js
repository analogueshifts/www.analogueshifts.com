export const getOneMonthAgoDate = () => {
    const today = new Date()
    const oneMonthAgo = new Date(today.setMonth(today.getMonth() - 1))
    return oneMonthAgo
}
