
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { router, Stack, useSegments } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'

const RootLayout = () => {

  const [initialising, setInitialising] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null> (null);
  const segments = useSegments();

  const OnAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log("Auth state changed: ", user);
    setUser(user);
    if(initialising) setInitialising(false);
  }

  useEffect (() => {
    const subscriber = auth().onAuthStateChanged(OnAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])

  useEffect(() => {
    if(initialising) return;
    const inAuthGroup = segments[0] === '(auth)';
    if(user && inAuthGroup) {
      // If the user is signed in and the initial segment is anything in the auth group, redirect to (tabs)
      console.log("User is signed in, redirecting to (tabs)");
      // Redirect to (tabs)
      router.replace('/(tabs)/home');
    }

    if(!user && !inAuthGroup){
      // If the user is not signed in and the initial segment is not in the auth group, redirect to (auth)
      console.log("User is not signed in, redirecting to (auth)");
      // Redirect to (auth)
      router.replace('/(auth)');
    }

  }, [user, initialising])
  return (
     <>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      </Stack>
      <StatusBar style="auto" />
      </>
  )
}

export default RootLayout


