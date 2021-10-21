import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'

export default props => {
    const goToPedidos = () => { props.navigation.navigate("Pedidos") }
    const goToFormasPagamento = () => { props.navigation.goBack() }

    const [tipoCartao] = useState(['Selecione o tipo', 'Débito', 'Crédito']);
    const [tipoSelecionado, setTipoSelecionado] = useState([])

    const [bandeiraCartao, setBandeiraCartao] = useState('')
    const [numeroCartao, setNumeroCartao] = useState('')
    const [validade, setValidade] = useState('')
    const [cvv, setCvv] = useState('')
    const [nomeTitular, setNomeTitular] = useState('')
    const [cpfTitular, setCpfTitular] = useState('')

    function pushFire() {
        if (tipoSelecionado != 'Selecione o tipo') {
            try {
                firebase.database().ref('/Cartoes').push({
                    bandeira: bandeiraCartao,
                    tipo: tipoSelecionado,
                    numeroCartao: numeroCartao,
                    validade: validade,
                    cvv: cvv,
                    nomeTitular: nomeTitular,
                    cpfTitular: cpfTitular
                })
            } catch (error) {
                alert(error)
            } finally {
                setBandeiraCartao('')
                setNumeroCartao('')
                setValidade('')
                setCvv('')
                setNomeTitular('')
                setCpfTitular('')
                goToFormasPagamento()
            }
        }
    }

    return (
        <Background>
            <Header />
            <View style={StyleIndex.mainContainer}>
                <TouchableOpacity style={StylePerfil.containerNavegarSup}
                    onPress={goToFormasPagamento}>
                    <Image resizeMode='contain'
                        source={SetaEsquerda}
                        style={StylePerfil.setaVoltar}
                    />
                    <Text style={StylePerfil.txtNagevarSup}>
                        Voltar para formas de pagamento
                    </Text>
                </TouchableOpacity>

                <ScrollView>
                    <View style={StyleIndex.content}>
                        <View style={style.containerSelecionarTipo}>
                            <Picker
                                style={style.selecionarTipo}
                                selectedValue={tipoSelecionado}
                                onValueChange={(itemValue) =>
                                    setTipoSelecionado(itemValue)
                                }>
                                {
                                    tipoCartao.map(tipo => {
                                        return <Picker.Item label={tipo} value={tipo} />
                                    })
                                }
                            </Picker>
                        </View>

                        <TextInput
                            style={style.input}
                            value={bandeiraCartao}
                            keyboardType='numeric'
                            onChangeText={bandeiraCartao => setBandeiraCartao(bandeiraCartao)}
                            placeholder="Bandeira"
                            placeholderTextColor="#606060" />
                        <TextInput
                            style={style.input}
                            value={numeroCartao}
                            keyboardType='numeric'
                            onChangeText={numeroCartao => setNumeroCartao(numeroCartao)}
                            placeholder="Número do cartão"
                            placeholderTextColor="#606060" />

                        <View style={style.containerValCvv}>
                            <TextInput
                                style={style.inputValCVV}
                                value={validade}
                                onChangeText={validade => setValidade(validade)}
                                placeholder="Validade"
                                placeholderTextColor="#606060" />
                            <TextInput
                                style={style.inputValCVV}
                                value={cvv}
                                keyboardType='numeric'
                                onChangeText={cvv => setCvv(cvv)}
                                placeholder="CVV"
                                placeholderTextColor="#606060" />

                        </View>
                        <TextInput
                            style={style.input}
                            value={nomeTitular}
                            onChangeText={nomeTitular => setNomeTitular(nomeTitular)}
                            placeholder="Nome do Titular"
                            placeholderTextColor="#606060" />
                        <TextInput
                            style={style.input}
                            value={cpfTitular}
                            keyboardType='numeric'
                            onChangeText={cpfTitular => setCpfTitular(cpfTitular)}
                            placeholder="CPF/CNPJ do titular"
                            placeholderTextColor="#606060" />
                    </View >
                </ScrollView>

            </View>
            <View style={StyleIndex.footerContainer}>
                <TouchableOpacity
                    style={style.btnAdicionarCartao}>
                    <Text style={style.txtAdicionarCartao}
                        onPress={pushFire}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    btnAdicionarCartao: {
        width: 360,
        height: 50,
        backgroundColor: '#FF6300',
        padding: 0,
        // marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txtAdicionarCartao: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
    },
    selecionarTipo: {
        color: '#606060',
        justifyContent: 'flex-start',
        // fontWeight: 'bold',
        // fontSize: 24,
    },
    containerSelecionarTipo: {
        width: 300,
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#FF6300',
        justifyContent: 'center',
        // marginTop: 15,
        // backgroundColor: '#ccc'
    },
    input: {
        height: 30,
        width: 300,
        marginTop: 25,
        padding: 0,
        borderBottomWidth: 2,
        borderColor: '#FF6300',
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerValCvv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    },
    inputValCVV: {
        height: 30,
        width: 140,
        marginTop: 25,
        padding: 0,
        borderBottomWidth: 2,
        borderColor: '#FF6300',
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    }
})