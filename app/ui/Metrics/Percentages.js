import React from 'react';
import { Text } from 'react-native';

const Percentages = ({ logData, target }) => {
    const data = []
    logData.map(log => data.push(log[target]));
    const trueArr = data.filter(day => day === true);
    const percent = Math.ceil((trueArr.length / data.length) * 100);

    return (
      <Text styles={{color: '#01BAEF'}}>{percent}%</Text>
    )   
}

export default Percentages;
