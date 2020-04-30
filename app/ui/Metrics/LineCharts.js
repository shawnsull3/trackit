import React from 'react';
import { LineChart, Path, Grid } from 'react-native-svg-charts';

const LineCharts = ({ logData, target, yMin}) => {
    const data = []
    logData.map(log => data.push(log[target]));
    // console.log(data)
    
    const Shadow = ({ line }) => (
      <Path
        key={'shadow'}
        y={2}
        d={line}
        fill={'none'}
        strokeWidth={4}
        stroke={'#01BAEF'}
      />
    )
    
    return (
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: '#01BAEF' }}
        contentInset={{ top: 20, bottom: 20 }}
        yMin={yMin}
      >
        <Grid />
        <Shadow/>
      </LineChart>
    )   
}

export default LineCharts;
