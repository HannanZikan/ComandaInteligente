import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        // backgroundColor: '#ccc',
    },
    header:{
        // flex: 0.3,
        paddingTop: 5,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ccc'
    },
    headerConteinerText:{
        flex: 1,
        paddingLeft: 5,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        
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