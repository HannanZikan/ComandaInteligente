import React, { Fragment } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Rotas from './routes'

export default props => (
    <NavigationContainer>
        <StatusBar
            backgroundColor="#000"
        />
        <Rotas />

    </NavigationContainer>

)