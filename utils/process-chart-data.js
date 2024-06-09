export const processChartData = data => {
    const dates = []
    const hiresCount = []
    const formsCount = []

    data.hires.forEach(item => {
        dates.push(item.date)
        hiresCount.push(item.count)
    })

    data.forms.forEach(item => {
        formsCount.push(item.count)
    })

    return {
        labels: dates,
        datasets: [
            {
                label: 'Hires',
                data: hiresCount,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
            {
                label: 'Forms',
                data: formsCount,
                borderColor: 'rgba(153,102,255,1)',
                backgroundColor: 'rgba(153,102,255,0.2)',
                fill: true,
            },
        ],
    }
}
