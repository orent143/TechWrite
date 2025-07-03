// AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../onboarding/WelcomeScreen';
import SignupScreen from '@/app/onboarding/signup';
import LoginScreen from '@/app/onboarding/signin';   
import PostSignupOnboardingScreen from '@/app/onboarding/PostSignupOnboardingScreen';
import Home from '../home';

export type RootStackParamList = {
  Welcome: undefined;
  Signup: undefined;
  Login: undefined;
  PostSignupOnboarding: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const isAuthenticated = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="PostSignupOnboarding" component={PostSignupOnboardingScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
