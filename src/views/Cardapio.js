import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'
import Slogan from '../../assets/images/slogan.png'
import StyleIndex from '../styles/index'
import ItemCardapio from '../components/ItemCardapio'

export default props => {
    const goToPedidos = () => { props.navigation.navigate("Pedidos") }
    const [listFire, setListFire] = useState('')

    useEffect(() => {
        try {
            firebase.database().ref('/Cardapio').once('value', (snapshot) => {
                const list = []
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        nome: childItem.val().nome,
                        descricao: childItem.val().descricao,
                        valor: childItem.val().valor,
                        status: childItem.val().status,
                    })
                })
                setListFire(list)
            })
        } catch (error) {
            alert(error)
        }
    }, [])


    let listaPedidos = []
    function montarPedido(listaDoComponente) {
        listaPedidos.push(listaDoComponente)
        return listaPedidos
    }

    function pushFire(listaPedidos) {
        try {
            // console.warn(listaPedidos)
            var pedidoListRef = firebase.database().ref('/Pedidos');
            var newPostRef = pedidoListRef.push();
            newPostRef.set({
                nome: listaPedidos.nome,
                descricao: listaPedidos.descricao,
                status: "em andamento",
                valor: listaPedidos.valorTotal,
                observacao: listaPedidos.obs
            })
            // firebase.database().ref('/Pedidos').push({
            //     nome: listaPedidos.nome,
            //     descricao: listaPedidos.descricao,
            //     status: "em andamento",
            //     valor: listaPedidos.valorTotal,
            //     observacao: listaPedidos.obs
            // })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Cardápio
                    </Text>
                </View>

                <View style={StyleIndex.content}>


                    <FlatList data={listFire}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                            <ItemCardapio
                                nome={item.nome}
                                valor={item.valor}
                                descricao={item.descricao}
                                montarPedido={montarPedido}
                            />

                        } />

                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity
                        style={style.btnPedir}
                        onPress={
                            pushFire
                        }>
                        <Text style={style.txtPedir}>
                            Pedir
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    btnPedir: {
        width: 100,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtPedir: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    teste: {
        backgroundColor: '#FFF',
    }
})