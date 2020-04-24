import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';


export class Metrics extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dailyLogData: []
    };
  }
  
  async componentDidMount() {
    const username = this.props.navigation.dangerouslyGetState().routes[0].params.username;
    console.log(username);
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
    console.log('length: ', this.state.dailyLogData.length);
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Metrics</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FBFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#01BAEF',
      fontSize: 30,
    }
});

export default Metrics;