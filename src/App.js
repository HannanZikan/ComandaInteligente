import React, { Fragment } from 'react'
import { SafeAreaView, Text, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Routes from './navegacao/routes'

export default () => {
    return (
        <Fragment>
            <NavigationContainer>
                <StatusBar
                    backgroundColor="#000"
                />
                <Routes />
            </NavigationContainer>
        </Fragment>
    )
}