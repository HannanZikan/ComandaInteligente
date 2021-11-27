import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ViewPropTypes } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'
import ItemComandaFechada from '../components/ItemComandaFechada'

import StyleIndex from '../styles/index'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const antTela = () => { props.navigation.goBack() }
    const user = firebase.auth().currentUser

    const shortId = props.route.params.shortId
    const keyComanda = props.route.params.key
    const [listaPedidos, setListaPedidos] = useState([])
    const [comanda, setComanda] = useState([])
    const [soma, setSoma] = useState('')
    useEffect(() => {
        try {
            const list = []
            const getComanda = firebase.database().ref('/ComandasFechadas/' + user.uid + '/' + keyComanda)
                // .orderByChild('shortId').equalTo(shortId)
                .on('value', (snapshot) => {
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            data: childItem.val().data,
                            valorTotal: childItem.val().valorTotal,
                            estabelecimento: childItem.val().estabelecimento,
                        })
                    })
                    setComanda(list)
                    console.log(list)
                })

            const getItensComanda = firebase.database().ref('/ComandasFechadas/' + user.uid + '/' + keyComanda + '/itens')
                .on('value', (snapshot) => {
                    const itens = []
                    snapshot.forEach((childItem) => {
                        itens.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            quantidade: childItem.val().quantidade,
                            observacao: childItem.val().observacao,
                            valorTotal: childItem.val().valorTotal,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListaPedidos(itens)
                })
        } catch (error) {
            alert(error)
        }
    }, [])

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <TouchableOpacity style={style.containerNavegarSup}
                    onPress={antTela}
                >
                    <Image resizeMode='contain'
                        source={SetaEsquerda}
                        style={style.setaVoltar}
                    />
                    <Text style={style.txtNagevarSup}>
                        Voltar para minhas comandas
                    </Text>
                </TouchableOpacity>

                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Comanda #{shortId}
                    </Text>
                    <View style={style.informacoes}>
                        {/* <Text style={[style.containerinformacoesEsquerda, style.informacoestext]}>
                            {comanda[0]['estabelecimento']}
                        </Text> */}
                        {/* <Text style={[style.containerinformacoesDireita, style.informacoestext]}>
                            {comanda[0].data}
                        </Text>
                    </View>
                    <View style={style.informacoes}>
                        <Text style={[style.containerinformacoesEsquerda, style.informacoestext]}>
                            R$ {comanda[0].valorTotal},00
                        </Text> */}
                        <Text style={[style.containerinformacoesDireita, style.informacoestext]}>
                            Débito/MasterCard
                        </Text>
                    </View>
                </View>

                <View style={StyleIndex.content}>

                    <FlatList data={listaPedidos}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                            <ItemComandaFechada
                                keyPedido={item.key}
                                nome={item.nome}
                                observacao={item.observacao}
                                quantidade={item.quantidade}
                                valorTotal={item.valorTotal}
                                status={item.status}
                                imagem={item.imagem}
                                // comanda={comanda[0]['key']}
                            />
                        } />

                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity
                        style={style.btnAdicionar}
                        onPress={
                            () => {
                                // console.log(comanda[0]['estabelecimento'])
                                console.log(keyComanda, comanda)
                            }
                        }
                    >
                        <Text style={style.txtAdicionar}>
                            Testes

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
        fontSize: 18,
        marginLeft: 15,
        padding: 0,
    },
    informacoes: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    containerinformacoesEsquerda: {
        justifyContent: 'flex-start',
        width: '40%',
        paddingLeft: 15,
    },
    containerinformacoesDireita: {
        justifyContent: 'flex-start',
        width: '60%',
        paddingLeft: 10,
    },
    informacoestext: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
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