import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'

import imagemFundo from '../../assets/images/background.png'


export default props => {
    return (
        <ImageBackground
            source={imagemFundo}
            style={style.background}>
            {/* LEMBRA DE USAR ESSA MERDA PRA NÃO PASSAR SUFOCO DE NOVO */}
            {props.children}
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})