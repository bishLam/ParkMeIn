import CustomTextInputProps from '@/types/CustomTextInputType'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomTextInput: React.FC<CustomTextInputProps> = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <View>
        <Text>{label}</Text>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})