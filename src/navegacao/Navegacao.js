import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginRapido from '../views/LoginRapido'
import Login from '../views/Login'
import CheckIn from '../views/CheckIn'
import Cardapio from '../views/Cardapio'
import Pedido from '../views/Pedido'
import EscolherMetodosPagamento from '../views/EscolherPagamento'



const Tab = createBottomTabNavigator()
function TabMenu(){
return(
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: { fontSize: 30 }
    }} >
        <Tab.Screen name='CheckIn' component={CheckIn} />
        <Tab.Screen name='Cardapio' component={Cardapio} />
        <Tab.Screen name='Pedido' component={Pedido} />
    </Tab.Navigator>
)
}

const Stack = createStackNavigator()
export default props => (
    <Stack.Navigator initialRouteName="LoginRapido"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginRapido' component={LoginRapido} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CheckIn' component={TabMenu} />
        <Stack.Screen name='Cardapio' component={Cardapio} />
        <Stack.Screen name='Pedido' component={Pedido} />
        <Stack.Screen name='EscolherMetodosPagamento' component={EscolherMetodosPagamento} />
    </Stack.Navigator>
)