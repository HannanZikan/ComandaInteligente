import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToPerfilUsuario = () => { props.navigation.goBack() }

    // const user = firebase.auth().currentUser
    const [senhaAtual, setSenhaAtual] = useState('')
    const [senhaNova, setSenhaNova] = useState('')
    const [confirmarSenhaNova, setConfirmarSenhaNova] = useState('')

    function zerarCampos() {
        setSenhaAtual('')
        setSenhaNova('')
        setConfirmarSenhaNova('')
    }

    function reautenticar(senhaAtual) {
        // reautenticar = (senhaAtual) => {
        var user = firebase.auth().currentUser
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, senhaAtual)

        return user.reauthenticateWithCredential(cred)
    }

    function alterarSenha() {
        // alterarSenha = () => {
        var user = firebase.auth().currentUser
        reautenticar(senhaAtual).then(() => {
            user.updatePassword(senhaNova).then(() => {
                Alert.alert("Sucesso", "Sua senha foi alterada com sucesso!")
                zerarCampos()
            }).catch((error) => {
                Alert.alert("Erro!", error.message)
            });
        }).catch((error) => {
            Alert.alert("Erro!", error.message)
        })
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
                        value={senhaAtual}
                        onChangeText={senhaAtual => setSenhaAtual(senhaAtual)}
                        secureTextEntry={true}
                        placeholder="Insira a sua senha atual"
                        placeholderTextColor="#606060" />

                    <TextInput
                        style={style.input}
                        value={senhaNova}
                        onChangeText={senhaNova => setSenhaNova(senhaNova)}
                        secureTextEntry={true}
                        placeholder="Insira a sua nova senha"
                        placeholderTextColor="#606060" />

                    <TextInput
                        style={style.input}
                        value={confirmarSenhaNova}
                        onChangeText={confirmarSenhaNova => setConfirmarSenhaNova(confirmarSenhaNova)}
                        secureTextEntry={true}
                        placeholder="Confirme a sua nova senha"
                        placeholderTextColor="#606060" />


                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity style={style.btnAtualizar}
                        onPress={alterarSenha}
                    >
                        <Text style={style.txtAtualizar}>
                            Trocar Senha
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
        fontSize: 18,
        fontFamily: 'roboto',
        fontWeight: 'bold',
        color: '#FFF',
    },
})