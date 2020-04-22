import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


export class DailyLog extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  //Will need a Get request that grabs today's data
  //Post / Put route to enter data into the database
  //Allow user to view previous days to make updates

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Daily Log</Text>
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

export default DailyLog;
