import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'

export class AuthLayout extends Component {
  render() {
    return (
     <>
      <Stack>
        <Stack.Screen name="forgotPassword" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
      </>
    )
  }
}

export default AuthLayout

