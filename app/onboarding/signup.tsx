import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type SignUpScreenProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

export default function SignUp() {
  const navigation = useNavigation<SignUpScreenProp>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.formContainer}>
        <Text style={styles.appName}>Welcome onboard!</Text>
        <Text style={styles.title}>Let’s help you meet up your tasks</Text>
        
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={20} color="#7F8C8D" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#7F8C8D"
            keyboardType="default"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="#7F8C8D" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#7F8C8D"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="#7F8C8D" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor="#7F8C8D"
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="#7F8C8D" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#7F8C8D"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>- OR SIGN UP WITH -</Text>
          <View style={styles.orLine} />
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Image 
            source={require('../../assets/images/pngtree-google-internet-icon-vector-png-image_9183287.png')} 
            style={styles.googleLogo} 
          />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1D3FF',
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  appName: {
    fontSize: 25,
    fontFamily: 'Inter-Bold',
    color: "#6A009C",
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: "#2C3E50",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#F5F6F8",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 14,
    color: "#2C3E50",
    fontFamily: 'Inter-Regular',
  },
  signUpButton: {
    backgroundColor: "#A32EDA",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    textAlign: "center",
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 10,
    color: "#7F8C8D",
    fontSize: 14,
    fontFamily: 'Inter-Regular',


  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  googleLogo: {
    width: 24,
    height: 24,
  },
  googleButtonText: {
    marginLeft: 10,
    color: "#333333",
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#7F8C8D",
    fontSize: 14,
  },
  linkText: {
    color: "#AD00FF",
    fontSize: 14,
    fontFamily: 'Inter-Bold',
  },
}); 