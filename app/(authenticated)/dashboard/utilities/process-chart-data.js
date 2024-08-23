export const processHireChartData = data => {
    const dates = []
    const hiresCount = []

    data.hires.forEach(item => {
        dates.push(item.date)
        hiresCount.push(item.count)
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
        ],
    }
}

export const processJobsChartData = data => {
    const dates = []
    const appliedCount = []

    data.applied.forEach(item => {
        dates.push(item.date)
        appliedCount.push(item.count)
    })

    return {
        labels: dates,
        datasets: [
            {
                label: 'Jobs Applied',
                data: appliedCount,
                borderColor: '#876307',
                backgroundColor: '#876307',
                fill: true,
            },
        ],
    }
}
