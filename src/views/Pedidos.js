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
            <View style={StyleIndex.mainContainer}>
                <View style={StyleIndex.titleContainer}>
                    <Text style={StyleIndex.titleText}>
                        Pedidos
                    </Text>
                </View>

                <View style={StyleIndex.content}>

                </View>

                <View style={StyleIndex.footerContainer}>
                    <Text style={[ style.txtFecharComanda, style.txtTotal ]}>
                        Total: R${"{total}"}
                    </Text>

                    <TouchableOpacity
                        style={style.btnFecharComanda}
                        onPress={goToEscolherPagamento}>
                        <Text style={style.txtFecharComanda}>
                            Fechar Comanda
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    btnFecharComanda: {
        width: 170,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtFecharComanda: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    txtTotal: {
        marginRight: 30,
    }
})