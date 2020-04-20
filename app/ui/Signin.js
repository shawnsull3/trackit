import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

export class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View>
        <Text>Username</Text>
        <TextInput placeholder='Username Here' />
        <Text>Password</Text>
        <TextInput placeholder='Password Here' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  signinContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  signinText: {
    color: 'blue',
    fontSize: 30,
    alignSelf: 'center',
  }
});

export default Signin
