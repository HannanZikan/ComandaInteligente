import React, { Fragment, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import StyleIndex from '../styles/index'

// imagem apenas ilustrativa, retirar depois
import sanduiche from '../../assets/images/sanduiche.png'

export default props => {

    function cancelarItem() {
        try {
            firebase.database().ref('/Pedidos/' + props.keyPedido).update({
                descricao: props.descricao,
                email: props.email,
                nome: props.nome,
                quantidade: props.quantidade,
                status: "cancelado",
                usuario: props.usuario,
                valorTotal: props.valorTotal
            })
        } catch(error){
            alert(error)
        }
    }

    return (
        <Fragment>

            <View style={style.container}>
                <View style={style.containerImg}>
                    <Image resizeMode='contain'
                        source={sanduiche}
                        style={style.imgCardapio} />
                </View>
                <View style={style.containerTxt}>
                    <Text style={style.nome}>{props.nome}</Text>
                    <Text style={style.descricao}>{props.observacao ? props.observacao : "Sem observações."}</Text>
                    <View style={style.detalhePedido}>
                        <View>
                            <Text style={style.valor}>Qtde. {props.quantidade}</Text>
                            <Text style={style.valor}>Total R$ {props.valorTotal}</Text>
                            <Text style={style.valor}>Status: {props.status}</Text>
                        </View>

                        <View style={style.containerBtnCancelar}>
                            <TouchableOpacity
                                onPress={() => cancelarItem()}
                                style={style.btnCancelar}>
                                <Text style={style.valor}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>


        </Fragment>
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
        marginBottom: 10
    },
    valor: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
        // marginTop: 10,
    },
    containerBtnCancelar: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        flex: 1,
        // backgroundColor: '#ccc'
    },
    btnCancelar: {
        backgroundColor: '#FF6300',
        height: 20,
        width: 70,
        alignItems: 'center'
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
})