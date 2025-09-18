import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'

export class AuthLayout extends Component {
  render() {
    return (
     <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="forgotPassword" />
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
      </Stack>
      <StatusBar style="auto" />
      </>
    )
  }
}

export default AuthLayout

