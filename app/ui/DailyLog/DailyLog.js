import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';


export class DailyLog extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  //Will need a Get request that grabs today's data
  //Post / Put route to enter data into the database
  //Allow user to view previous days to make updates

  postLog(){

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Notes from the day</Text>
        <View style={styles.notesContainer}>
          <TextInput 
            placeholder='Notes' 
            style={styles.input}
            // onChangeText={}
          />
        </View>
        <Text style={styles.text}>Hours of Sleep</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Hours of sleep' 
            style={styles.input}
            // onChangeText={}
          />
        </View>
        <Text style={styles.text}>Total Creative Work Hours</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Creative Work Hours' 
            style={styles.input}
            // onChangeText={}
          />
        </View>
        <Text style={styles.text}>Subjective Feel today</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Subjective feel today' 
            style={styles.input}
            // onChangeText={}
          />
        </View>
        <Text style={styles.text}>Read</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='true/false' 
            style={styles.input}
            // onChangeText={}
          />
        </View>
        <Text style={styles.text}>Workout</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='true/false' 
            style={styles.input}
            // onChangeText={}
          />
        </View>
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
    },
    input: {
      backgroundColor: '#ffffff',
      paddingLeft: 15,
      paddingRight: 15
    },
    inputContainer: {
      borderWidth: 1,
      width: 200, 
    },
    notesContainer: {
      borderWidth: 1,
      width: 200,
      height: 100, 
    }
});

export default DailyLog;
