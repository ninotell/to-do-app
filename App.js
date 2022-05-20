import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import styles from './Styles';
import Home from './Components/Home/Index';
import Login from './Components/Login/Index';

export default function App() {

  return (
    // <Home/>
    <Login/>
  );
}