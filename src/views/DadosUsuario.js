import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, RefreshControl } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/HeaderPerfil'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToPerfilUsuario = () => { props.navigation.goBack() }
    const goToDadosUsuario = () => { props.navigation.navigate("DadosUsuario") }

    const user = firebase.auth().currentUser;
    const [nome, setNome] = useState(user.displayName)
    const [email, setEmail] = useState(user.email)

    function atualizarDados() {
        user.updateProfile({
            displayName: nome,
            email: email
        }).then(() => {
            goToDadosUsuario()
        }).catch((error) => {
            alert(error)
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
                        Voltar para meus dados
                    </Text>
                </TouchableOpacity>

                <View style={StylePerfil.contentCentroSup}>
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

                </View>

            </View>
            <View style={StyleIndex.footerContainer}>
                <TouchableOpacity style={style.btnAtualizar}
                    onPress={
                        atualizarDados
                    }>
                    <Text style={style.txtAtualizar}>
                        Atualizar
                    </Text>
                </TouchableOpacity>
            </View>


        </Background>
    )
}

const style = StyleSheet.create({
    btnAtualizar: {
        width: 360,
        height: 50,
        backgroundColor: '#FF6300',
        padding: 0,
        // marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtAtualizar: {
        fontSize: 32,
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