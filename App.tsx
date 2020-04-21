import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from './app/ui/Navbar';
import Signin from './app/ui/Signin';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.mainArea}>
          <Text style={styles.text}>Welcome to trackIt </Text>
          <Signin />
        </View>
        <Navbar />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  mainArea: {
    flex: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30,
  }
});
