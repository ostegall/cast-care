import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import Selection1 from './src/screens/Selection1';
import Selection2 from './src/screens/Selection2';
import Selection3 from './src/screens/Selection3';
import Selection4 from './src/screens/Selection4';
import Selection5 from './src/screens/Selection5';
import Selection6 from './src/screens/Selection6';
import Selection7 from './src/screens/Selection7';
import Selection8 from './src/screens/Selection8';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4B9CD3'
            },
                headerTintColor: '#fff'
            }} 
          initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="S1" component={Selection1} />
        <Stack.Screen name="S2" component={Selection2} />
        <Stack.Screen name="S3" component={Selection3} />
        <Stack.Screen name="S4" component={Selection4} />
        <Stack.Screen name="S5" component={Selection5} />
        <Stack.Screen name="S6" component={Selection6} />
        <Stack.Screen name="S7" component={Selection7} />
        <Stack.Screen name="S8" component={Selection8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
