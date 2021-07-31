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
    const goToPedidos = () => { props.navigation.navigate("Pedidos") }
    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Cardápio
                    </Text>
                </View>
                
                <View style={StyleIndex.content}>
                    {/* <ItemCardapio
                        imagem={XSalada}
                        titulo="X-Salada - R$8,00"
                        ingredientes="Pão, Carne, Queijo, Alface, Tomate" /> */}

                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity
                        style={style.btnPedir}
                        onPress={goToPedidos}>
                        <Text style={style.txtPedir}>
                            Pedir
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    btnPedir: {
        width: 100,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtPedir: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
})