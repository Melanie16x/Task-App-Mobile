import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import MainScreen from './index';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen'
import SeeTaskScreen from './SeeTaskScreen'
import EditScreen from './EditScreen'
import SettingScreen from './SettingScreen'
import AddTaskScreen from './AddTaskScreen'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={MainScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SeeTaskScreen" component={SeeTaskScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="EditScreen" component={EditScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}