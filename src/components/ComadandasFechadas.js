import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default props => {

    const data = props.data
    const estabelecimento = props.estabelecimento
    const pagamento = props.pagamento
    const shortId = props.shortId
    // const itens = props.itens

    return (
        <View style={style.container}>
            <View>
                <Text style={style.titulo}>
                    {estabelecimento} #{shortId}
                </Text>
                <Text style={style.detalhes}>
                    {data} - {pagamento}
                </Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 10,
        paddingBottom: 5,
        marginBottom: 5,
        width: 360,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6300',
    },
    titulo: {
        marginLeft: 10,
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    detalhes: {
        marginLeft: 10,
        color: '#606060',
        fontSize: 18,
        fontWeight: 'bold',
    },
})