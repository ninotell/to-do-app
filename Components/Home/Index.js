import { Text, View, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './Styles';
import TaskItem from '../TaskItem/Index';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, firestore } from '../../Firebase/firebase';
import { signOut } from "firebase/auth"

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"



const testTasks = [
  {
    id: 1,
    title: "Test task 1",
    content: "Test task 1"
  },
  {
    id: 2,
    title: "Test task 1",
    content: "Test task 2"
  }
]


const Home = ({ navigation, email }) => {
  const [allTasks, setAllTasks] = useState([])
  const [newTask, setNewTask] = useState()
  const [isLoading, setisLoading] = useState(true)

  async function searchDocumentOrCreateDocument(documentId) {
    // create reference to the document


    const documentReference = doc(firestore, `users/${documentId}`)
    // search document
    const userDocument = await getDoc(documentReference);

    // search if exists
    if (userDocument.exists()) {
      // if exists
      const docInfo = userDocument.data()
      return docInfo.notes;
    } else

    // if not exists
    {
      await setDoc(documentReference, {
        notes: [...testTasks]
      });
      const userDocument = await getDoc(documentReference);
      const docInfo = userDocument.data()
      return docInfo.notes;
    }
  }

  
  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await searchDocumentOrCreateDocument(email);
      setAllTasks(fetchedNotes)
      setisLoading(false)
    }
    fetchNotes();
  }, [])

  const handleLogOut = () => {
    Alert.alert("Logout confirmation", "Are you sure to logout?", [
      {
        text: "Confirm",
        onPress: () => {
          signOut(auth)
        }
      },
      {
        text: "Cancel"
      }
    ])
  }

  const handleAddTask = () => {
    if (!newTask) {
      Alert.alert("Error", "New task is empty", ["Ok"])
      return
    }
    const prevTasks = allTasks
    const newNoteTitle = newTask
    const newNoteContent = newTask
    const newNotesArray = [...allTasks, {
      id: new Date(),
      title: newNoteTitle,
      content: newNoteContent
    }]
    setAllTasks(newNotesArray)
    setNewTask("")
    const documentReference = doc(firestore, `users/${email}`)
    updateDoc(documentReference, { notes: newNotesArray })
      .then(() => {
      })
      .catch(e => {
        setAllTasks([...prevTasks])
        setNewTask(newNoteContent)
        console.log(e)
      }
      )

  }


  const renderTaskItem = ({ item }) => {
    return (
      <TaskItem
        taskItemId={item.id}
        content={item.content}
        archived={item.archived}
        setAllTasks={setAllTasks}
        allTasks={allTasks}
        email={email}
      />
    )
  }

  return (
    <KeyboardAvoidingView
      behavior='height'
      style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>My Tasks</Text>
          <TouchableOpacity
            style={styles.logoutContainer}
            onPress={handleLogOut}
          >
            <MaterialIcons name="logout" size={30} color="#DC143C" />
            <Text
              style={styles.logoutText}
            >Logout</Text>
          </TouchableOpacity>
        </View>


        {isLoading
          ? (

            <Text style={styles.loader}>Loading tasks...</Text>
          )
          : (!allTasks || allTasks.length === 0)
            ? <Text style={{ fontSize: 24, color: "lightyellow", textAlign: 'center' }}>No tasks to show</Text>
            : <FlatList
              data={allTasks}
              renderItem={renderTaskItem}
              keyExtractor={(item) => item.id}
              style={styles.tasksList}
              extraData={allTasks}
            />
        }


      </View>
      {
      isLoading
      ? <></>
      :
      <View
        style={styles.bottomContainer}>
        <TextInput
          style={styles.inputTask}
          onChangeText={e => setNewTask(e)}
          value={newTask}
          placeholder="Enter a new task!"
          placeholderTextColor={"lightgrey"}
          maxLength={40}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask} >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View >
      }
    </KeyboardAvoidingView>
  );
}

export default Home