import React, { Fragment, useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable, Alert, TouchableOpacity, TextInput, TouchableOpacityBase } from 'react-native'
import StyleIndex from '../styles/index'

export default props => {

    return (
        <View style={StyleIndex.titleContainer}>
            <Text style={StyleIndex.titleText}>Lanches</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 10,
        width: 360,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6300',
    },
    containerSelecionado: {
        marginTop: 10,
        paddingBottom: 10,
        width: 360,
        backgroundColor: 'rgba(255,99,0,0.1)',
        borderBottomWidth: 1,
        borderBottomColor: '#FF6300',
    },
    item: {
        flexDirection: 'row',
        marginBottom: 5
    },
    imgCardapio: {
        width: 85,
        height: 85,
    },
    containerImg: {
        alignItems: 'center',
        // marginLeft: 10,
        // backgroundColor: '#fff',
    },
    containerTxt: {
        flex: 1,
        marginLeft: 15,
        // backgroundColor: '#ccc',
    },
    nome: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
    },
    descricao: {
        color: '#606060',
        fontWeight: 'bold',
        fontSize: 14,
    },
    valor: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    detalhePedido: {
        flexDirection: 'row',
        // width: 360,
    },
    detalhePedidoBotao: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 360,
        marginTop: 5,
    },
    botaoIncluir: {
        color: '#FFF',
        fontWeight: 'bold',
        backgroundColor: '#FF6300',
        padding: 5
    },
    observacao: {
        width: 350,
        height: 30,
        fontSize: 14,
        textAlign: 'center',
        marginLeft: 5,
        padding: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',

    },
    quantidade: {
        width: 50,
        height: 30,
        fontSize: 14,
        textAlign: 'center',
        marginLeft: 5,
        padding: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    botaoQuantidade: {
        marginLeft: 10,
        marginRight: 10,
    },
    quantidadeItem: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
})