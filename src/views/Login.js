import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Background from '../components/Background' // imagem de background estilizada para a tela inteira
import Logo from '../../assets/images/logo.png'
import StyleIndex from '../styles/index'


export default props => {
    const [text, onChangeText] = useState()
    const goToCheckIn = () => {props.navigation.navigate("CheckIn")} 
    const goToCadastrar = () => {props.navigation.navigate("CadastrarUsuario")} 

    return (
        <Background>
            <View style={StyleIndex.container}>

                <Image
                    resizeMode='contain'
                    source={Logo}
                    style={style.logo} />

                <TextInput
                    style={style.input}
                    value={text}
                    placeholder="EMAIL"
                    placeholderTextColor="#FFF" />

                <TextInput
                    style={style.input}
                    value={text}
                    secureTextEntry={true}
                    placeholder="SENHA"
                    placeholderTextColor="#FFF" />

                <TouchableOpacity style={style.button}
                    onPress={goToCheckIn}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={StyleIndex.containerRow}>
                    <TouchableOpacity
                        onPress={goToCadastrar}>
                        <Text style={style.buttonRow}>Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={style.buttonRow}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>

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
        fontSize: 18,
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