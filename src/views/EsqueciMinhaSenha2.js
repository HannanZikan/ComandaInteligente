import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../firebaseConfig'

import Background from '../components/Background' // imagem de background estilizada para a tela inteira
import Logo from '../../assets/images/logo.png'
import StyleIndex from '../styles/index'


export default props => {
    const goToEsqueciMinhaSenha3 = () => { props.navigation.navigate("EsqueciMinhaSenha3") }

    const [email, setEmail] = useState('')
    const [char, setChar] = useState('')
    const [char1, setChar1] = useState('')
    const [char2, setChar2] = useState('')
    const [char3, setChar3] = useState('')
    const [char4, setChar4] = useState('')
    const [char5, setChar5] = useState('')

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

                    <Text style={style.textMessage}>
                        Insira aqui o código de redefinição de senha.
                    </Text>

                    <View style={style.contentInput}>
                        <TextInput
                            style={style.inputEmail}
                            value={char}
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={char => setChar(char)}
                            placeholderTextColor="#606060" />
                        <TextInput
                            style={style.inputEmail}
                            value={char1}
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={char1 => setChar1(char1)}
                            placeholderTextColor="#606060" />
                        <TextInput
                            style={style.inputEmail}
                            value={char2}
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={char2 => setChar2(char2)}
                            placeholderTextColor="#606060" />
                        <TextInput
                            style={style.inputEmail}
                            value={char3}
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={char3 => setChar3(char3)}
                            placeholderTextColor="#606060" />
                        <TextInput
                            style={style.inputEmail}
                            value={char4}
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={char4 => setChar4(char4)}
                            placeholderTextColor="#606060" />
                        <TextInput
                            style={style.inputEmail}
                            value={char5}
                            keyboardType='numeric'
                            maxLength={1}
                            onChangeText={char5 => setChar5(char5)}
                            placeholderTextColor="#606060" />

                    </View>

                    <TouchableOpacity style={style.button}
                        onPress={(goToEsqueciMinhaSenha3)}>
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
    contentInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ccc',
    },
    inputEmail: {
        height: 50,
        width: 50,
        margin: 5,
        marginTop: 20,
        padding: 0,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FF6300',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    button: {
        height: 50,
        width: 300,
        margin: 20,
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