import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'

import Background from '../components/Background'
import Header from '../components/HeaderPerfil'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import ItemPerfil from '../components/ItemPerfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToFormasPagamento = () => { props.navigation.navigate("FormasPagamento") }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <TouchableOpacity style={StylePerfil.containerNavegarSup}>
                    <Image resizeMode='contain'
                        source={SetaEsquerda}
                        style={StylePerfil.setaVoltar}
                    />
                    <Text style={StylePerfil.txtNagevarSup}>
                        Voltar para o check-in
                    </Text>
                </TouchableOpacity>


                <View style={StylePerfil.content}>
                    <TouchableOpacity>
                        <ItemPerfil
                            titulo="Meus dados"
                            informacao="Minhas informações da conta"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={
                            goToFormasPagamento
                        }>
                        <ItemPerfil
                            titulo="Formas de pagamento"
                            informacao="Minhas formas de pagamento"
                        />
                    </TouchableOpacity>


                </View>

            </View>

        </Background>
    )
}

const style = StyleSheet.create({

})