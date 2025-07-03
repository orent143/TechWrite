import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter_24pt-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter_24pt-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter_24pt-SemiBold.ttf'),
    'Lexend': require('../assets/fonts/Lexend-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
}
