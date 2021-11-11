import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SectionList } from 'react-native'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'
import StyleIndex from '../styles/index'
import ItemCardapio from '../components/ItemCardapio'

export default props => {
    const [listFire, setListFire] = useState('')
    const [listBebidas, setListBebidas] = useState('')
    const [listLanches, setListLanches] = useState('')
    const [listPizzas, setListPizzas] = useState('')
    const [listPorcoes, setListPorcoes] = useState('')
    const [listRefeicoes, setListRefeicoes] = useState('')
    const [listSobremesas, setListSobremesas] = useState('')
    const [listOutros, setListOutros] = useState('')

    useEffect(() => {
        try {
            firebase.database().ref('/Cardapio')
                .orderByChild('categoria').equalTo('bebida')
                .on('value', (snapshot) => {
                    const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            descricao: childItem.val().descricao,
                            valor: childItem.val().valor,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListBebidas(list)
                })
            firebase.database().ref('/Cardapio')
                .orderByChild('categoria').equalTo('lanche')
                .on('value', (snapshot) => {
                    const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            descricao: childItem.val().descricao,
                            valor: childItem.val().valor,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListLanches(list)
                })
            firebase.database().ref('/Cardapio')
                .orderByChild('categoria').equalTo('pizza')
                .on('value', (snapshot) => {
                    const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            descricao: childItem.val().descricao,
                            valor: childItem.val().valor,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListPizzas(list)
                })
            firebase.database().ref('/Cardapio')
                .orderByChild('categoria').equalTo('porcao')
                .on('value', (snapshot) => {
                    const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            descricao: childItem.val().descricao,
                            valor: childItem.val().valor,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListPorcoes(list)
                })
            firebase.database().ref('/Cardapio')
                .orderByChild('categoria').equalTo('refeicao')
                .on('value', (snapshot) => {
                    const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            descricao: childItem.val().descricao,
                            valor: childItem.val().valor,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListRefeicoes(list)
                })
            firebase.database().ref('/Cardapio')
                .orderByChild('categoria').equalTo('sobremesa')
                .on('value', (snapshot) => {
                    const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            descricao: childItem.val().descricao,
                            valor: childItem.val().valor,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListSobremesas(list)
                })
            firebase.database().ref('/Cardapio')
                .orderByChild('categoria').equalTo('outro')
                .on('value', (snapshot) => {
                    const list = []
                    snapshot.forEach((childItem) => {
                        list.push({
                            key: childItem.key,
                            nome: childItem.val().nome,
                            descricao: childItem.val().descricao,
                            valor: childItem.val().valor,
                            status: childItem.val().status,
                            imagem: childItem.val().imagem
                        })
                    })
                    setListOutros(list)
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

                    <SectionList
                        sections={[
                            { title: "Drinks", data: listBebidas },
                            { title: "Lanches", data: listLanches },
                            { title: "Pizzas", data: listPizzas },
                        ]}
                        keyExtractor={(item) => item.key}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={StyleIndex.titleText}>
                                {title}
                            </Text>
                        )}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        props.navigation.navigate("InformacoesPedidos", item)
                                    }
                                }
                                nome={item.nome}
                                valor={item.valor}
                                descricao={item.descricao}
                                imagem={item.imagem}>
                                <ItemCardapio
                                    nome={item.nome}
                                    valor={item.valor}
                                    descricao={item.descricao}
                                    imagem={item.imagem} />
                            </TouchableOpacity>
                        }
                    />

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