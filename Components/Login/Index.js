import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useState, useRef } from "react"
import React from 'react'
import styles from './Styles'

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
    const [isRegistering, setisRegistering] = useState(true)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleSubmit = () => {
        if (isRegistering){
            // Register
            console.log("Register")
            console.log("Username: ", username)
            console.log("Password: ", password)
        }else{
            // Login
            console.log("Login")
            console.log("Username: ", username)
            console.log("Password: ", password)
        }
    }

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>
                {isRegistering
                    ? "REGISTER"
                    : "LOG IN"}
            </Text>
            <KeyboardAvoidingView>
                <View style={styles.inputsContainers}>
                    <AntDesign name="user" size={24} color="white" />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Username'
                        placeholderTextColor={"black"}
                        color={"white"}
                        textContentType={"username"}
                        onChangeText={(e) => setusername(e)}
                    />
                </View>
                <View style={styles.inputsContainers}>
                    <MaterialCommunityIcons name="form-textbox-password" size={25} color="white" />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Password'
                        placeholderTextColor={"black"}
                        color={"white"}
                        textContentType={"password"}
                        secureTextEntry={true}
                        onChangeText={(e) => setpassword(e)}
                    />
                </View>
                <TouchableOpacity
                 style={styles.buttonContainer}
                 onPress={handleSubmit}
                 >
                    <Text style={styles.buttonText}>
                        {isRegistering
                            ? "SIGN UP"
                            : "LOGIN"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    onPress={() => setisRegistering(prev => !prev)}
                >
                    <Text style={{ color: "lightblue", textDecorationLine: "underline", textAlign: 'center', fontSize: 18 }}>
                        {isRegistering
                            ? "Already have an account? Login"
                            : "Don't have an account yet? Sign up"}
                    </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}
