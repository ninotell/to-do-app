import { Text, View, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import styles from './Styles';
import TaskItem from '../TaskItem/Index';

let testTasks = [
  {
    id: 1,
    content: "Test tag 1",
    archived: true
  },
  {
    id: 2,
    content: "Test tag 2",
    archived: false
  },
  {
    id: 3,
    content: "Test tag 3",
    archived: true
  }
]

const Home = () => {
  const [allTasks, setAllTasks] = useState([])
  const [newTask, setNewTask] = useState()

  const handleAddTask = () => {
    if (!newTask) {
      console.warn("Task Empty")
      return
    }
    const taskToAdd = {
      id: Math.random(),
      content: newTask,
      archived: false
    }

    setAllTasks(prev => [...prev, taskToAdd])
    setNewTask("")
  }


  const renderTaskItem = ({ item }) => {
    return (
      <TaskItem
        id={item.id}
        content={item.content}
        archived={item.archived}
        setAllTasks={setAllTasks}
        allTasks={allTasks}
      />
    )
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>My Tasks</Text>

        {!allTasks
        ? <Text style={{ fontSize: 50, color: "white", marginTop: 200 }}>No tasks to show</Text>
        :<FlatList
          data={allTasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id}
          style={styles.tasksList}
          extraData={allTasks}
        />
        }


      </View>
      <View
        style={styles.bottomContainer}>
        <TextInput
          style={styles.inputTask}
          onChangeText={e => setNewTask(e)}
          value={newTask}
          placeholder="Enter a new task!"
          placeholderTextColor={"lightgrey"}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask} >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View >
    </KeyboardAvoidingView>
  );
}

export default Home