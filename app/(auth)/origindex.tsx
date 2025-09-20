import { CustomTextInput } from '@/components/CustomTextInput';
import auth from '@react-native-firebase/auth';
import { FirebaseError } from 'firebase/app';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// for firebase authentication


const LandingPage = ()  => {
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  

    // this is the signup page for now. WE will add the login functionality later
  const handleSignup = async () => {
    // Add signup logic here
    try{
      await auth().createUserWithEmailAndPassword(email, password);
      alert("User account created Please check your email for verification");
      
    }
    catch(error: any){
      const err = error as FirebaseError;
      alert("Error signing up: " + err.message)
    }

  }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#3e9a74' }}>
        
        <View style = {styles.screen}>
        <View style={styles.mainContainer}>
          <ScrollView bounces alwaysBounceVertical overScrollMode='always' showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Let's Sign you in</Text>
            <Text style={styles.subtitle} >Your Journey is finally here</Text>
            <View>
              <CustomTextInput label="Email" value= {email} onChangeText={(text) => setEmail(text)} placeholder="Enter your email" secureTextEntry={false} />
              <CustomTextInput label="Password" value= {password} onChangeText={(text) => setPassword(text)} placeholder="Enter your password" secureTextEntry={true} />
            </View>
            <TouchableOpacity onPress={handleSignup} style={styles.loginButton}>
              <Text>Sign In</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        </View>
      </SafeAreaView>
    )
}

export default LandingPage

// stylessheets

const styles = StyleSheet.create({
screen:{
  flex:1,
  justifyContent:"flex-end",
  marginTop:"50%",
},

  mainContainer:{
    flex:1,
    display:"flex",
    backgroundColor: "#f2f2f2",
    borderColor:"black",
    borderWidth:2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding:20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "2%",
  },
   subtitle: {
    fontSize:15,
    fontWeight: "400",
    color:"grey",
    marginBottom: "2%"
   },

   loginButton:{
    backgroundColor: "lightgrey",
    alignItems:"center",
    justifyContent:"center",
    padding:15,
    borderRadius:5,
    marginTop:"5%",
   }
})