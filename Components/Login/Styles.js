import { StyleSheet } from 'react-native'

const containersWidth = "80%"
const containersHeight = 60

const styles = StyleSheet.create({
    loginContainer: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: '#141414ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTitle: {
        color: "white",
        fontSize: 36,
        fontWeight: 'bold',
        marginVertical: 60,
        textAlign: 'center'
    },
    inputsContainers: {
        width: containersWidth,
        height: containersHeight,
        flexDirection: 'row',
        marginVertical: 30,
        backgroundColor: "#575655",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 50,
        color: "white",
        alignItems: 'center',

    },
    viewPassword: {
        position: 'absolute',
        right: 25

    },
    inputs: {
        marginLeft: 18,
        width: "100%",
        height: "100%",
        fontSize: 17
    },
    buttonContainer: {
        width: 330,
        height: containersHeight,
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "800"
    },
    // googleButtonContainer:{
    //     width: containersWidth,
    //     height: 60,
    //     backgroundColor: "#fff",
    //     borderRadius: 50,
    //     flexDirection: 'row-reverse',
    //     alignItems: 'center',
    //     paddingHorizontal: 60,
    //     justifyContent: 'space-evenly',
    //     marginTop: 10

    // }
})

export default styles