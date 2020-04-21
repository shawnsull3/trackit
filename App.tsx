import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './app/ui/Navbar';
import Signin from './app/ui/Signin';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.text}>Welcome to trackIt </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
      <Navbar />
    </View>
  )
}

function SigninScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.text}>Please Sign in </Text>
        <Signin />
      </View>
      <Navbar />
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'trackIt'}}/>
        <Stack.Screen name="Signin" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
  },
  home: {
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


// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <View style={styles.home}>
//           <Text style={styles.text}>Welcome to trackIt </Text>
//           <Signin />
//         </View>
//         <Navbar />
//       </View>
//     </NavigationContainer>
//   );
// }
