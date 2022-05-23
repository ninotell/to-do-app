import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native'
import { useState, useRef } from "react"
import React from 'react'
import styles from './Styles'

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { auth } from '../../Firebase/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';




export default function Login({ navigation }) {
    const [isRegistering, setisRegistering] = useState(false)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [viewPassword, setviewPassword] = useState(true)
    const [passwordRecover, setPasswordRecover] = useState(false)

    const handleSubmit = () => {
        if (passwordRecover) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setPasswordRecover(false)
                    setisRegistering(false)
                })
                .catch(error => {
                    if ((error.message).includes("user-not-found")) {
                        Alert.alert("Error", "User not found", ["Ok"])
                        return
                    }
                    Alert.alert("Error", error.message, ["Ok"])

                })
            return
        }

        if (isRegistering) {
            // Register
            createUserWithEmailAndPassword(auth, email, password)
                .then(user => {
                    // console.log(user.email)
                })
                .catch(error => {
                    Alert.alert("Login error", error.message, ["Ok"])
                })


        } else {
            // Login
            signInWithEmailAndPassword(auth, email, password)
                .then(
                    // console.log("loged")
                )
                .catch(error => {
                    if ((error.message).includes("wrong-password")) {
                        Alert.alert("Login error", "Wrong password", [
                            {
                                text: "Ok"
                            },
                            {
                                text: "Recover",
                                onPress: () => setPasswordRecover(true)
                            }
                        ])
                        return
                    }
                    Alert.alert("Login error", error.message, ["Ok"])
                })
        }
    }

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>
                {passwordRecover
                    ? "PASSWORD RECOVER"
                    : isRegistering
                        ? "USER REGISTER"
                        : "USER LOGIN"}
            </Text>
            <KeyboardAvoidingView>
                <View style={styles.inputsContainers}>
                    <AntDesign name="user" size={24} color="white" />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Email'
                        placeholderTextColor={"black"}
                        color={"white"}
                        textContentType={"emailAddress"}
                        onChangeText={(e) => setemail(e)}
                    />
                </View>
                <View style={[
                    styles.inputsContainers,
                    {
                        display: passwordRecover ? "none" : "flex"
                    }
                ]}>

                    <MaterialCommunityIcons name="form-textbox-password" size={25} color="white" />
                    <TextInput
                        style={styles.inputs}
                        placeholder='Password'
                        placeholderTextColor={"black"}
                        color={"white"}
                        textContentType={"password"}
                        secureTextEntry={viewPassword ? true : false}
                        onChangeText={(e) => setpassword(e)}
                        editable={passwordRecover ? false : true}
                        selectTextOnFocus={passwordRecover ? false : true}
                    />
                    <TouchableOpacity
                        style={styles.viewPassword}
                        onPress={() => setviewPassword(prev => !prev)}
                    >
                        <Entypo name={viewPassword ? "eye-with-line" : "eye"} size={22} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleSubmit}
                // disabled={true}
                >
                    <Text style={styles.buttonText}>
                        {passwordRecover
                            ? "SEND EMAIL"
                            : isRegistering
                                ? "SIGN UP"
                                : "LOGIN"}
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.googleButtonContainer}
                    onPress={() => signInWithRedirect(auth, googleProvider)}
                >
                    <AntDesign name="google" size={24} color="black" />
                    <Text style={styles.buttonText}>
                        Login with Google
                    </Text>
                </TouchableOpacity> */}
                {passwordRecover ?
                    <></>
                    :
                    <TouchableOpacity
                        style={{ marginTop: 40 }}
                        onPress={() => setisRegistering(prev => !prev)}
                        disabled={passwordRecover ? true : false}
                    >
                        <Text style={{ color: "lightblue", textDecorationLine: "underline", textAlign: 'center', fontSize: 18 }}>
                            {isRegistering
                                ? "Already have an account? Login"
                                : "Don't have an account yet? Sign up"}
                        </Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity
                    style={{ marginTop: 40 }}
                    onPress={() => setPasswordRecover(prev => !prev)}
                >
                    <Text style={{ color: "lightyellow", textDecorationLine: "underline", textAlign: 'center', fontSize: 18 }}>
                        {!passwordRecover
                            ? "Forgot your password?"
                            : "<Go back to Login"}
                    </Text>
                </TouchableOpacity>



            </KeyboardAvoidingView>
        </View>
    )
}
