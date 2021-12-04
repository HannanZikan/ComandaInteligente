import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button, Alert } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'

import StyleIndex from '../styles/index'


export default props => {
    return (

        <Background>
            <View style={StyleIndex.contentCenter}>

                <Text style={style.input}>
                    Obrigado por utilizar nossos serviços.
                </Text>
            </View>
        </Background>

    )
}

const style = StyleSheet.create({
    input: {
        width: 300,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
})