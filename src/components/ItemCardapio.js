import React, { Fragment } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'
import StyleIndex from '../styles/index'

export default props => {
    return (
        <Fragment>
            <View style={StyleIndex.container}>
                <View style={StyleIndex.containerRow}>
                    
                    <View style={StyleIndex.container}>
                        <Text style={[StyleIndex.text, style.textNome]}>{props.titulo}</Text>
                        <Text style={style.textIngredientes}>
                            {props.ingredientes}
                        </Text>
                    </View>
                </View>
            </View>
        </Fragment>
    )
}

const style = StyleSheet.create({
    container: {
        // flex: 0.9,
        backgroundColor: '#FF6300',
        width: 350,
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

    imgCardapio: {
        width: 80,
        height: 80
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