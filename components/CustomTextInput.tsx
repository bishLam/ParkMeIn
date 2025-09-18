import CustomTextInputProps from '@/types/CustomTextInputType';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export const CustomTextInput: React.FC<CustomTextInputProps> = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const [secureText, setSecureText] = useState(secureTextEntry);
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.textinput}
            value={value}
            onChangeText={(text) => onChangeText(text)}
            placeholder={placeholder}
            secureTextEntry={secureText}
        />{secureTextEntry && value.length > 0 &&<Pressable style={styles.showLabel} onPress={() => setSecureText(!secureText)}><Text>Show Password</Text></Pressable>}
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize:16,
    fontWeight:"bold",
    marginBottom: "1%",
  },

  textinput: {
    position:"relative",
    height: 40,
    borderWidth:1,
    borderColor:"grey",
    borderRadius:5,
    paddingHorizontal: 15,
    paddingVertical:5,
    marginBottom: 20,
    color:"black"
  },

  showLabel : {
    position: "absolute",
    right:0,
    bottom: 0
  }
})