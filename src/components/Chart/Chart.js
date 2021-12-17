import React from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {

    const maxExpenseArray = props.dataPoints.map(dataPoint => {
        return dataPoint.value
    })

    const getMaxValue = Math.max(...maxExpenseArray);
    console.log(maxExpenseArray, getMaxValue);

    return (<div className="chart">
        { props.dataPoints.map((dataPoint) => 
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={getMaxValue}
                label={dataPoint.label}
            />
        )}
    </div>)
}

export default Chart;