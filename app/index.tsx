import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.contentContainer}>
        <View style={styles.topSection}>
          <Text style={styles.appName}>UnifiED</Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.welcomeText}>Welcome to Your Healthcare Learning Journey!</Text>
        </View>
        <View style={styles.bottomSection}>
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(223, 160, 252)',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 60,
  },
  middleSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 50,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  welcomeText: {
    fontSize: 18,
    color: "#7F8C8D",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#AD00FF",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 3,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',  
  },
}); 