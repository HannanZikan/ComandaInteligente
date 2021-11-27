import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginRapido from '../views/LoginRapido'
import Login from '../views/Login'
import CheckIn from '../views/CheckIn'
import MenuAtendimento from '../views/MenuAtendimento'
import Cardapio from '../views/Cardapio'
import CardapioSimples from '../views/CardapioSimples'
import InformacoesPedidos from '../views/InformacoesPedidos'
import Comanda from '../views/Comanda'
import Pedidos from '../views/Pedidos'
import EscolherPagamento from '../views/EscolherPagamento'
import CadastrarUsuario from '../views/CadastrarUsuario'
import PerfilUsuario from '../views/PerfilUsuario'
import DadosUsuario from '../views/DadosUsuario'
import EsqueciMinhaSenha from '../views/EsqueciMinhaSenha'
import AtualizarSenha from '../views/AtualizarSenha'
import PagarNoCaixa from '../views/PagarNoCaixa'
import HistoricoComandas from '../views/HistoricoComandas'
import DetalheComandaFechada from '../views/DetalheComandaFechada'

import iconMenu from '../../assets/images/icon-menu.png'
import iconCardapio from '../../assets/images/cardapio.png'
import iconPerfil from '../../assets/images/icone-perfil.png'
import iconPedidos from '../../assets/images/pedidos.png'

const CardapioStack = createStackNavigator();

function CardapioTabStack() {
    return (
        <CardapioStack.Navigator initialRouteName="Cardapio"
            screenOptions={{ headerShown: false }}>
            <CardapioStack.Screen name="Cardapio" component={Cardapio} />
            <CardapioStack.Screen name="Pedidos" component={Pedidos} />
            <CardapioStack.Screen name="InformacoesPedidos" component={InformacoesPedidos} />
            <CardapioStack.Screen name="Comanda" component={Comanda} />
            <CardapioStack.Screen name="EscolherPagamento" component={EscolherPagamento} />
            <CardapioStack.Screen name="CheckIn" component={CheckIn} />
            <CardapioStack.Screen name="PagarNoCaixa" component={PagarNoCaixa} />
        </CardapioStack.Navigator>
    );
}

const MenuStack = createStackNavigator();

function MenuTabStack() {
    return (
        <MenuStack.Navigator initialRouteName="Menu"
            screenOptions={{ headerShown: false }}>
            {/* <MenuStack.Screen name="Menu" component={MenuAtendimento} /> */}
            <MenuStack.Screen name="Cardapio" component={Cardapio} />
            <MenuStack.Screen name="InformacoesPedidos" component={InformacoesPedidos} />
            <MenuStack.Screen name="Comanda" component={Comanda} />
            <MenuStack.Screen name="EscolherPagamento" component={EscolherPagamento} />
            <MenuStack.Screen name="CheckIn" component={CheckIn} />
            <MenuStack.Screen name="PagarNoCaixa" component={PagarNoCaixa} />
        </MenuStack.Navigator>
    );
}

const PerfilStack = createStackNavigator();

function PerfilTabStack() {
    return (
        <PerfilStack.Navigator initialRouteName="PerfilUsuario"
            screenOptions={{ headerShown: false }}>
            <PerfilStack.Screen name="PerfilUsuario" component={PerfilUsuario} />
            <PerfilStack.Screen name="DadosUsuario" component={DadosUsuario} />
            <PerfilStack.Screen name="AtualizarSenha" component={AtualizarSenha} />
            <PerfilStack.Screen name="HistoricoComandas" component={HistoricoComandas} />
            <PerfilStack.Screen name="DetalheComandaFechada" component={DetalheComandaFechada} />
        </PerfilStack.Navigator>
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
            {/* <Tab.Screen name='Menu' component={MenuTabStack}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={iconMenu}
                            resizeMode='contain'
                            style={style.icone}
                        />
                    )
                }} /> */}
            <Tab.Screen name='Cardápio' component={CardapioTabStack}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={iconCardapio}
                            resizeMode='contain'
                            style={style.icone}
                        />
                    )
                }} />
            <Tab.Screen name='Perfil' component={PerfilTabStack}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={iconPerfil}
                            resizeMode='contain'
                            style={style.iconeMaior}
                        />
                    )
                }} />
            <Tab.Screen name='Pedidos' component={Comanda}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={iconPedidos}
                            resizeMode='contain'
                            style={style.iconeMaior}
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
            <Stack.Screen name='CadastrarUsuario' component={CadastrarUsuario} />
            <Stack.Screen name='CheckIn' component={CheckIn} />
            <Stack.Screen name='Menu' component={TabMenu} />
            <Stack.Screen name='Cardapio' component={TabMenu} />
        </Stack.Navigator>
    )
}

const style = StyleSheet.create({
    icone: {
        width: 30,
        height: 30,
    },
    iconeMaior: {
        width: 35,
        height: 35,
    },
    txtPedir: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
})