import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import StylePerfil from '../styles/perfil'

import SetaDireita from '../../assets/images/right-arrow.png'
import IconeCartao from '../../assets/images/icon-mastercard.png'
import IconeEditar from '../../assets/images/icon-edit.png'
import IconeExcluir from '../../assets/images/icon-delete.png'

export default props => {
    return (
        <View style={style.container}>
            <Image resizeMode='contain'
                source={IconeCartao}
                style={style.iconeCartao}
            />
            <View>
                <Text style={style.titulo}>
                    {props.bandeira + " - "  + props.tipo}
                </Text>
                <Text style={style.informacao}>
                    {props.numero}
                </Text>
            </View>
            <View style={style.avancar}>
                <TouchableOpacity>
                    <Image resizeMode='contain'
                        source={IconeEditar}
                        style={style.iconeEditarExcluir}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode='contain'
                        source={IconeExcluir}
                        style={style.iconeEditarExcluir}
                    />
                </TouchableOpacity>
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
    iconeCartao: {
        width: 40,
        // height: 28,
        // backgroundColor: '#ccc',
    },
    avancar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: '#ccc',
    },
    iconeEditarExcluir: {
        width: 25,
        height: 25,
        marginLeft: 15,
    }
})