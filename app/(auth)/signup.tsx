import React from 'react'
import { useContext, useEffect, useState } from "react";
import { isValidEmail, isValidPassword } from "@/utils/helper";
import { StyleSheet, Text, View } from 'react-native'

const SignupPage = () => {
  return (
    <View>
      <Text>SignupPage</Text>
    </View>
  )
}

// Minaal TO-DO List:
// - Click "Sign Up" -> Navigate to Home Page signed in
// - Click "Already heave an account? Sign In" -> Navigate to Sign In

export default function SignUp(){
    // State Variables
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Will use this  once a toggle button has been added
    const [acceptedTCs, setAcceptedTCs] = useState(false); // For the T&Cs/Privacy Policy checkbox
    const [auth, setAuth] = useState(null);

    // Validate Email and Password
    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(password);

    const isFormValid = validEmail && validPassword && fullName.length > 0 && acceptedTCs;       

}

const styles = StyleSheet.create({})