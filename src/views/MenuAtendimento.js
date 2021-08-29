import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import Background from '../components/Background'
import Header from '../components/Header'
import StyleIndex from '../styles/index'
import OpcoesAtendimento from '../components/OpcoesAtendimento'

import Garcom from '../../assets/images/garçom.png'
import PedirOnline from '../../assets/images/pedirOnline.png'

export default props => {
    // const goToPedidos = () => { props.navigation.navigate("Pedidos") }
    const goToChamarGarcom = () => { props.navigation.navigate("CardapioSimples") }
    const goToPedirOnline = () => { props.navigation.navigate("Cardapio") }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Opções de atendimento
                    </Text>
                </View>

                <View style={StyleIndex.content}>

                    <TouchableOpacity
                        onPress={goToChamarGarcom}>
                        <OpcoesAtendimento
                            imagem={Garcom}
                            opcao='Chamar o garçom' />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={goToPedirOnline}>
                        <OpcoesAtendimento
                            imagem={PedirOnline}
                            opcao='Pedir Online' />

                    </TouchableOpacity>

                </View>

                <View style={StyleIndex.footerContainer}>

                </View>
            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    imagem: {
        width: 100,
        height: 100,
    },
    contentButtom: {
        borderBottomWidth: 2,
        borderBottomColor: '#ff6300'
    },
})