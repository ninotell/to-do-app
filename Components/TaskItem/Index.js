import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './Styles'

const TaskItem = ({ content, id, archived, setAllTasks, allTasks }) => {
    const handleArchive = () => {
        setAllTasks(prevTasks => {
            prevTasks.forEach(task => {
                if (task.id === id) {
                    task.archived = !archived                    
                }
            })
            return [...prevTasks]
        })
    }



    return (
        <TouchableOpacity
            onPress={handleArchive}
            style={[styles.taskItemContainer, archived ? {backgroundColor: "#2e2e2e"} : {backgroundColor: "white"}]}>
            <Text style={[styles.taskItemContent, archived ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none', color: "black" }]}>{content}</Text>
        </TouchableOpacity>
    )
}

export default TaskItem