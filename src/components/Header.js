import React from 'react'
import { View, Text, Image } from 'react-native'
import firebase from 'firebase'

import Logo from '../../assets/images/logo.png'
import Style from '../styles/header'

export default props => {
    // const user = firebase.auth().currentUser;

    return (
        <View style={Style.header}>
            <Image
                resizeMode='contain'
                source={Logo}
                style={Style.Logo} />

                <Text style={Style.headerText}>
                    {/* Bem vindo, {user.displayName}! */}
                    Bem Vindo,
                </Text>

            {props.children}
        </View>
    )
}