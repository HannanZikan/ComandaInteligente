import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'

import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import ItemPerfil from '../components/ItemPerfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToDadosUsuario = () => { props.navigation.navigate("DadosUsuario") }
    const goToHistoricoComandas = () => { props.navigation.navigate("HistoricoComandas") }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>


                <View style={StylePerfil.content}>
                    <TouchableOpacity
                        onPress={
                            goToDadosUsuario
                        }>
                        <ItemPerfil
                            titulo="Meus dados"
                            informacao="Minhas informações da conta"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={
                            goToHistoricoComandas
                        }>
                        <ItemPerfil
                            titulo="Minhas comandas"
                            informacao="Meu histórico de comandas"
                        />
                    </TouchableOpacity>


                </View>

            </View>

        </Background>
    )
}

const style = StyleSheet.create({

})