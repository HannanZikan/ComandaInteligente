import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginRapido from '../views/LoginRapido'
import Login from '../views/Login'
import CheckIn from '../views/CheckIn'
import Cardapio from '../views/Cardapio'
import Pedidos from '../views/Pedidos'
import EscolherPagamento from '../views/EscolherPagamento'
import CadastrarUsuario from '../views/CadastrarUsuario'
import PerfilUsuario from '../views/PerfilUsuario'
import FormasPagamento from '../views/FormasPagamento'
import CadastrarCartao from '../views/CadastrarCartao'
import DadosUsuario from '../views/DadosUsuario'
import EsqueciMinhaSenha from '../views/EsqueciMinhaSenha'
import EsqueciMinhaSenha2 from '../views/EsqueciMinhaSenha2'
import EsqueciMinhaSenha3 from '../views/EsqueciMinhaSenha3'

import iconCardapio from '../../assets/images/cardapio.png'
import iconPerfil from '../../assets/images/icone-perfil.png'
import iconExit from '../../assets/images/icon-exit.png'

const CardapioStack = createStackNavigator();

function CardapioTabStack() {
    return (
        <CardapioStack.Navigator initialRouteName="Cardapio"
            screenOptions={{ headerShown: false }}>
            <CardapioStack.Screen name="Cardapio" component={Cardapio} />
            <CardapioStack.Screen name="Pedidos" component={Pedidos} />
            <CardapioStack.Screen name="EscolherPagamento" component={EscolherPagamento} />
            <CardapioStack.Screen name="CheckIn" component={CheckIn} />
        </CardapioStack.Navigator>
    );
}

function PerfilTabStack() {
    return (
        <CardapioStack.Navigator initialRouteName="PerfilUsuario"
            screenOptions={{ headerShown: false }}>
            <CardapioStack.Screen name="PerfilUsuario" component={PerfilUsuario} />
            <CardapioStack.Screen name="FormasPagamento" component={FormasPagamento} />
            <CardapioStack.Screen name="CadastrarCartao" component={CadastrarCartao} />
            <CardapioStack.Screen name="DadosUsuario" component={DadosUsuario} />
        </CardapioStack.Navigator>
    );
}

const Tab = createBottomTabNavigator()

function TabMenu() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#FFF',
                    borderTopColor: 'transparent',
                },
                activeTintColor: '#121212',
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                }
            }}>
            <Tab.Screen name='Cardápio' component={CardapioTabStack}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={iconCardapio}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    )
                }} />
            <Tab.Screen name='Perfil' component={PerfilTabStack}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={iconPerfil}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    )
                }} />
            <Tab.Screen name='Pedidos' component={Pedidos}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={iconExit}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    )
                }} />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator()
export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginRapido' component={LoginRapido} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='EsqueciMinhaSenha' component={EsqueciMinhaSenha} />
            <Stack.Screen name='EsqueciMinhaSenha2' component={EsqueciMinhaSenha2} />
            <Stack.Screen name='EsqueciMinhaSenha3' component={EsqueciMinhaSenha3} />
            <Stack.Screen name='CadastrarUsuario' component={CadastrarUsuario} />
            <Stack.Screen name='CheckIn' component={CheckIn} />
            <Stack.Screen name='Cardapio' component={TabMenu} />
        </Stack.Navigator>
    )
}