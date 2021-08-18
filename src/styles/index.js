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
        // backgroundColor: '#ccc',
    },
    contentCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ccc',
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ccc',
    },
    titleContainer: {
        alignItems: 'center',
        // padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        // marginBottom: 10,
        width: '100%',
        // backgroundColor: '#ccc',
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
        // backgroundColor: '#ccc',
    },
    footerContaineSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 80,
        width: '100%',
        // backgroundColor: '#ccc',
    },
})