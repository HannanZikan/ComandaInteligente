import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'
import StyleIndex from '../styles/index'
import ItemCardapio from '../components/ItemCardapioSimples'

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

    let modelo = { // apenas para ter uma clareza de como os dados serão cadastrados no banco
        "IdPedidox": {
            "item1": {
                "nome": "teste",
                "descricao": "descricao",
                "valorTotal": 15,
                "observacao": "obs",
                "qtde": "2",
                "status": "em andamento"
            },
            "item2": {
                "nome": "teste",
                "descricao": "descricao",
                "valorTotal": 15,
                "observacao": "obs",
                "qtde": "2",
                "status": "em andamento"
            }
        },
        "pedidoz": {
            "item1": {
                "nome": "teste",
                "descricao": "descricao",
                "valorTotal": 15,
                "observacao": "obs",
                "qtde": "2",
                "status": "em andamento"
            },
        },
    }

    const [listaPedidos, setListaPedidos] = useState([])
    const [pedidoMontado, setPedidoMontado] = useState({})

    function montarPedido(objDoComponente) {
        console.warn('montar pedido ', objDoComponente)

        

    }

    function convertArrayToObject(array) {
        let result = {}
        for (const element of array) {
            result[element[0]] = element[0]
        }
        return result
    }


    function writeUserData(listaPedidos) {
        firebase.database().ref('/Pedidos').push({
            nome: listaPedidos.nome,
            descricao: listaPedidos.descricao,
            status: "em andamento",
            valor: listaPedidos.valorTotal,
            observacao: listaPedidos.obs,
            quantidade: listaPedidos.qtde
        })
    }


    function pushFire() {
        try {
            var pedidoListRef = firebase.database().ref('/Pedidos')
            var newPedidoRef = pedidoListRef.push()
            // console.warn(listaPedidos)
            // newPedidoRef.set({
            //     listaPedidos
            // })

            // firebase.database().ref('/Pedidos').push({
            //     nome: listaPedidos.nome,
            //     descricao: listaPedidos.descricao,
            //     status: "em andamento",
            //     valor: listaPedidos.valorTotal,
            //     observacao: listaPedidos.obs
            // })
        } catch (error) {
            alert(error)
        } finally {
            setListaPedidos([])
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
})