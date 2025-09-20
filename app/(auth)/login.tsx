import { CustomTextInput } from '@/components/CustomTextInput';
import { isValidEmail, isValidPassword } from '@/utils/helper';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    // State Variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [auth, setAuth] = useState(null);

    // Validate Email and Password
    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(password);

    const isFormValid = validEmail && validPassword

    useEffect(() => {
        if (auth) {
            // router.navigate("/tabs");
        }
    }, [auth]);

    const handleFirebaseLogin = async (email: string, password: string) => {
        // Placeholder for Firebase login logic
    }

    const handleLogin = async () => {
        Keyboard.dismiss(); // Hide the keyboard

        if (!isFormValid) {
            Alert.alert('Incomplete Form', 'Please enter your email and password.');
            return;
        }

        await handleFirebaseLogin(email, password);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

     return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#3e9a74' }}>
            <View style={styles.screen}>
                <View style={styles.mainContainer}>
                    <ScrollView bounces alwaysBounceVertical overScrollMode='always' showsVerticalScrollIndicator={false}>
                        <Text style={styles.title}>Let's Sign you in</Text>
                        <Text style={styles.subtitle} >Your Journey is finally here</Text>
                        <View>

                            <CustomTextInput
                                label="Email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholder="Enter your email"
                                secureTextEntry={false}
                            />
                            {/* I added props for the password input and visibility toggle */}
                            <CustomTextInput
                                label="Password"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                placeholder="Enter your password"
                                secureTextEntry={!isPasswordVisible}
                            />
                        </View>
                        {/* I added onPress and disabled props to the button so it should only click when form is valid*/}
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={!isFormValid}>
                            <Text>Sign In</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

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