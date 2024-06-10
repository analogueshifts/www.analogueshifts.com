export const processChartData = data => {
    const dates = []
    const hiresCount = []
    const formsCount = []

    data.hires.forEach(item => {
        dates.push(item.date)
        hiresCount.push(item.count)
    })

    data.forms.forEach(item => {
        dates.push(item.date)
        formsCount.push(item.count)
    })

    return {
        labels: dates,
        datasets: [
            {
                label: 'Hires',
                data: hiresCount,
                borderColor: '#876307',
                backgroundColor: '#876307',
                fill: true,
            },
            {
                label: 'Forms',
                data: formsCount,
                borderColor: '#D5AE35',
                backgroundColor: '#D5AE35',
                fill: true,
            },
        ],
    }
}
