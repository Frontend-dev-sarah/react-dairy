import './ChartBar.css';

export const ChartBar = ({ oneChart, maxHeight }) => {
    let chartFilledHeight = 0;
    if (maxHeight > 0) {
        chartFilledHeight = Math.round(oneChart.value / maxHeight * 100)
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill"
                    style={{ height: chartFilledHeight }} />
            </div>
            <div className="chart-bar__label">{oneChart.month}</div>
        </div>
    )
}