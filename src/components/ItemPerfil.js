import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextPropTypes } from 'react-native'

import StylePerfil from '../styles/perfil'

import SetaDireita from '../../assets/images/right-arrow.png'

export default props => {
    return (
        <View style={style.container}>
            <View>
                <Text style={style.titulo}>
                    {props.titulo}
                </Text>
                <Text style={style.informacao}>
                    {props.informacao}
                </Text>
            </View>
            <View style={style.setaAvancar}>
                <Image resizeMode='contain'
                    source={SetaDireita}
                    style={StylePerfil.setaVoltar}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        paddingBottom: 5,
        width: 360,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6300',
        // backgroundColor: '#ccc',
    },
    titulo: {
        marginLeft: 10,
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    informacao: {
        marginLeft: 10,
        color: '#606060',
        fontSize: 18,
        fontWeight: 'bold',
    },
    setaAvancar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: '#ccc',
    }
})