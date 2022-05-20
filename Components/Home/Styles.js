import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingTop: 60,
        paddingHorizontal: 30,
        backgroundColor: '#141414ff',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    topContainer: {
        width: "100%"
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        marginBottom: 20,
        width: "100%",
        textAlign: "left",
        color: "white"
    },
    tasksList: {
        width: "100%",
        height: "75%"
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 25,
    },
    inputTask: {
        borderWidth: 1,
        borderRadius: 50,
        height: 60,
        borderColor: "white",
        width: "75%",
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
    },
    inputTaskText: {
        color: "white",
        fontSize: 18
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 5,
        width: 60,
        marginHorizontal: 10,
        aspectRatio: 1 / 1,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 25,
        color: "#141414ff"
    }
})


export default styles