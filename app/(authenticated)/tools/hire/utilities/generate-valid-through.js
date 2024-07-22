export const generateValidThrough = () => {
    const currentDate = new Date()
    return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`
}
