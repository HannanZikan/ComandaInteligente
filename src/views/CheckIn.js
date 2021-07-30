import React from 'react'
import { View, Text, Image, StyleSheet, VirtualizedList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Background from '../components/Background'
import Header from '../components/HeaderCheckIn'

import Mira from '../../assets/images/mira.png'
import StyleIndex from '../styles/index'

export default props => {
    const goToCardapio = () => { props.navigation.navigate("Cardapio") }
    return (
        <Background>
            <Header />

            <View style={StyleIndex.mainContainer}>
                <View style={style.meio}>
                    <View style={style.quadro}>
                        <TouchableOpacity
                            onPress={goToCardapio}>
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
    },
    meio:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})