import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import Slogan from '../../assets/images/slogan.png'
import StyleIndex from '../styles/index'
import ItemCardapio from '../components/ItemCardapio'
import XSalada from '../../assets/images/x-salada.png'
import XTudo from '../../assets/images/x-tudo.png'
import XEgg from '../../assets/images/x-egg.png'

export default props => {
    const proxTela = () => { props.navigation.navigate("Pedido") }
    return (
        <Background>
            <Header />
            <View style={StyleIndex.container}>
                <Text style={style.cardapioText}>
                    Cardápio
                </Text>

                <ItemCardapio
                    imagem={XSalada}
                    titulo="X-Salada - R$8,00"
                    ingredientes="Pão, Carne, Queijo, Alface, Tomate" />

                <ItemCardapio
                    imagem={XTudo}
                    titulo="X-Tudo - R$14,50"
                    ingredientes="Pão, Carne, Queijo, Ovo, Bacon, Calabresa, Batata-Palha, Presunto, Alface, Tomate" />

                <ItemCardapio
                    imagem={XEgg}
                    titulo="X-Egg - R$8,00"
                    ingredientes="Pão, Carne, Queijo, Ovo" />

            </View>
            <View style={[StyleIndex.containerRow, style.footer]}>
                <Image
                    resizeMode='contain'
                    source={Slogan}
                    style={style.slogan} />

                <TouchableOpacity style={style.btnFazerPedido}
                    onPress={proxTela}>
                    <Image
                        resizeMode='contain'
                        source={FazerPedido}
                        style={style.btnFazerPedido} />
                </TouchableOpacity>

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
    btnFazerPedido: {
        width: 150,

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
        width: '100%', width: '100%',
        padding: 20,
    }

})