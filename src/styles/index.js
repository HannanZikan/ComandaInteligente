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
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        padding: 10,
        // marginBottom: 10,
        width: '100%',
        // backgroundColor: '#ccc',
    },
    titleText: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 80,
        // backgroundColor: '#ccc',
    },
})