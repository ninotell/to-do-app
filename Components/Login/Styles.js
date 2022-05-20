import { StyleSheet } from 'react-native'

const containersWidth = 330

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
        marginVertical: 60
    },
    inputsContainers: {
        width: containersWidth,
        height: 60,
        flexDirection: 'row',
        marginVertical: 30,
        backgroundColor: "#575655",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 50,
        color: "white",
        alignItems: 'center'

    },
    inputs: {
        marginLeft: 15,
        width: "100%",
        height: "100%"
    },
    buttonContainer: {
        width: containersWidth,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "800"
    }
})

export default styles