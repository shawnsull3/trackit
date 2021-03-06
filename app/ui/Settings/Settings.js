import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


export class Settings extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
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

export default Settings;