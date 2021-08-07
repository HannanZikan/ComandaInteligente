import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/HeaderPerfil'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import Cartoes from '../components/Cartoes'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToCadastrarCartao = () => { props.navigation.navigate("CadastrarCartao") }
    const goToPerfilUsuario = () => { props.navigation.goBack() }

    const [listFire, setListFire] = useState('')
    useEffect(() => {
        try {
            firebase.database().ref('/Cartoes').on('value', (snapshot) => {
                const list = []
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        bandeira: childItem.val().bandeira,
                        tipo: childItem.val().tipo,
                        numeroCartao: childItem.val().numeroCartao
                    })
                })
                setListFire(list)
            })
        } catch (error) {
            alert(error)
        }
    }, [])

    function delFire(key) {
        try {
            firebase.database().ref('/Cartoes/' + key).remove()
        } catch (error) {
            alert(error)
        }

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

                <View style={StylePerfil.content}>

                    <FlatList data={listFire}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                            <Cartoes
                                keyCartao={item.key}
                                apagaCartao={delFire}
                                bandeira={item.bandeira}
                                tipo={item.tipo}
                                numero={item.numeroCartao}
                            />
                        } />
                </View>

            </View>
            <View style={StyleIndex.footerContainer}>
                <TouchableOpacity style={style.btnAdicionarCartao}
                    onPress={goToCadastrarCartao}>
                    <Text style={style.txtAdicionarCartao}>
                        Adicionar novo cartão
                    </Text>
                </TouchableOpacity>
            </View>


        </Background>
    )
}

const style = StyleSheet.create({
    btnAdicionarCartao: {
        width: 360,
        height: 50,
        backgroundColor: '#FF6300',
        padding: 0,
        // marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtAdicionarCartao: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
    },
})