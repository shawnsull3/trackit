import React from 'react';
import { LineChart, Path, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import { View } from 'react-native'

const LineCharts = ({ logData, target, yMin}) => {
    const data = [];
    const xScale = [];
    logData.map(log => data.push(log[target]));
    console.log(data)
    logData.map(log => xScale.push(log.date));
    console.log(xScale);

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

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
      <View style={{ height: 200, padding: 5, flexDirection: 'row' }}>
        <YAxis
            data={data}
            style={{ marginBottom: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg}
            numberOfTicks={5}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
            <LineChart
                style={{ flex: 1 }}
                data={data}
                contentInset={verticalContentInset}
                svg={{ stroke: '#01BAEF' }}
                // yMin={yMin}
            >
                <Grid/>
                <Shadow/>
            </LineChart>
            <XAxis
                style={{ marginHorizontal: -10, height: xAxisHeight }}
                data={xScale}
                formatLabel={(value, index) => index}
                contentInset={{ left: 10, right: 10 }}
                svg={axesSvg}
            />
        </View>
      </View>
    )   
}

export default LineCharts;