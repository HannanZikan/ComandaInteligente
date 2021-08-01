import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default props => {
    return (
        <TouchableOpacity style={style.main}>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 25,
        paddingBottom: 5,
        width: 370,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6300',
        // backgroundColor: '#ccc',
    },
    nomeMetodo: {
        marginLeft: 20,
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
    iconePagamento: {
        width: 100,
        height: 100,
        // marginRight: 10,
    },
})