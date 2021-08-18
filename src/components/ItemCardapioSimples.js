import React, { Fragment, useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable, Alert, TouchableOpacity, TextInput, TouchableOpacityBase } from 'react-native'
import StyleIndex from '../styles/index'

// imagem apenas ilustrativa, retirar depois
import sanduiche from '../../assets/images/sanduiche.png'

export default props => {

    const [selecao, setSelecao] = useState(false)

    const [observacao, setObservacao] = useState('')

    const onChangeObservacao = (observacao) => {
        setObservacao(observacao)
    }

    const [quantidade, setQuantidade] = useState(1)
    const inc = () => setQuantidade(quantidade + 1)
    function dec() {
        if (quantidade < 1) {
            setQuantidade(1)
            setSelecao(false)
        } else if (quantidade >= 1) {
            setQuantidade(quantidade - 1)
        }
    }

    function selecionar(valor) {
        setSelecao(valor)
        valor ?
            setSelecao(true)
            : (
                setSelecao(false),
                setObservacao(''),
                setQuantidade(1)
            )
    }


    function organizaPedido() {
        var valor = props.valor
        var qtde = quantidade
        var valorTotal = (valor * qtde)
        let obs = observacao
        let nome = props.nome
        let descricao = props.descricao
        let itemDoPedido = []
        itemDoPedido.push = [{
            "nome": nome,
            "descricao": descricao,
            "valorTotal": valorTotal,
            "observacao": obs,
            "qtde": qtde,
            "status": "em andamento"
        }]
        console.warn("item do pedido ", itemDoPedido)
        return props.montarPedido(itemDoPedido)
    }

    return (
        <Fragment>

            <Pressable style={style.container}
                onLongPress={() => {
                    selecao ?
                        selecionar(false)
                        :
                        selecionar(true)
                }}>
                <View style={style.containerImg}>
                    <Image resizeMode='contain'
                        source={sanduiche}
                        style={style.imgCardapio} />
                </View>
                <View style={style.containerTxt}>
                    <Text style={style.nome}>{props.nome}</Text>
                    <Text style={style.descricao}>{props.descricao}</Text>
                    <Text style={style.valor}>R$ {props.valor}</Text>
                </View>
            </Pressable>

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