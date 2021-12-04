import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import Comandas from '../components/ComadandasFechadas'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToPerfilUsuario = () => { props.navigation.goBack() }

    const user = firebase.auth().currentUser

    const [listFire, setListFire] = useState('')
    useEffect(() => {
        try {
            firebase.database().ref('/ComandasFechadas/' + user.uid).on('value', (snapshot) => {
                const list = []
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        data: childItem.val().data,
                        estabelecimento: childItem.val().estabelecimento,
                        pagamento: childItem.val().pagamento,
                        shortId: childItem.val().shortId,
                        valorTotal: childItem.val().valorTotal,
                    })
                })
                setListFire(list)
            })
        } catch (error) {
            alert(error)
        }
    }, [])

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
                        Voltar para perfil
                    </Text>
                </TouchableOpacity>

                <View style={StylePerfil.content}>

                    <FlatList data={listFire}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        props.navigation.navigate("DetalheComandaFechada", item)
                                    }
                                }
                                keyComanda={item.key}
                                data={item.data}
                                estabelecimento={item.estabelecimento}
                                pagamento={item.pagamento}
                                shortId={item.shortId}
                                valorTotal={item.valorTotal}>
                                <Comandas
                                    keyComanda={item.key}
                                    data={item.data}
                                    estabelecimento={item.estabelecimento}
                                    pagamento={item.pagamento}
                                    shortId={item.shortId}
                                />
                            </TouchableOpacity>
                        } />

                </View>
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