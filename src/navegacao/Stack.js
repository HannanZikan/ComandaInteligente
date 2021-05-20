import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../views/Login'
import CheckIn from '../views/CheckIn'
import Cardapio from '../views/Cardapio'
import Pedido from '../views/Pedido'
import EscolherMetodosPagamento from '../views/EscolherPagamento'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CheckIn' component={CheckIn} />
        <Stack.Screen name='Cardapio' component={Cardapio} />
        <Stack.Screen name='Pedido' component={Pedido} />
        <Stack.Screen name='EscolherMetodosPagamento' component={EscolherMetodosPagamento} />
    </Stack.Navigator>
)