import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(196,196,196,0.1)'
    },
    Logo:{
        width: 70,
        height: 70,
        marginLeft: 20,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        marginRight: 10,
    },
})