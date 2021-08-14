import React from 'react'
import { View, Text, Image, StyleSheet, VirtualizedList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Background from '../components/Background'
import Header from '../components/Header'

import Mira from '../../assets/images/mira.png'
import StyleIndex from '../styles/index'

export default props => {
    const goToMenu = () => { props.navigation.navigate("Menu") }

    return (
        <Background>
            <Header />

            <View style={StyleIndex.mainContainer}>

                <View style={style.titleContainer}>
                    <Text style={style.titleText}>
                        Escaneie o QR-Code para fazer o Check-In
                    </Text>
                </View>

                <View style={StyleIndex.contentCenter}>
                    <View style={style.quadro}>
                        <TouchableOpacity
                            onPress={goToMenu}>
                            <Image
                                resizeMode='contain'
                                source={Mira}
                                style={style.mira}
                            />
                        </TouchableOpacity>
                    </View>
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
        width: 350,
        height: 500,
        backgroundColor: '#474747',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mira: {
        width: 200,
    },
    titleContainer: {
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        width: '100%',
    },
    titleText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
})