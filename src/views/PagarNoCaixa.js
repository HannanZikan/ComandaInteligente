import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'

export default props => {
    const user = firebase.auth().currentUser

    const shortId = props.route.params.shortId

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>

                <View style={StyleIndex.titleContainer}>
                    
                </View>

                <View style={StyleIndex.content}>

                    <View style={style.informacoes}>
                        <Text style={style.txtInformacao}>
                            Apresente o código da sua comanda no caixa:
                        </Text>
                        <Text style={style.txtCodigoComanda}>
                            Comanda: {shortId}
                        </Text>

                    </View>

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
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtVoltarComanda: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    informacoes: {
        width: 350,
    },
    txtInformacao: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5,
        textAlign: 'center'
    },
    txtCodigoComanda: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        marginTop: 10,
        textAlign: 'center'
    },
})