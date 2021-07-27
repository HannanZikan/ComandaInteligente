import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../firebaseConfig'

import Background from '../components/Background' // imagem de background estilizada para a tela inteira
import Logo from '../../assets/images/logo.png'
import StyleIndex from '../styles/index'


export default props => {
    const [text, onChangeText] = useState()
    const goToCheckIn = () => { props.navigation.navigate("CheckIn") }
    const goToCadastrar = () => { props.navigation.navigate("CadastrarUsuario") }

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const onChangeEmail = (email) => {
        setEmail(email)
    }
    const onChangeSenha = (senha) => {
        setSenha(senha)
    }

    function login() {
        if (email && senha) {
            firebase.auth().signInWithEmailAndPassword(email, senha)
                .then(() => {
                    goToCheckIn()
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.warn(error.message)
                });
        }
    }
    return (
        <Background>
            <View style={StyleIndex.container}>

                <Image
                    resizeMode='contain'
                    source={Logo}
                    style={style.logo} />

                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={email => onChangeEmail(email)}
                    placeholder="E-mail"
                    placeholderTextColor="#606060" />

                <TextInput
                    style={style.input}
                    value={senha}
                    onChangeText={senha => onChangeSenha(senha)}
                    secureTextEntry={true}
                    placeholder="Senha"
                    placeholderTextColor="#606060" />

                <TouchableOpacity style={style.button}
                    onPress={login}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={StyleIndex.containerRow}>
                    <TouchableOpacity
                        onPress={goToCadastrar}>
                        <Text style={style.buttonRow}>Cadastrar-se</Text>
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
        fontSize: 18,
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