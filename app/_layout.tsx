
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { router, Stack, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';


const RootLayout = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null> (null);
  const segments = useSegments();

  //when the user state changes, this function set the user and set initializing to false
  function handleAuthStateChanged(use: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  // Set an authentication state observer and get user data
  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    if (initializing) return;
    const inAuthGroup = segments[0] === '(auth)';
    console.log("User:", user);
    console.log("In Auth Group:", inAuthGroup); 

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

  }, [user, initializing])
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


