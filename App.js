import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import styles from './Styles';
import Home from './Components/Home/Index';
import Login from './Components/Login/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser.email)
    }
    else {
      setUser(null)
    }
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {!user
          ? <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          : <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
          >
            {() => <Home email={user} />}
          </Stack.Screen>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}