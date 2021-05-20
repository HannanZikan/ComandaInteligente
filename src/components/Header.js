import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Logo from '../../assets/images/logo.png'
import StyleIndex from '../styles/index'

export default props => {
    return (
        <View style={StyleIndex.header}>
            <Image
                resizeMode='contain'
                source={Logo}
                style={style.logo} />

            <View style={StyleIndex.headerConteinerText}>
                <Text style={StyleIndex.headerText}>
                    Hamburgueria Artesanal
                </Text>

                <Text style={StyleIndex.headerText}>
                    Tel: (24) 99999-9999
                </Text>

                <Text style={StyleIndex.headerText}>
                    Comanda: #0000
                </Text>
            </View>

            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 130,
        height: 130,
    },
})