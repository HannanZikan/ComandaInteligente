import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import firebase from 'firebase'

import Background from '../components/Background'
import Header from '../components/Header'

import StyleIndex from '../styles/index'
import StylePerfil from '../styles/perfil'

import SetaEsquerda from '../../assets/images/left-arrow.png'
import cartao from '../../assets/images/icon-mastercard.png'

export default props => {
    const goToObrigado = () => { props.navigation.navigate("TelaObrigado") }
    const goToFormasPagamento = () => { props.navigation.goBack() }

    const [tipoCartao] = useState(['Selecione o tipo', 'Débito', 'Crédito']);
    const [tipoSelecionado, setTipoSelecionado] = useState([])

    const [bandeiraCartao, setBandeiraCartao] = useState('')
    const [numeroCartao, setNumeroCartao] = useState('')
    const [validade, setValidade] = useState('')
    const [cvv, setCvv] = useState('')
    const [nomeTitular, setNomeTitular] = useState('')
    const [cpf, setCpfTitular] = useState('')

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
                    cpfTitular: cpf
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

    function confirmarPagamento(){
        goToObrigado()
        // if(cpf != '' && nomeTitular != '' && numeroCartao != '' && validade != '' && cvv != ''){
        //     Alert.alert("Sucesso!", "Pagamento realizado com sucesso!")
        // } else {
        //     Alert.alert("Erro", "Ocorreu um erro inesperado. Por favor tente novamente.")
        // }
    }

    return (

        <Background>
            <View style={StyleIndex.contentCenter}>

                <TextInput
                    style={style.input}
                    value={cpf}
                    keyboardType='numeric'
                    onChangeText={cpfTitular => setCpfTitular(cpfTitular)}
                    placeholder="CPF"
                    placeholderTextColor="#606060" />

                <TextInput
                    style={style.input}
                    value={nomeTitular}
                    onChangeText={nomeTitular => setNomeTitular(nomeTitular)}
                    placeholder="Nome do titular"
                    placeholderTextColor="#606060" />

                <View style={style.containerCartao}>
                    <TextInput
                        style={style.inputCartao}
                        value={numeroCartao}
                        keyboardType='numeric'
                        onChangeText={numeroCartao => setNumeroCartao(numeroCartao)}
                        placeholder="Número do cartão"
                        placeholderTextColor="#606060" />
                    <Image
                        resizeMode='contain'
                        style={style.cartao}
                        source={cartao}
                    />
                </View>

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

                <View style={style.containerPagar}>
                    <TouchableOpacity
                        onPress={()=>{
                            // console.log('teste')
                            confirmarPagamento()
                        }}
                        style={style.btnPagar}>
                        <Text style={style.txtPagar}>
                            Pagar
                        </Text>
                    </TouchableOpacity>
                </View>
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
        color: '#fff',
    },
    selecionarTipo: {
        color: '#fff',
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
    containerPagar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 300,
        marginTop: 30,
        // backgroundColor: '#ccc'
    },
    containerCartao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: 300,
        paddingRight: 5,
        // backgroundColor: '#ccc'
    },
    cartao: {
        width: 40,
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
        color: '#fff',
    },
    inputCartao: {
        height: 30,
        width: 240,
        marginTop: 25,
        padding: 0,
        borderBottomWidth: 2,
        borderColor: '#FF6300',
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
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
        color: '#fff',
    },
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPagar: {
        width: 180,
        height: 45,
        backgroundColor: '#FF6300',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtPagar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
})