import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Slogan from '../../assets/images/slogan.png'
import NovoPedido from '../../assets/images/novoPedido.png'
import StyleIndex from '../styles/index'
import ItemCardapio from '../components/ItemCardapio'
import XSalada from '../../assets/images/x-salada.png'
import XTudo from '../../assets/images/x-tudo.png'


export default props => {
    const goToEscolherPagamento = () => { props.navigation.navigate("EscolherPagamento") }
    const antTela = () => { props.navigation.goBack() }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.container}>
                <Text style={style.cardapioText}>
                    Pedidos
                </Text>

                <ItemCardapio
                    imagem={XSalada}
                    titulo="X-Salada - R$8,00"
                    ingredientes="Qtde: 1 - R$8,00" />

                <ItemCardapio
                    imagem={XTudo}
                    titulo="X-Tudo - R$14,50"
                    ingredientes="Qtde: 2 - R$29,00" />
                    

            </View>
                <View style={[StyleIndex.containerRow, style.footer]}>
                    <Image
                        resizeMode='contain'
                        source={Slogan}
                        style={style.slogan} />

                    <View style={StyleIndex.container}>
                        <Text style={style.textTotal}>Valor Total: R$37,00</Text>
                        <View style={StyleIndex.containerRow}>

                            <TouchableOpacity onPress={antTela}>
                                <Image
                                    resizeMode='contain'
                                    source={NovoPedido}
                                    style={style.botoes} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goToEscolherPagamento}>
                                <Text style={style.cardapioText}>
                                    Fechar Comanda
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

        </Background>
    )
}

const style = StyleSheet.create({
    cardapioText: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
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