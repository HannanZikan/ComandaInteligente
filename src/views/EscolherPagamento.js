import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'
import MetodoPagamento from '../components/MetodoPagamento'

import StyleIndex from '../styles/index'

import GPay from '../../assets/images/gPayIcon.png'
import PagarNoCaixa from '../../assets/images/pagarnocaixa.png'


export default props => {
    const goToComanda = () => { props.navigation.navigate("Comanda") }
    const goToPagarNoCaixa = (shortId) => { props.navigation.navigate("PagarNoCaixa", shortId) }
    const goToPagarCartao = (shortId) => { props.navigation.navigate("PagarCartao", shortId) }

    const user = firebase.auth().currentUser
    const [listaPedidos, setListaPedidos] = useState([])
    const [comanda, setComanda] = useState([])
    const [soma, setSoma] = useState('')
    const [shortId, setShortId] = useState('')

    useEffect(() => {
        // gerar números aleatórios entre 1000 e 9999
        setShortId(Math.floor(Math.random() * (10000 - 1000) + 1000))
        console.log(shortId)
        try {
            const list = []
            const getComanda = firebase.database().ref('/Comandas')
                .orderByChild('usuario').equalTo(user.uid)
                .on('value', (snapshot) => {
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            data: childItem.val().data,
                            usuario: childItem.val().usuario,
                            estabelecimento: childItem.val().estabelecimento
                        })
                    })
                    setComanda(list)
                })

            const getItensComanda = firebase.database().ref('/Comandas/' + list[0]['key'] + '/itens')
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
                            imagem: childItem.val().imagem
                        })
                    })
                    setListaPedidos(pedidos)
                })

            const getSoma = firebase.database().ref('/Comandas/' + list[0]['key'] + '/itens')
                .orderByChild('status').startAt('1').endAt('3')
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

    function fecharComandaCaixa() {
        const setComandaFechada = firebase.database()
            .ref('/ComandasFechadas/' + user.uid + '/' + comanda[0]['key']).set({
                usuario: comanda[0]['usuario'],
                data: comanda[0]['data'],
                valorTotal: somaTotal(),
                estabelecimento: comanda[0]['estabelecimento'],
                shortId: shortId,
            })

        for (let i = 0; i < listaPedidos.length; i++) {
            firebase.database().ref('/ComandasFechadas/' + user.uid + '/' + comanda[0]['key'] + '/itens').push({
                nome: listaPedidos[i]['nome'],
                quantidade: listaPedidos[i]['quantidade'],
                observacao: listaPedidos[i]['observacao'],
                valorTotal: listaPedidos[i]['valorTotal'],
                status: listaPedidos[i]['status'],
                imagem: listaPedidos[i]['imagem'],
            })
        }

        // const excluirComandaAberta = firebase.database().ref('/Comandas/' + comanda[0]['key']).remove()

        goToPagarNoCaixa({ shortId })
    }

    function fecharComandaCartao() {
        const setComandaFechada = firebase.database()
            .ref('/ComandasFechadas/' + user.uid + '/' + comanda[0]['key']).set({
                usuario: comanda[0]['usuario'],
                data: comanda[0]['data'],
                valorTotal: somaTotal(),
                estabelecimento: comanda[0]['estabelecimento'],
                shortId: shortId,
                pagamento: 'Crédito / MasterCard'
            })

        for (let i = 0; i < listaPedidos.length; i++) {
            firebase.database().ref('/ComandasFechadas/' + user.uid + '/' + comanda[0]['key'] + '/itens').push({
                nome: listaPedidos[i]['nome'],
                quantidade: listaPedidos[i]['quantidade'],
                observacao: listaPedidos[i]['observacao'],
                valorTotal: listaPedidos[i]['valorTotal'],
                status: listaPedidos[i]['status'],
                imagem: listaPedidos[i]['imagem'],
            })
        }

        const excluirComandaAberta = firebase.database().ref('/Comandas/' + comanda[0]['key']).remove()

        goToPagarCartao({ shortId })
    }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>

                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Formas de Pagamento
                    </Text>
                </View>

                <View style={StyleIndex.content}>
                    <MetodoPagamento
                        imagem={GPay}
                        metodo='Débito/Crédito'
                        navegacao={fecharComandaCartao} />

                    <MetodoPagamento
                        imagem={PagarNoCaixa}
                        metodo='Pagar no Caixa'
                        navegacao={fecharComandaCaixa} />
                </View>

                <View style={style.footerContainer}>
                    <TouchableOpacity
                        style={style.btnVoltarComanda}
                        onPress={
                            () => {
                                goToComanda()
                            }
                        }>
                        <Text style={style.txtVoltarComanda}>
                            Voltar à Comanda
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    btnVoltarComanda: {
        width: 170,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtVoltarComanda: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 80,
    },
})