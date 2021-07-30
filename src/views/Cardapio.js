import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Background from '../components/Background'
import Header from '../components/Header'
import Slogan from '../../assets/images/slogan.png'
import StyleIndex from '../styles/index'
import ItemCardapio from '../components/ItemCardapio'
import XSalada from '../../assets/images/x-salada.png'
import XTudo from '../../assets/images/x-tudo.png'
import XEgg from '../../assets/images/x-egg.png'

export default props => {
    const proxTela = () => { props.navigation.navigate("Pedidos") }
    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <View style={StyleIndex.titleContainer}>
                    <Text style={style.cardapioText}>
                        Cardápio
                    </Text>
                </View>
                
                <View style={StyleIndex.content}>
                    <ItemCardapio
                        imagem={XSalada}
                        titulo="X-Salada - R$8,00"
                        ingredientes="Pão, Carne, Queijo, Alface, Tomate" />

                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity
                        onPress={proxTela}>
                        <Text style={style.cardapioText}>
                            Pedir
                        </Text>
                    </TouchableOpacity>
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
    btnFazerPedido: {
        width: 150,
        borderColor: '#FFF',
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