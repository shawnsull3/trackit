import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './app/ui/Navbar';
import Login from './app/ui/Login';

function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Day" component={DayScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

{/* <View style={styles.container}>
<View style={styles.home}>
  <Text style={styles.text}>Welcome to trackIt </Text>
</View>
<Navbar />
</View> */}

function DayScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Day Screen...oooAAAAHHHHHH!</Text>
      <Text>FIGHTER OF THE NIGHT SCREEN... oooAAAHHH!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.text}>Please login</Text>
        <Login />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2A2D34',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'trackIt'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFF',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
  },
  home: {
    flex: 10,
    backgroundColor: '#FBFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#01BAEF',
    fontSize: 30,
  }
});
