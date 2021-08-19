import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native'
import firebase from 'firebase'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Background from '../components/Background'
import Header from '../components/Header'
import StyleIndex from '../styles/index'
import ItemCardapio from '../components/ItemCardapioSimples'
import TesteBebida from '../components/TesteBebida'
import TesteLanche from '../components/TesteLanche'


const TopTab = createMaterialTopTabNavigator()
function CardapioTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Lanches" component={TesteLanche} />
            <TopTab.Screen name="Bebidas" component={TesteBebida} />
        </TopTab.Navigator>
    )
}

export default props => {
    // const goToPedidos = () => { props.navigation.navigate("Pedidos") }
    const [listFire, setListFire] = useState('')

    useEffect(() => {
        try {
            firebase.database().ref('/Cardapio').once('value', (snapshot) => {
                const list = []
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        nome: childItem.val().nome,
                        descricao: childItem.val().descricao,
                        valor: childItem.val().valor,
                        status: childItem.val().status,
                    })
                })
                setListFire(list)
            })
        } catch (error) {
            Alert.alert(error)
        }
    }, [])

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>

                <View style={StyleIndex.content}>

                    <CardapioTabs>

                    </CardapioTabs>

                    {/* <FlatList data={listFire}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                            <ItemCardapio
                                nome={item.nome}
                                valor={item.valor}
                                descricao={item.descricao}
                            />

                        } /> */}

                </View>

                <View style={StyleIndex.footerContainer}>
                    <TouchableOpacity
                        style={style.btnPedir}>
                        <Text style={style.txtPedir}>
                            Pedir
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    btnPedir: {
        width: 100,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtPedir: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
})