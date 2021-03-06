import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import firebase from '../../firebaseConfig'

import Background from '../components/Background' // imagem de background estilizada para a tela inteira
import Logo from '../../assets/images/logo.png'
import StyleIndex from '../styles/index'

export default props => {
    const goToLogin = () => {
        props.navigation.goBack()
        zerarCampos()
    }

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    function zerarCampos() {
        setNome('')
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
    }
    function criarConta() {
        if (nome) {
            if (email) {
                if (senha && confirmarSenha) {
                    if (senha === confirmarSenha) {
                        firebase.auth().createUserWithEmailAndPassword(email, senha)
                            .then(() => {
                                cadastrarPerfil()
                            })
                            .catch((error) => {
                                var errorMessage = error.message;
                                Alert.alert(errorMessage)
                            })
                    } else {
                        alert('Os campos "Senha" e "Confirmar Senha" devem ser iguais!')
                    }

                } else {
                    alert('Os campos "Senha" e "Confirmar Senha" são obrigatórios!')
                }
            } else {
                alert('O campo "Email" é obrigatório!')
            }
        } else {
            alert('O campo "Nome" é obrigatório!')
        }
    }

    function cadastrarPerfil() {
        const logar = firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => {
                const user = firebase.auth().currentUser
                user.updateProfile({
                    displayName: nome
                }).then(() => {
                    zerarCampos()
                    Alert.alert("Sucesso", "Usuário cadastrado com sucesso!")
                    goToLogin()
                }).catch((error) => {
                    Alert.alert(error)
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Alert.alert(errorMessage)
            });
    }

    return (
        <Background>
            <View style={[StyleIndex.mainContainer, StyleIndex.contentCenter]}>

                <Image
                    resizeMode='contain'
                    source={Logo}
                    style={style.logo} />

                <TextInput
                    style={style.input}
                    value={nome}
                    onChangeText={nome => setNome(nome)}
                    placeholder="Nome"
                    placeholderTextColor="#606060" />

                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    placeholder="E-mail"
                    placeholderTextColor="#606060" />

                <TextInput
                    style={style.input}
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={senha => setSenha(senha)}
                    placeholder="Senha"
                    placeholderTextColor="#606060" />

                <TextInput
                    style={style.input}
                    value={confirmarSenha}
                    onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)}
                    secureTextEntry={true}
                    placeholder="Confirme sua senha"
                    placeholderTextColor="#606060" />

                <TouchableOpacity style={style.button}
                    onPress={criarConta}>
                    <Text style={style.buttonText}>Cadastrar</Text>
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
        height: 30,
        width: 300,
        margin: 15,
        padding: 0,
        borderBottomWidth: 2,
        borderColor: '#FF6300',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
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