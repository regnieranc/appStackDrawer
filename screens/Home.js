import React, {Component} from 'react'
import { View, Text } from 'native-base'
import {StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <LinearGradient 
                colors={['#5433ff', '#20bdff', "#a5fecb"]}
                style = { style.container }>
                <View>
                    <Text>
                        Home
                    </Text>
                </View>
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