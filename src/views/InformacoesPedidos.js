import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'

import SetaEsquerda from '../../assets/images/left-arrow.png'



export default props => {
    // const goToEscolherPagamento = () => { props.navigation.navigate("EscolherPagamento") }
    const antTela = () => { props.navigation.goBack() }

    const [observacao, setObservacao] = useState('')

    const [quantidade, setQuantidade] = useState(1)
    const inc = () => setQuantidade(quantidade + 1)
    function dec() {
        if (quantidade <= 1) {
            // setQuantidade(1)
        } else if (quantidade >= 1) {
            setQuantidade(quantidade - 1)
        }
    }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <TouchableOpacity style={style.containerNavegarSup}
                onPress={antTela}
                >
                    <Image resizeMode='contain'
                        source={SetaEsquerda}
                        style={style.setaVoltar}
                    />
                    <Text style={style.txtNagevarSup}>
                        Cardápio
                    </Text>
                </TouchableOpacity>

                <View style={StyleIndex.content}>

                    <View style={style.informacoes}>
                        <Text style={style.txtNome}>
                            X comanda
                        </Text>
                        <Text style={style.txtDescricao}>
                            Dois hambúrgueres, alface, queijo, molho especial, cebola, picles e pão com gergelim
                        </Text>
                        <Text style={style.txtValor}>
                            R$ 10,00
                        </Text>
                        <Text style={style.txtobservacao}>
                            Alguma observação
                        </Text>
                        <TextInput
                            style={style.input}
                            value={observacao}
                            onChangeText={observacao => setObservacao(observacao)}
                            placeholder="Ex: Tirar o picles, carne mal passada"
                            placeholderTextColor="#606060" />

                    </View>

                </View>

                <View style={StyleIndex.footerContainer}>
                    {/* <Text style={[style.txtFecharComanda, style.txtTotal]}>
                        Total: R${"{total}"}
                    </Text> */}

                    <View style={style.containerQtde}>
                        <TouchableOpacity
                            onPress={dec}>
                            <Text style={style.txtBtnQtde}>
                                -
                            </Text>

                        </TouchableOpacity>

                        <Text style={style.txtBtnQtde}>
                            {quantidade}
                        </Text>

                        <TouchableOpacity
                            onPress={inc}>
                            <Text style={style.txtBtnQtde}>
                                +
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        style={style.btnAdicionar}
                    // onPress={goToEscolherPagamento}
                    >
                        <Text style={style.txtAdicionar}>
                            Adicionar R$ 10,00
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    containerNavegarSup: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 20,
    },
    setaVoltar: {
        width: 20,
        height: 20,
        marginTop: 5,
    },
    txtNagevarSup: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 15,
        padding: 0,
    },
    informacoes: {
        width: 350,
    },
    txtNome: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 5,
        // backgroundColor: '#ccc'
    },
    txtDescricao: {
        color: '#606060',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        // backgroundColor: '#ccc',
    },
    txtValor: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    txtobservacao: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    input: {
        width: 350,
        height: 40,
        fontSize: 18,
        // textAlign: 'center',
        // marginLeft: 5,
        paddingLeft: 5,
        paddingBottom: 0,
        paddingTop: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    btnAdicionar: {
        width: 180,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtAdicionar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    txtTotal: {
        marginRight: 30,
    },
    containerQtde: {
        flexDirection: 'row',
        width: 120,
        height: 45,
        backgroundColor: '#FF6300',
        padding: 5,
        marginRight: 30,
        justifyContent: 'center',
    },
    txtBtnQtde: {
        width: 40,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        // backgroundColor: '#ccc',
    },
})