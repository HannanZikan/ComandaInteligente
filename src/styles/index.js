import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    contentCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
    },
    titleText: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 80,
    },
    footerContaineSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 80,
        width: '100%',
    },
})