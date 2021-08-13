import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/HeaderPerfil'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToPerfilUsuario = () => { props.navigation.goBack() }
    const goToAtualizarSenha = () => { props.navigation.navigate("AtualizarSenha") }

    const user = firebase.auth().currentUser;
    const [senha, setSenha] = useState('')

    // parei aqui
    // falta validar se a senha digitada é realmente a senha do usuário e encaminhar para a próxima tela
    function validarSenhaAtual() {
        const credential = promptForCredentials();
        if (credential == senha) {
            user.reauthenticateWithCredential(credential).then(() => {
                goToAtualizarSenha()
            }).catch((error) => {
                let errorMessage = error.message;
                Alert.alert("Erro", errorMessage)
            })

        }

        console.warn(user.displayName)
    }
    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <TouchableOpacity style={StylePerfil.containerNavegarSup}
                    onPress={goToPerfilUsuario}>
                    <Image resizeMode='contain'
                        source={SetaEsquerda}
                        style={StylePerfil.setaVoltar}
                    />
                    <Text style={StylePerfil.txtNagevarSup}>
                        Voltar perfil de usuário
                    </Text>
                </TouchableOpacity>

                <View style={StylePerfil.contentCentroSup}>
                    <TextInput
                        style={style.input}
                        value={senha}
                        onChangeText={senha => setSenha(senha)}
                        placeholder="Insira a sua senha atual"
                        placeholderTextColor="#606060" />


                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity style={style.btnAtualizar}
                        onPress={validarSenhaAtual}>
                        <Text style={style.txtAtualizar}>
                            Avançar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </Background>
    )
}

const style = StyleSheet.create({
    btnAtualizar: {
        width: 170,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 0,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtAtualizar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    input: {
        height: 30,
        width: 300,
        marginTop: 25,
        padding: 0,
        borderBottomWidth: 2,
        borderColor: '#FF6300',
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
})