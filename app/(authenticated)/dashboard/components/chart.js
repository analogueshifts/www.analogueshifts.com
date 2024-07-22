import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

export default function RenderChart({ chartData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Hires and Forms Over Time',
            },
        },
        scales: {
            x: {
                type: 'category',
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    }
    return <Line data={chartData} options={options} />
}
