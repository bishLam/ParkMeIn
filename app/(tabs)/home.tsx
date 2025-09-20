import auth from '@react-native-firebase/auth';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const HomePage = () => {

    const handleLogout = async () => {
      try {
        await auth().signOut();
        router.replace('/(auth)');
      } catch (error) {
        console.error("Error signing out: ", error);
      }
    }
    
  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleLogout()}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#3e9a74"
    }

})