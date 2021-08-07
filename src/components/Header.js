import React from 'react'
import { View, Text, Image, StyleSheet, TextComponent } from 'react-native'
import firebase from 'firebase'

import Logo from '../../assets/images/logo.png'
import Style from '../styles/header'

export default props => {
    const user = firebase.auth().currentUser;

    return (
        <View style={Style.header}>
            <Image
                resizeMode='contain'
                source={Logo}
                style={Style.Logo} />

            <View style={Style.headerConteinerText}>
                <Text style={Style.headerText}>
                    Bem vindo, {user.displayName}!
                </Text>
                <Text style={Style.headerText}>
                    Faça aqui seu pedido do {"{estabelecimento_nome}"}
                </Text>

            </View>

            {/* <View style={Style.headerConteinerText}>
                <Text style={Style.headerText}>
                   {"{nome_estabelecimento}"}
                </Text>

                <Text style={Style.headerText}>
                    {"{id_comanda}"}
                </Text>
            </View> */}

            {props.children}
        </View>
    )
}