import { ChartBar } from "./ChartBar";
import './Chart.css';

export const Chart = ({ chartData }) => {

    const valueHeight = chartData.map((oneChart) => oneChart.value)
    const maxHeight = Math.max(...valueHeight)

    return (
        <div className="chart">
            {chartData.map((oneChart) => <ChartBar
                key={oneChart.month}
                oneChart={oneChart}
                maxHeight={maxHeight} />)}
        </div>
    )
}