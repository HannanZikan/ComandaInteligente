import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../firebaseConfig'

import Background from '../components/Background' // imagem de background estilizada para a tela inteira
import Logo from '../../assets/images/logo.png'
import StyleIndex from '../styles/index'


export default props => {
    const goToEsqueciMinhaSenha2 = () => { props.navigation.navigate("EsqueciMinhaSenha2") }

    const [email, setEmail] = useState('')

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

                    <Text style={style.textTitle}>
                        Esqueceu sua Senha?
                    </Text>
                    <Text style={style.textMessage}>
                        Por favor, informe o seu e-mail que enviaremos um
                        código para redefinir sua senha.
                    </Text>

                    <TextInput
                        style={style.inputEmail}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        placeholder="Informe seu e-mail"
                        placeholderTextColor="#606060" />

                    <TouchableOpacity style={style.button}
                        onPress={goToEsqueciMinhaSenha2}>
                        <Text style={style.buttonText}>Enviar</Text>
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
    inputEmail: {
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