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
    const goToComanda = () => { props.navigation.navigate("Comanda") }
    const goToPagarNoCaixa = () => { props.navigation.navigate("PagarNoCaixa") }

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
                        imagem={GPay}
                        metodo='Débito/Crédito' />

                    <MetodoPagamento
                        imagem={PagarNoCaixa}
                        metodo='Pagar no Caixa'
                        navegacao={goToPagarNoCaixa} />
                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity
                        style={style.btnVoltarComanda}
                        onPress={goToComanda}>
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