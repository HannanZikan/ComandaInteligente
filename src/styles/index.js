import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        // backgroundColor: '#ccc',
    },
    content: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    titleContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        backgroundColor: '#ccc',
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        height: 60,
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ccc'
    },
    text: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
})