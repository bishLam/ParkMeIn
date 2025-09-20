import React from 'react'
import { useContext, useEffect, useState } from "react";
import { isValidEmail, isValidPassword } from "@/utils/helper";
import { Alert, Button, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [acceptedTCs, setAcceptedTCs] = useState(false);
  const [auth, setAuth] = useState(null);

  const validEmail = isValidEmail(email);
  const validPassword = isValidPassword(password);

  // Use with disabled={!isFormValid} so the button is only clickable when the form is valid
  const isFormValid = validEmail && validPassword && fullName.length > 0 && acceptedTCs;

  useEffect(() => {
    if (auth) {
      // router.navigate("/(tabs)"); 
    }
  }, [auth]);

  const handleFirebaseSignup = async (email: string, password: string) => {
    // Placeholder for Firebase signup logic
  };

  const handleSignup = async () => {
    Keyboard.dismiss(); // Hide the keyboard

    const errors = [];

    if (!fullName) {
      errors.push('Full Name is required.');
    }
    if (!validEmail) {
      errors.push('Please enter a valid email address.');
    }
    if (!validPassword) {
      errors.push('Password must be at least 8 characters long.');
    }
    if (!acceptedTCs) {
      errors.push('Please accept the Terms and Conditions.');
    }

    if (errors.length > 0) {
      Alert.alert('Form Error', errors.join('\n'));
      return;
    }

    await handleFirebaseSignup(email, password);
  };

  // Use this for the password visibility toggle button
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    // Placeholder UI 
    <View>
      <Text>Sign Up Page</Text>
      <TextInput placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} />

      <Pressable onPress={() => setAcceptedTCs(!acceptedTCs)}>
        <Text>I accept the T&Cs</Text>
      </Pressable>

      <Button
        title="Sign Up"
        onPress={handleSignup}
        disabled={!isFormValid}
      />
    </View>
  );

}

const styles = StyleSheet.create({})

