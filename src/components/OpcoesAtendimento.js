import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default props => {
    return (
        <View style={style.main}>
            <View style={style.container}>
                <View style={props.opcao == "Chamar o garçom"
                    ? style.containerImage
                    : style.containerImageEsq
                }>
                    <Image
                        resizeMode='contain'
                        source={props.imagem}
                        style={style.iconePagamento}
                    />

                </View>

                <Text style={style.opcao}>
                    {props.opcao}
                </Text>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
    main: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    iconePagamento: {
        width: 100,
        height: 100,
        // backgroundColor: '#ccc',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 5,
        width: 370,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6300',
        // backgroundColor: '#ccc',
    },
    containerImage: {
        width: 120,
        alignItems: 'center',
        // backgroundColor: '#FFF',
    },
    containerImageEsq: {
        width: 120,
        alignItems: 'center',
        // backgroundColor: '#FFF',
    },
    opcao: {
        marginLeft: 10,
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        // backgroundColor: '#ccc',
    },

})