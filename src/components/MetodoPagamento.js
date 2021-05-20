import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import StyleIndex from '../styles/index'

export default props => {
    return (
        <TouchableOpacity style={[StyleIndex.container, StyleIndex.containerRow, style.container]}>
            <View style={style.iconePagamento}>
                <Image
                    resizeMode='contain'
                    source={props.imagem}
                    style={style.iconePagamento}
                />
            </View>
            <Text style={StyleIndex.text}>
                {props.metodo}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        width: 350,
        paddingLeft: 10,
        backgroundColor: 'rgba(255, 99, 0, 0.1)'
    },
    iconePagamento: {
        width: 50,
        marginRight: 10,
    },
})