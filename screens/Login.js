import React, {Component} from 'react'
import {Text, View} from 'react-native'
import { TouchableOpacity , StyleSheet } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

export default class Login extends Component{
    constructor(props){
        super(props)
    }

    login = () => {
        this.props.navigation.navigate('DrawerNavegacion')
    }
    
    render(){
        return(
            <LinearGradient 
                    colors={['#5433ff', '#20bdff', "#a5fecb"]}
                    style = { style.container }>
                <View style = {style.container}>
                    <View style = {style.containerLogin}>
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
                        <Button 
                            containerStyle = {style.containerButton}
                            title = "Login" 
                            onPress = {this.login}
                        />
                    </View>
                    
                    <TouchableOpacity  onPress = {() => this.props.navigation.navigate("Register")}>
                        <Text style = {style.white}>Registrate</Text> 
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