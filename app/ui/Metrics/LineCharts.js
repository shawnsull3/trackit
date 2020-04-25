import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { LineChart, Path, Grid } from 'react-native-svg-charts';

const LineCharts = ({ logData, target}) => {
    const data = []
    logData.map(log => data.push(log[target]));
    
    const Shadow = ({ line }) => (
      <Path
        key={'shadow'}
        y={2}
        d={line}
        fill={'none'}
        strokeWidth={4}
        stroke={'rgba(134, 65, 244, 0.2)'}
      />
    )
    
    return (
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
        <Shadow/>
      </LineChart>
    )   
}

export default LineCharts;
