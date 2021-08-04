import React, { Fragment } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'
import StyleIndex from '../styles/index'

// imagem apenas ilustrativa, retirar depois
import sanduiche from '../../assets/images/sanduiche.png'

export default props => {

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
                        <Text style={style.descricao}>{props.descricao}</Text>
                        <Text style={style.valor}>{props.valor}</Text>
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










    container1: {
        backgroundColor: '#ccc',
        width: 380,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // marginTop: 15,
    },





    containerBtn: {
        flexDirection: 'row',
        backgroundColor: '#FF6300',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    textNome: {
        fontSize: 24,
    },
    textIngredientes: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFF',
    },
    buttonQtde: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FF6300',
        backgroundColor: '#000',
        borderRadius: 50,
        // height: 25,
        width: 25,
    },
    qtde: {
        fontSize: 28,
        marginLeft: 10,
        marginRight: 10,
    }
})