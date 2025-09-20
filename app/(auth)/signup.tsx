
import { isValidEmail, isValidPassword } from "@/utils/helper";
import auth from '@react-native-firebase/auth';
import { FirebaseError } from 'firebase/app';
import React, { useState } from 'react';
import { Alert, Button, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [acceptedTCs, setAcceptedTCs] = useState(false);

  const validEmail = isValidEmail(email);
  const validPassword = isValidPassword(password);

  // Use with disabled={!isFormValid} so the button is only clickable when the form is valid
  const isFormValid = validEmail && validPassword && fullName.length > 0 && acceptedTCs;

  const handleFirebaseSignup = async (email: string, password: string) => {
    // Add signup logic here
    try{
      await auth().createUserWithEmailAndPassword(email, password);
      alert("User account created Please check your email for verification");
      
    }
    catch(error: any){
      const err = error as FirebaseError;
      alert("Error signing up: " + err.message)
    }
  };

  const handleSignup = async () => {
    Keyboard.dismiss(); // Hide the keyboard

    const errors = [];

    if (!fullName) {
      alert("Full Name is required.");
      errors.push('Full Name is required.');
    }
    if (!validEmail) {
      alert("Please enter a valid email address.");
      errors.push('Please enter a valid email address.');
    }
    if (!validPassword) {
      alert('Password must be at least 8 characters long.');
      errors.push('Password must be at least 8 characters long.');
    }
    if (!acceptedTCs) {
      alert('Please accept the Terms and Conditions.');
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

