import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Globais from '../components/Globais'
import ItemFazerPedido from '../components/ItemFazerPedido'

import StyleIndex from '../styles/index'

import SetaEsquerda from '../../assets/images/left-arrow.png'



export default props => {
    // const goToEscolherPagamento = () => { props.navigation.navigate("EscolherPagamento") }

    const antTela = () => { props.navigation.goBack() }
    const itensPedido = Globais.itemMontarPedido

    function arrayToObject(array) {
        let result = {}
        for (const element of array) {
            result[element[0]] = element[1]
        }
        return result
    }

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
                        Cardápio
                    </Text>
                </TouchableOpacity>

                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Pedido
                    </Text>
                </View>

                <View style={StyleIndex.content}>

                    <FlatList data={itensPedido}
                        // o array Global.itemMontarPedido sempre seguirá esta ordem:
                        // key, nome, descricao, observação, quantidade, valor total
                        // achei mais fácil que transformar em JSON só pra renderizar na tela :P
                        keyExtractor={(item) => item[0]}
                        renderItem={({ item }) =>
                            <ItemFazerPedido
                                nome={item[1]}
                                descricao={item[2]}
                                observacao={item[3]}
                                quantidade={item[4]}
                                valorTotal={item[5]}
                            />
                        } />


                </View>

                <View style={StyleIndex.footerContainer}>

                    <TouchableOpacity
                        style={style.btnAdicionar}
                        onPress={() => {
                            console.warn(itensPedido)
                        }}
                    >
                        <Text style={style.txtAdicionar}>
                            Pedir
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
        marginBottom: 20,
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
})