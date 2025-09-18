import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'

export class MainLayout extends Component {
  render() {
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
}

export default MainLayout

