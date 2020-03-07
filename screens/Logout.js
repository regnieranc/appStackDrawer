import React, {Component} from 'react'
import { View } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import {StyleSheet} from 'react-native'

export default class Logout extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        return this.props.navigation.navigate('Login')
    }

    render(){
        return(
            <LinearGradient 
                colors={['#5433ff', '#20bdff', "#a5fecb"]}
                style = { style.container }>
            </LinearGradient>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLogin: {
        width: 300,
        paddingTop: 20,
        paddingBottom: 20
    },
    containerInput: {
        marginBottom: 10,
        borderColor: 'white'
    },
    containerButton: {
        marginTop: 20,
        width: 280,
        alignSelf: 'center'
    },
    white: {
        color: 'white'
    }
})