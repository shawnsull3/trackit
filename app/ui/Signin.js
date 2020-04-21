import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

export class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      textInputValue: ''
    };
    this.handleText = this.handleText.bind(this);
  }

  handleText(input) {
    console.log(this.state.textInputValue);
    console.log(input.toLowerCase());

    this.setState({textInputValue: input});
  }

  render() {
    return (
      <View>
        <Text>Username</Text>
        <View style={styles.inputContainer}>
          {console.log('in render', this.state.textInputValue)}
          <TextInput 
            value={this.state.textInputValue}
            placeholder='Username Here' 
            style={styles.input}
            onChangeText={text => this.handleText(text)}
          />
          {console.log(this.state.username)}
        </View>
        <Text>Password</Text>
        <View style={styles.inputContainer}>
        <TextInput 
            value={this.state.textInputValue}
            placeholder='Password Here' 
            style={styles.input}
            onChangeText={text => this.handleText(text)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  },
  inputContainer: {
    borderWidth: 1
  }
});

export default Signin
