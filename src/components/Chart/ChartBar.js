import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {

    let barFillheight = '0%';

    // Calculate fill height of bar in percentage
    if (props.maxValue > 0) {
        barFillheight = Math.round((props.value * 100) / props.maxValue ) + '%';
    }

    // console.log((props.value * props.maxValue) / 100 * props.maxValue, barFillheight);

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillheight }}></div>
            </div>
            <div className="chart-bar__label">{ props.label }</div>
        </div>
    )
}

export default ChartBar;