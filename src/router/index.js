import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../pages/Home';
import Splash from '../pages/Splash';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown:  false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown:  false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})