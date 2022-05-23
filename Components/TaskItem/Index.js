import { TouchableOpacity, Text, Alert, View } from 'react-native'
import React from 'react'
import styles from './Styles'
import { firestore } from '../../Firebase/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { Entypo } from '@expo/vector-icons';

const TaskItem = ({ content, taskItemId, archived, setAllTasks, allTasks, email }) => {
    const handleArchive = () => {
        const prevTasks = allTasks
        allTasks.forEach(task => {
            if (task.id === taskItemId) {
                task.archived = !archived
            }
        })
        setAllTasks([...allTasks])
        const documentReference = doc(firestore, `users/${email}`)
        updateDoc(documentReference, { notes: allTasks })
            .then(() => {
            })
            .catch(error => {
                setAllTasks(prevTasks)
                Alert.alert("Error", error.message, ["Ok"])
            })


    }

    const handleDelete = () => {
        Alert.alert("Confirm delete", `Are you sure to delete task: ${content}`, [
            {
                text: "Confirm",
                onPress: () => {
                    const prevTasks = allTasks
                    const newTaskArray = allTasks.filter(task => task.id !== taskItemId)
                    // console.log(newTaskArray)
                    setAllTasks([...newTaskArray])
                    const documentReference = doc(firestore, `users/${email}`)
                    updateDoc(documentReference, { notes: newTaskArray })
                        .then(console.log("Delete confirmed"))
                        .catch(error => {
                            setAllTasks([...prevTasks])
                            Alert.alert("Error", error.message, ["Ok"])
                        })
                }
            },
            {
                text: "Cancel"
            }
        ])


    }



    return (
        <View style={styles.taskItemContainer}>
            <TouchableOpacity
                activeOpacity={.5}
                onPress={handleArchive}
                style={[styles.taskItemContentContainer, archived ? { backgroundColor: "#2e2e2e" } : { backgroundColor: "white" }]}>
                <Text style={[styles.taskItemContent, archived ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none', color: "black" }]}>{content}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={.5}
                style={styles.deleteTaskItemButton}
                onPress={handleDelete}
            >
                <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default TaskItem