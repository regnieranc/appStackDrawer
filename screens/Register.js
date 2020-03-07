import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Input, Icon, Button } from 'react-native-elements'

export default class Register extends Component{
    render(){
        return(
            <LinearGradient 
                    colors={['#5433ff', '#20bdff', "#a5fecb"]}
                    style = { style.container }>
                <View style = { style.container }>
                    <View style = {style.containerLogin}>
                        <Input
                            inputContainerStyle = {style.containerInput}
                            inputStyle = {style.white}
                            placeholder='Nombre'
                            leftIcon={ <Icon
                                            containerStyle = {{marginRight: 6}}
                                            name='user'
                                            type='font-awesome'
                                            color = "white"
                                        /> }
                        />
                        <Input
                            inputContainerStyle = {style.containerInput}
                            inputStyle = {style.white}
                            placeholder='Email'
                            leftIcon={ <Icon
                                            containerStyle = {{marginRight: 6}}
                                            name='user'
                                            type='font-awesome'
                                            color = "white"
                                        /> }
                        />
                        <Input
                            inputContainerStyle = {style.containerInput}
                            inputStyle = {style.white}
                            placeholder='Contraseña'
                            leftIcon={ <Icon
                                            containerStyle = {{marginRight: 6}}
                                            name='lock'
                                            type='font-awesome'
                                            color = "white"
                                        /> }
                        />
                        <Input
                            inputContainerStyle = {style.containerInput}
                            inputStyle = {style.white}
                            placeholder='Repite contraseña'
                            leftIcon={ <Icon
                                            containerStyle = {{marginRight: 6}}
                                            name='lock'
                                            type='font-awesome'
                                            color = "white"
                                        /> }
                        />
                        <Button 
                            containerStyle = {style.containerButton}
                            title = "Registrarse" 
                        />
                    </View>
                    <TouchableOpacity  onPress = {() => this.props.navigation.goBack()}>
                        <Text style = {style.white}>Login</Text> 
                    </TouchableOpacity > 
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