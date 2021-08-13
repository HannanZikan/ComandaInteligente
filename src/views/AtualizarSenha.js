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

    const user = firebase.auth().currentUser;
    const [novaSenha, setNovaSenha] = useState('')
    const [ConfirmarNovaSenha, setConfirmarNovaSenha] = useState('')

    function atualizarSenha() {
        const newPassword = getASecureRandomPassword();

        user.updatePassword(newPassword).then(() => {
            Alert.alert("Sucesso", "Senha alterada com sucesso!")
            goToPerfilUsuario()
        }).catch((error) => {
            let errorMessage = error.message;
            Alert.alert("Erro", errorMessage)
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
                        value={novaSenha}
                        onChangeText={novaSenha => novaSenha(novaSenha)}
                        placeholder="Insira a sua nova senha"
                        placeholderTextColor="#606060" />
                    <TextInput
                        style={style.input}
                        value={ConfirmarNovaSenha}
                        onChangeText={ConfirmarNovaSenha => setConfirmarNovaSenha(ConfirmarNovaSenha)}
                        placeholder="Confirme a sua nova senha"
                        placeholderTextColor="#606060" />


                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity style={style.btnAtualizar}>
                        <Text style={style.txtAtualizar}>
                            Atualizar
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