import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import TextInputHelper from '../../helpers/TextInputHelper';


export class DailyLog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      date: new Date(),
      notes: '',
      sleep: null,
      creativeHours: '',
      subjectiveFeel: null,
      read: '',
      workout: ''
    };
    this.postLog = this.postLog.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  componentDidMount() {
    const username = this.props.route.params.username;
    this.setState({username})

    //eventually make axios getTodaysLog call
  }

  handleText(event) {
    const { name, text, type } = event

    if (type == 'number') {
      let num = Number(text) * 1;
      this.setState({[name]: num})
    } else if (name === 'notes'){
      this.setState({[name]: text})
    } else {
      this.setState({[name]: text.toLowerCase()})
    }
  }

  async postLog() {
    const {username, date, notes, sleep, creativeHours, subjectiveFeel, read, workout }= this.state;
    let dailylog = {
      username,
      date,
      notes,
      sleep,
      creativeHours,
      subjectiveFeel,
      read,
      workout
    };
    try {
      const res = await axios.post('http://localhost:3000/dailylog/', dailylog);
      console.log(res.status);
    } 
    catch (error) {
      console.log(error);
    } 
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Notes from the day</Text>
        <View style={styles.notesContainer}>
          <TextInputHelper 
            name='notes' 
            type='text' 
            value={this.state.notes} 
            onChange={this.handleText} 
            style={styles.input}
            placeholder='Notes' 
          />
        </View>
        <Text style={styles.text}>Hours of Sleep</Text>
        <View style={styles.inputContainer}>
          <TextInputHelper 
            name='sleep' 
            type='number' 
            value={this.state.sleep} 
            onChange={this.handleText} 
            style={styles.input}
            placeholder='Hours of sleep' 
          />
        </View>
        <Text style={styles.text}>Total Creative Work Hours</Text>
        <View style={styles.inputContainer}>
          <TextInputHelper 
            name='creativeHours' 
            type='number' 
            value={this.state.creativeHours} 
            onChange={this.handleText} 
            style={styles.input}
            placeholder='Creative Hours Worked' 
          />
        </View>
        <Text style={styles.text}>Subjective Feel today</Text>
        <View style={styles.inputContainer}>
          <TextInputHelper 
            name='subjectiveFeel' 
            type='number' 
            value={this.state.subjectFeel} 
            onChange={this.handleText} 
            style={styles.input}
            placeholder='0 - 10' 
          />
        </View>
        <Text style={styles.text}>Read</Text>
        <View style={styles.inputContainer}>
          <TextInputHelper 
            name='read' 
            type='text' 
            value={this.state.read} 
            onChange={this.handleText} 
            style={styles.input}
            placeholder='true/false' 
          />
        </View>
        <Text style={styles.text}>Workout</Text>
        <View style={styles.inputContainer}>
          <TextInputHelper 
            name='workout' 
            type='text' 
            value={this.state.workout} 
            onChange={this.handleText} 
            style={styles.input}
            placeholder='true/false' 
          />
        </View>
        <TouchableOpacity onPress={() => this.postLog()}>
          <Text style={styles.text}>Save Log</Text>
        </TouchableOpacity>
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
      margin: 10
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
    }
});

export default DailyLog;

// let dateCheck = new Date()
//     if (this.state.date.setHours(0,0,0,0) === dateCheck.setHours(0,0,0,0)) {
//       console.log('equal')
//       // put 
//     } else {
//       // post
//     }