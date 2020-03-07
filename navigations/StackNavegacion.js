import React, {Component} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import DrawerNavegacion from './DrawerNavegacion'

const Stack = createStackNavigator();

export default class StackNavegacion extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName = "Login" screenOptions = {{headerShown: false}}>
                <Stack.Screen name = "Login" component = {Login} />
                <Stack.Screen name = "Register" component = {Register} />
                <Stack.Screen name = "DrawerNavegacion" component = {DrawerNavegacion} />
            </Stack.Navigator>
        )
    }
}