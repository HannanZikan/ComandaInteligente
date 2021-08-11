import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../firebaseConfig'

import Background from '../components/Background' // imagem de background estilizada para a tela inteira
import Logo from '../../assets/images/logo.png'
import StyleIndex from '../styles/index'


export default props => {
    const goToEsqueciMinhaSenha2 = () => { props.navigation.navigate("EsqueciMinhaSenha2") }

    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const onChangeEmail = (email) => {
        setEmail(email)
    }
    const onChangeSenha = (senha) => {
        setSenha(senha)
    }

    return (
        <Background>
            <View style={StyleIndex.mainContainer}>
                <View style={StyleIndex.contentCenter}>
                    <View style={style.contentLogo}>
                        <Image
                            resizeMode='contain'
                            source={Logo}
                            style={style.logo} />

                    </View>

                    <TextInput
                        style={style.input}
                        value={senha}
                        secureTextEntry={true}
                        onChangeText={senha => setSenha(senha)}
                        placeholder="Digite sua nova senha"
                        placeholderTextColor="#606060" />

                    <TextInput
                        style={style.input}
                        value={confirmarSenha}
                        onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)}
                        secureTextEntry={true}
                        placeholder="Confirme sua nova senha"
                        placeholderTextColor="#606060" />

                    <TouchableOpacity style={style.button}
                        onPress={() => { }}>
                        <Text style={style.buttonText}>Redefinir Senha</Text>
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
    contentLogo: {
        marginBottom: 30,
    },
    textTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        // backgroundColor: '#ccc',
    },
    textMessage: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 330,
        // backgroundColor: '#ccc',
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
        marginTop: 30,
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

})