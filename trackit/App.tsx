import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './app/ui/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      {console.log('hi')}
      <Text style={styles.text}>why won't this change??</Text>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 30,
  }
});
