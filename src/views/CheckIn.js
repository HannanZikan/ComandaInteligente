import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import PropTypes from 'prop-types'


import Background from '../components/Background'
import Header from '../components/Header'

import Mira from '../../assets/images/mira.png'
import StyleIndex from '../styles/index'

export default props => {
    const goToMenu = () => { props.navigation.navigate("Menu") }

    const onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        )
    }

    return (
        <Background>
            <Header />

            <View style={StyleIndex.mainContainer}>

                <View style={style.titleContainer}>
                    <Text style={style.titleText}>
                        Escaneie o QR-Code para fazer o Check-In
                    </Text>
                </View>

                <View style={StyleIndex.contentCenter}>
                    
                        <QRCodeScanner
                            onRead={onSuccess}
                            showMarker
                            containerStyle

                            // topContent={
                            //     <Text style={style.centerText}>
                            //         Go to{' '}
                            //         <Text style={style.textBold}>wikipedia.org/wiki/QR_code</Text> on
                            //         your computer and scan the QR code.
                            //     </Text>
                            // }
                        />

                    {/* <View style={style.quadro}>
                        <TouchableOpacity
                            onPress={goToMenu}>
                            <Image
                                resizeMode='contain'
                                source={Mira}
                                style={style.mira}
                            />
                        </TouchableOpacity>
                    </View> */}
                </View>

            </View>

        </Background>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 130,
        height: 130,
    },
    quadro: {
        width: 325,
        height: 450,
        backgroundColor: '#474747',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mira: {
        width: 200,
        backgroundColor: '#ccc'
    },
    titleContainer: {
        alignItems: 'center',
        padding: 10,
        width: '100%',
        // backgroundColor: '#ccc'
    },
    titleText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
})