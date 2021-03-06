import React, { Fragment, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import StyleIndex from '../styles/index'

// imagem apenas ilustrativa, retirar depois
import sanduiche from '../../assets/images/sanduiche.png'

export default props => {

    function cancelarItem() {
        try {
            firebase.database().ref('/Comandas/' + props.comanda + '/itens/' + props.keyPedido).update({
                nome: props.nome,
                observacao: props.observacao,
                quantidade: props.quantidade,
                status: "cancelado",
                valorTotal: props.valorTotal,
                imagem: props.imagem
            })
        } catch (error) {
            alert(error)
        }
    }

    function getStatus(status) {
        if(status == 1){
            status = "aguardando"
        }
        if(status == 2){
            status = "em andamento"
        }
        if(status == 3){
            status = "entregue"
        }
        if(status == 4){
            status = "cancelado"
        }
        return status
    }

    return (
        <Fragment>

            <View style={style.container}>
                <View style={style.containerImg}>
                    <Image resizeMode='contain'
                        source={{uri: props.imagem}}
                        style={style.imgCardapio} />
                </View>
                <View style={style.containerTxt}>
                    <Text style={style.nome}>{props.nome}</Text>
                    <Text style={style.observacao}>{props.observacao ? props.observacao : "Sem observações."}</Text>
                    <View style={style.detalhePedido}>
                        <View>
                            <Text style={style.valor}>Qtde. {props.quantidade}</Text>
                            <Text style={style.valor}>Total R$ {props.valorTotal}</Text>
                            <Text style={style.valor}>Status: {getStatus(props.status)
                            }</Text>
                        </View>

                        {
                            props.status < 3 ?
                                <View style={style.containerBtnCancelar}>
                                    <TouchableOpacity
                                        onPress={() => cancelarItem()}
                                        style={style.btnCancelar}>
                                        <Text style={style.valor}>Cancelar</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={style.containerBtnCancelar}>
                                    {/* <TouchableOpacity
                                        // onPress={() => cancelarItem()}
                                        style={style.btnCancelar}>
                                        <Text style={style.valor}>Entregue</Text>
                                    </TouchableOpacity> */}
                                </View>

                        }
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
    observacao: {
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