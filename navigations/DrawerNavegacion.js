import React, {Component} from 'react'
import { createDrawerNavigator  } from '@react-navigation/drawer'
import {Text, View} from 'react-native'
import Home from '../screens/Home'
import Perfil from '../screens/Perfil'
import Logout from '../screens/Logout'
import {Icon} from 'react-native-elements'

const Drawer  = createDrawerNavigator ();

export default class StackNavegacion extends Component{
    render(){
        return(
            <Drawer.Navigator 
                initialRouteName = "Home" 
                drawerType = "slide" 
                drawerStyle = {{backgroundColor: "#d7d2cc", color: 'black'}}
                drawerContentOptions={{/*estilo de los item del menu drawer*/
                    activeTintColor: '#e91e63',
                    itemStyle: { justifyContent:'center' },
                  }}
                
            >
                    <Drawer.Screen name = "Home" component = {Home} labelStyle = {{color: 'white'}} />
                    <Drawer.Screen name = "Perfil" component = {Perfil} />
                    <Drawer.Screen name = "Logout" component = {Logout} />
            </Drawer.Navigator>
        )
    }
}  