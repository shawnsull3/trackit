import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './app/ui/Login';
import DailyLog from './app/ui/DailyLog/DailyLog';
import Metrics from './app/ui/Metrics/Metrics';
import Settings from './app/ui/Settings/Settings';

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

function HomeScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
      activeTintColor: '#01BAEF',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 20,
      },
      style: {
        backgroundColor: '#2A2D34',
      },
      }}
    >
      <Tab.Screen name="Daily Log" component={DailyLog} />
      <Tab.Screen name="Metrics" component={Metrics} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
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
