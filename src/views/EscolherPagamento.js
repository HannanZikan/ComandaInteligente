import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Slogan from '../../assets/images/slogan.png'
import VoltarComanda from '../../assets/images/novoPedido.png'
import Pix from '../../assets/images/pix.png'
import StyleIndex from '../styles/index'
import MetodoPagamento from '../components/MetodoPagamento'


export default props => {
    const antTela = () => { props.navigation.goBack() }

    return (
        <Background>
            <Header />
            <Text style={style.selecionePagamentoText}>
                Selecione o Método de Pagamento
            </Text>

            <View style={StyleIndex.container}>
                <MetodoPagamento
                    imagem={Pix}
                    metodo='Pix' />

                <MetodoPagamento
                    imagem={GPay}
                    metodo='Débito/Crédito' />

                <MetodoPagamento
                    imagem={Pix}
                    metodo='Pagamento no Caixa' />
            </View>

            <View style={[StyleIndex.containerRow, style.footer]}>
                <Image
                    resizeMode='contain'
                    source={Slogan}
                    style={style.slogan} />

                <View style={StyleIndex.container}>
                    <TouchableOpacity onPress={antTela}>
                        <Image
                            resizeMode='contain'
                            source={VoltarComanda}
                            style={style.botoes} />
                    </TouchableOpacity>
                </View>

            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    selecionePagamentoText: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        // backgroundColor: '#CCC'
    },
    botoes: {
        width: 115,
        height: 40,
        margin: 5,
        // backgroundColor: '#ccc',
    },
    TextFazerPedido: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    slogan: {
        width: 100,
        height: 120,
    },
    footer: {
        justifyContent: 'space-between',
        // backgroundColor: '#ccc',
        width: '100%',
        padding: 20,
    },
    textTotal: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
})