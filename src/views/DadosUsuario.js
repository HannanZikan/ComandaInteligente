import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'
import { ScrollView } from 'react-native-gesture-handler'

export default props => {
    const goToPerfilUsuario = () => { props.navigation.goBack() }
    const goToAtualizarSenha = () => { props.navigation.navigate("AtualizarSenha") }

    const user = firebase.auth().currentUser;
    const uid = user.uid
    const [nome, setNome] = useState(user.displayName)
    const [email, setEmail] = useState(user.email)
    const [cpf, setCPF] = useState([])

    useEffect(() => {
        try {
            firebase.database().ref('Usuarios/' + uid)
                .on('value', (snapshot) => {
                    // const list = []
                    snapshot.forEach((childItem) => {
                        setCPF({
                            cpf: childItem.val().cpf,
                        })
                    })
                    // setCPF(list)
                    // console.log(list)
                })
        } catch (error) {
            alert(error)
        }
    }, [])

    function getCpf() {
        const list = []
        try {
            firebase.database().ref('Usuarios/' + uid)
                .on('value', (snapshot) => {
                    // const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            cpf: childItem.val().cpf,
                        })
                    })
                    // setCPF(list)
                    // console.log(list)
                })
            return list
        } catch (error) {
            alert(error)
        }
    }

    function criarCadastroUsuario() {
        try {
            firebase.database().ref('Usuarios/' + uid).set({
                nome: nome,
                email: email,
                cpf: cpf
            })
        } catch (error) {
            alert(error);
        }
    }

    function atualizarCadastroUsuario(uid, nome, email, cpf) {
        try {
            firebase.database().ref('Usuarios/' + uid).set({
                nome: this.nome,
                email: this.email,
                cpf: this.cpf
            })
        } catch (error) {
            alert(error);
        }
    }

    function atualizarFirebasePerfil() {
        user.updateProfile({
            displayName: nome,
            email: email,
            cpf: cpf
        }).then(() => {
            goToDadosUsuario()
        }).catch((error) => {
            let errorMessage = error.message;
            Alert.alert("Erro", errorMessage)
        })
    }

    return (
        <Background>
            <Header />
            <KeyboardAvoidingView
                behavior="height"
                keyboardVerticalOffset={80}
                style={StyleIndex.mainContainer}>
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
                    <ScrollView>
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
                            value={cpf}
                            keyboardType="numeric"
                            onChangeText={cpf => setCPF(cpf)}
                            placeholder="CPF"
                            placeholderTextColor="#606060" />
                    </ScrollView>
                </View>

                <View style={StyleIndex.footerContaineSpace}>
                    <TouchableOpacity style={style.btnAtualizar}>
                        <Text style={style.txtAtualizar}
                            onPress={
                                goToAtualizarSenha
                            }>

                            Trocar Senha
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.btnAtualizar}
                        onPress={
                            atualizarCadastroUsuario
                            // criarCadastroUsuario
                            // console.log("nada")
                        }>
                        {/* > */}
                        <Text style={style.txtAtualizar}>
                            Atualizar dados
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>


        </Background>
    )
}

const style = StyleSheet.create({
    btnAtualizar: {
        width: 170,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 0,
        // marginRight: 30,
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