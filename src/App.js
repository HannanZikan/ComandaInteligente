import React, { Fragment } from 'react'
import { SafeAreaView, Text, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Login from './views/Login'
import CheckIn from './views/CheckIn'
import Cardapio from './views/Cardapio'
import Pedido from './views/Pedido'
import EscolherMetodosPagamento from './views/EscolherPagamento'

export default () => {
    return (
        <Fragment>
            <NavigationContainer>
                <StatusBar
                    backgroundColor="#000"
                />
                <CheckIn />
            </NavigationContainer>
            {/* <Login /> */}
            {/* <CheckIn /> */}
            {/* <Cardapio /> */}
            {/* <Pedido /> */}
            {/* <EscolherMetodosPagamento /> */}

        </Fragment>
    )
}