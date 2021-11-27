import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default props => {
    return (
        <TouchableOpacity style={style.main}
        onPress={
            props.navegacao
        }>
            <View style={style.container}>
                <Image
                    resizeMode='contain'
                    source={props.imagem}
                    style={style.iconePagamento}
                />
                <Text style={style.nomeMetodo}>
                    {props.metodo}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    main: {
        alignItems: 'center',
        marginBottom: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        width: 330,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6300',
        marginTop: 15
    },
    nomeMetodo: {
        marginLeft: 20,
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
    },
    iconePagamento: {
        width: 80,
        height: 80,
        // marginRight: 10,
    },
})