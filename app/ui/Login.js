import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

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
    this.setState({username: input.toLowerCase()});
  }

  handlePassword(input) {
    this.setState({password: input});
  }

  render() {
    const { navigation } = this.props;
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.home}>
          <Text style={styles.text}>Please login</Text>
          <Text>Username</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Username Here' 
              style={styles.input}
              onChangeText={text => this.handleUsername(text)}
            />
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
          <TouchableOpacity onPress={() => navigation.navigate('Home', {
            screen: 'Daily Log',
            params: {username: username},
          })}>
            <Text>Login</Text>
          </TouchableOpacity>
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
    margin: 10, 
  },
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

export default Login;
