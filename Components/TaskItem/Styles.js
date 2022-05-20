import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    taskItemContainer: {
        justifyContent: "center",
        paddingHorizontal: 20,        
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        marginBottom: 10,        
    },
    taskItemContent: {
        fontSize: 18,
        color: "white",
    },
})

export default styles