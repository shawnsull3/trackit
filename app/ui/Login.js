import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

export class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(input) {
    this.setState({password: input.toLowerCase()});
  }

  handlePassword(input) {
    this.setState({password: input});
  }

  render() {
    return (
      <View>
        <Text>Username</Text>
        <View style={styles.inputContainer}>
          {console.log('in render', this.state.password)}
          <TextInput
            placeholder='Username Here' 
            style={styles.input}
            onChangeText={text => this.handleUsername(text)}
          />
          {console.log(this.state.username)}
        </View>
        <Text>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            secureTextEntry={true}
            placeholder='Password Here' 
            style={styles.input}
            onChangeText={text => this.handlePassword(text)}
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
    borderWidth: 1,
    width: 150, 
  }
});

export default Login;
