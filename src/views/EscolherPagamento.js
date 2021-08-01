import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'

import Background from '../components/Background'
import Header from '../components/Header'
import MetodoPagamento from '../components/MetodoPagamento'

import StyleIndex from '../styles/index'

import Pix from '../../assets/images/pix.png'
import GPay from '../../assets/images/gPayIcon.png'
import PagarNoCaixa from '../../assets/images/pagarnocaixa.png'


export default props => {
    const goToPedidos = () => { props.navigation.navigate("Pedidos") }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>

                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Formas de Pagamento
                    </Text>
                </View>

                <View style={StyleIndex.content}>
                    <MetodoPagamento
                        imagem={Pix}
                        metodo='PIX' />

                    <MetodoPagamento
                        imagem={GPay}
                        metodo='Débito/Crédito' />

                    <MetodoPagamento
                        imagem={PagarNoCaixa}
                        metodo='Pagar no Caixa' />
                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity
                        style={style.btnVoltarComanda}
                        onPress={goToPedidos}>
                        <Text style={style.txtVoltarComanda}>
                            Voltar à Comanda
                        </Text>
                    </TouchableOpacity>

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
})