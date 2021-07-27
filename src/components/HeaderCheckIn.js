import React from 'react'
import { View, Text, Image, StyleSheet, TextComponent } from 'react-native'

import Logo from '../../assets/images/logo.png'
import Style from '../styles/header'

export default props => {
    return (
        <View style={Style.header}>
            <Image
                resizeMode='contain'
                source={Logo}
                style={Style.Logo} />

            <View style={Style.headerConteinerText}>
                <Text style={Style.headerText}>
                    Bem vindo, {"{user_name}"}!
                </Text>

                <Text style={Style.headerText}>
                    Escaneie o QR Code para fazer o Check-In
                </Text>
            </View>

            {props.children}
        </View>
    )
}