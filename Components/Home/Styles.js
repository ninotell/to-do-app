import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        // paddingVertical: 60,
        paddingHorizontal: 20,
        backgroundColor: '#141414ff',
        alignItems: 'center',
    },
    topContainer: {
        width: "100%",
        marginTop: 60
    },
    headerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "left",
        color: "white"
    },
    logoutContainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
    },
    logoutText:{
        color: "white",
        fontWeight: "600",
        fontSize: 12
    },
    loader:{
        color: "white",
        fontSize: 24,
        textAlign: "center"
    },
    tasksList: {
        width: "100%",
        height: "75%"
    },
    bottomContainer: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
    },
    inputTask: {
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
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
        aspectRatio: 1 / 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonText: {
        fontSize: 25,
        color: "#141414ff"
    }
})


export default styles