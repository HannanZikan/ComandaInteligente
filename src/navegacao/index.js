import React, { Fragment } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'

export default props => (
    <NavigationContainer>
        <StatusBar
            backgroundColor="#000"
        />
        <Stack />
    </NavigationContainer>

)