import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        // flex: 0.3,
        paddingTop: 5,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(196,196,196,0.1)'
    },
    Logo:{
        width: 130,
        height: 130,
    },
    headerConteinerText: {
        flex: 1,
        paddingLeft: 5,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
    },
})