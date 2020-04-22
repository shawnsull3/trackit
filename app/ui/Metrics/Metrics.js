import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


export class Metrics extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // Going to need a lot of get routes most likely

  render() {
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