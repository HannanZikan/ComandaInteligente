import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Background from '../components/Background'
import Logo from '../../assets/images/logo.png'
import Mira from '../../assets/images/mira.png'
import StyleIndex from '../styles/index'

export default props => {
    const proxTela = () => { props.navigation.navigate("Cardapio") }
    return (
        <Background>
            <View style={StyleIndex.header}>
                <Image
                    resizeMode='contain'
                    source={Logo}
                    style={style.logo} />
                <View style={StyleIndex.headerConteinerText}>
                    <Text style={StyleIndex.headerText}>
                        Escaneie o QR Code para fazer o Check-in
                    </Text>
                </View>
            </View>

            <View style={StyleIndex.container}>
                <View style={style.quadro}>
                    <TouchableOpacity
                        onPress={proxTela}>
                        <Image
                            resizeMode='contain'
                            source={Mira}
                            style={style.mira}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 130,
        height: 130,
    },
    quadro: {
        width: 300,
        height: 400,
        backgroundColor: '#474747',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slogan: {
        height: 120,
        margin: 20,
    },
    mira: {
        width: 150,
    }
})