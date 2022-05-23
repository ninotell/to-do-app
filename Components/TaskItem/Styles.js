import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    taskItemContainer: {
        width: "100%",
        flexDirection: 'row'
    },
    taskItemContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 10,
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 10,
    },
    taskItemContent: {
        fontSize: 18,
        color: "white",
    },
    deleteTaskItemButton: {
        width: "10%",
        height: 50,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: "red",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})

export default styles