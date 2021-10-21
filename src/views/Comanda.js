import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'
import ItemFazerPedido from '../components/ItemFazerPedido'

import StyleIndex from '../styles/index'

import SetaEsquerda from '../../assets/images/left-arrow.png'
import { get } from 'react-native/Libraries/Utilities/PixelRatio'



export default props => {
    // const goToEscolherPagamento = () => { props.navigation.navigate("EscolherPagamento") }

    const antTela = () => { props.navigation.goBack() }
    const goToCardapio = () => { props.navigation.navigate("Cardapio") }
    const user = firebase.auth().currentUser

    function arrayToObject(array) {
        let result = {}
        for (const element of array) {
            result[element[0]] = element[1]
        }
        return result
    }

    // useFocusEffect()


    const [listaPedidos, setListaPedidos] = useState([])
    const [comanda, setComanda] = useState([])
    const [soma, setSoma] = useState('')
    useEffect(() => {
        try {
            const list = []
            firebase.database().ref('/Comandas')
                .orderByChild('usuario').equalTo(user.uid)
                .on('value', (snapshot) => {
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            data: childItem.val().data,
                            usuario: childItem.val().usuario,
                        })
                    })
                    setComanda(list)
                })

            firebase.database().ref('/Comandas/' + list[0]['key'] + '/itens')
                .on('value', (snapshot) => {
                    const pedidos = []
                    snapshot.forEach((childItem) => {
                        pedidos.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            quantidade: childItem.val().quantidade,
                            observacao: childItem.val().observacao,
                            valorTotal: childItem.val().valorTotal,
                            status: childItem.val().status,
                        })
                    })
                    setListaPedidos(pedidos)
                })

            firebase.database().ref('/Comandas/' + list[0]['key'] + '/itens')
                .orderByChild('status').equalTo('em andamento')
                .on('value', (snapshot) => {
                    const total = []
                    snapshot.forEach((childItem) => {
                        total.push({
                            valorTotal: childItem.val().valorTotal
                        })
                    })
                    setSoma(total)
                })

        } catch (error) {
            alert(error)
        }
    }, [])

    function somaTotal() {
        let total = 0

        for (let i = 0; i < soma.length; i++) {
            total = total + soma[i]['valorTotal']
        }

        return total
    }


    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <TouchableOpacity style={style.containerNavegarSup}
                    onPress={goToCardapio}
                >
                    <Image resizeMode='contain'
                        source={SetaEsquerda}
                        style={style.setaVoltar}
                    />
                    <Text style={style.txtNagevarSup}>
                        Cardápio
                    </Text>
                </TouchableOpacity>

                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Comanda
                    </Text>
                </View>

                <View style={StyleIndex.content}>

                    <FlatList data={listaPedidos}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                            <ItemFazerPedido
                                keyPedido={item.key}
                                nome={item.nome}
                                observacao={item.observacao}
                                quantidade={item.quantidade}
                                valorTotal={item.valorTotal}
                                status={item.status}
                                comanda={comanda[0]['key']}
                            />
                        } />

                </View>

                <View style={StyleIndex.footerContainer}>

                    <Text style={[style.txtFecharComanda, style.txtTotal]}>
                        Total: R${somaTotal()}
                    </Text>

                    <TouchableOpacity
                        style={style.btnAdicionar}
                        onPress={() => {
                            // console.warn(listaPedidos)
                            somaTotal(soma)
                            // console.log(comanda[0]['key'])
                            console.log(comanda)
                            // console.log(listaPedidos)
                        }}
                    >
                        <Text style={style.txtAdicionar}>
                            Fechar Comanda

                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    containerNavegarSup: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    setaVoltar: {
        width: 20,
        height: 20,
        marginTop: 5,
    },
    txtNagevarSup: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 15,
        padding: 0,
    },
    informacoes: {
        width: 350,
    },
    txtNome: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 5,
        // backgroundColor: '#ccc'
    },
    txtDescricao: {
        color: '#606060',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        // backgroundColor: '#ccc',
    },
    txtValor: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    txtobservacao: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    input: {
        width: 350,
        height: 40,
        fontSize: 18,
        // textAlign: 'center',
        // marginLeft: 5,
        paddingLeft: 5,
        paddingBottom: 0,
        paddingTop: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    btnAdicionar: {
        width: 180,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtAdicionar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    txtTotal: {
        marginRight: 30,
    },
    containerQtde: {
        flexDirection: 'row',
        width: 120,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        justifyContent: 'center',
    },
    txtBtnQtde: {
        width: 40,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        // backgroundColor: '#ccc',
    },
    txtFecharComanda: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    txtTotal: {
        marginRight: 30,
    }
})