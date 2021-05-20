import React, { Fragment } from 'react'
import { SafeAreaView, Text, StatusBar, View } from 'react-native'

import Login from './views/Login'
import CheckIn from './views/CheckIn'
import Cardapio from './views/Cardapio'
import Pedido from './views/Pedido'
import EscolherMetodosPagamento from './views/EscolherPagamento'

export default () => {
    return (
        <Fragment>
            <StatusBar
                backgroundColor="#000"
            />
            {/* <Login /> */}
            {/* <CheckIn /> */}
            {/* <Cardapio /> */}
            {/* <Pedido /> */}
            <EscolherMetodosPagamento />

        </Fragment>
    )
}
