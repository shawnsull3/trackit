import React from 'react'
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LineCharts from './LineCharts';
import Percentages from './Percentages';

export class Metrics extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dailyLogData: [],
    };
  }
  
  async componentDidMount() {
    const username = this.props.navigation.dangerouslyGetState().routes[0].params.username;

    try {
      const dailyLogData = await axios.get(`http://localhost:3000/dailylog/${username}/all`)
      console.log(dailyLogData.data);
      this.setState({dailyLogData: dailyLogData.data});
    } 
    catch (error) {
      console.log('Metrics error:',error);
    }
  }


  render() {
    // console.log('length: ', this.state.dailyLogData.length);
    const { dailyLogData } = this.state;

    return (
      <ScrollView>
        <Text style={styles.text}>Metrics</Text>
        <View style={styles.chart}>
          <View style={styles.container}>
            <Text style={styles.chartTitles}>Hours of Sleep</Text>
          </View>
          <LineCharts logData={dailyLogData} target={'sleep'}/>
        </View>
        <View style={styles.chart}>
          <View style={styles.container}>
            <Text style={styles.chartTitles}>Hours of Creative Work</Text>
          </View>
          <LineCharts logData={dailyLogData} target={'creativeHours'}/>
        </View>
        <View style={styles.chart}>
          <View style={styles.container}>
            <Text style={styles.chartTitles}>Subjective Feeling</Text>
          </View>
          <LineCharts logData={dailyLogData} target={'subjectiveFeel'}/>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flex:2}}>
              <Text style={styles.percentTitles}>Reading Percentages</Text>
            </View>
            <View style={{flex:1}}>
              <Percentages logData={dailyLogData} target={'read'} style={styles.percents}/>
            </View>
        </View>
        <View style={{flexDirection:"row"}}>
            <View style={{flex:2}}>
              <Text style={styles.percentTitles}>Workout Percentages</Text>
            </View>
            <View style={{flex:1}}>
              <Percentages logData={dailyLogData} target={'workout'}/>
            </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#FBFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#01BAEF',
      fontSize: 30,
    },
    chart: {
      marginLeft: 20,
      marginRight: 20,
    },
    chartTitles: {
      color: '#01BAEF',
      fontSize: 20,
    },
    percentTitles: {
      color: '#01BAEF',
      fontSize: 20,
      justifyContent: 'flex-start',
    },
    percents: {
      color: '#01BAEF',
      fontSize: 20,
      justifyContent: 'flex-end'
    },
});

export default Metrics;