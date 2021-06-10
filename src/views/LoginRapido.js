import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Background from '../components/Background' // imagem de background estilizada para a tela inteira
import Logo from '../../assets/images/logo.png'
import FacebookIcon from '../../assets/images/facebookicon.png'
import GoogleIcon from '../../assets/images/googleicon.png'
import StyleIndex from '../styles/index'


export default props => {
    const [text, onChangeText] = useState()
    const goToLogin = () => {props.navigation.navigate("Login")} 

    return (
        <Background>
            <View style={StyleIndex.container}>

                <Image
                    resizeMode='contain'
                    source={Logo}
                    style={style.logo} />

                <TouchableOpacity style={style.button}
                    onPress={goToLogin}>
                    <Text style={style.buttonText}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonFacebook}>
                    <View style={StyleIndex.containerRow}>
                        <Image
                            resizeMode='contain'
                            source={FacebookIcon}
                            style={style.buttonIcon}
                        />
                        <Text style={style.buttonTextFacebook}>Entrar com Facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonGmail}>
                <View style={StyleIndex.containerRow}>
                        <Image
                            resizeMode='contain'
                            source={GoogleIcon}
                            style={style.buttonIcon}
                        />
                        <Text style={style.buttonTextGmail}>Entrar com Gmail</Text>
                    </View>
                    
                </TouchableOpacity>

            </View>
        </Background>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 180,
        height: 180,
    },
    input: {
        height: 50,
        width: 300,
        margin: 15,
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#FF6300',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    },
    button: {
        height: 50,
        width: 300,
        margin: 15,
        borderRadius: 25,
        backgroundColor: '#FF6300',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonFacebook: {
        height: 50,
        width: 300,
        margin: 15,
        borderRadius: 25,
        backgroundColor: '#3B5998',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextFacebook: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonGmail: {
        height: 50,
        width: 300,
        margin: 15,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextGmail: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    buttonIcon: {
        width: 25,
        height: 25,
        marginEnd: 10,
    },
    buttonRow: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        margin: 15
    },

})