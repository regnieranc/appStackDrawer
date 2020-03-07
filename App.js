import React from 'react'
import {StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import StackNavegacion from './navigations/StackNavegacion';


export default class App extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <StackNavegacion />
            </NavigationContainer>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});