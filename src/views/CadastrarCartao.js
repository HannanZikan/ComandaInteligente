import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import Background from '../components/Background'
import Header from '../components/HeaderPerfil'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import Cartoes from '../components/Cartoes'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToPedidos = () => { props.navigation.navigate("Pedidos") }
    const goToFormasPagamento = () => { props.navigation.goBack() }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <TouchableOpacity style={StylePerfil.containerNavegarSup}
                    onPress={goToFormasPagamento}>
                    <Image resizeMode='contain'
                        source={SetaEsquerda}
                        style={StylePerfil.setaVoltar}
                    />
                    <Text style={StylePerfil.txtNagevarSup}>
                        Voltar para formas de pagamento
                    </Text>
                </TouchableOpacity>

                <View style={StylePerfil.content}>
                    
                </View>

            </View>
            <View style={StyleIndex.footerContainer}>
                <TouchableOpacity
                    style={style.btnAdicionarCartao}>
                    <Text style={style.txtAdicionarCartao}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>


        </Background>
    )
}

const style = StyleSheet.create({
    btnAdicionarCartao: {
        width: 360,
        height: 50,
        backgroundColor: '#FF6300',
        padding: 0,
        // marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtAdicionarCartao: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
    },
    picker:{

    }
})