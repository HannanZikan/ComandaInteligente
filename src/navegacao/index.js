import React, { Fragment } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navegacao from './Navegacao'

export default props => (
    <NavigationContainer>
        <StatusBar
            backgroundColor="#000"
        />
        <Navegacao />
    </NavigationContainer>

)