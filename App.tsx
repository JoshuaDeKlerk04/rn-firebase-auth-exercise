import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { use, useEffect, useState } from 'react';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import RegistrationScreen from './screens/RegistrationScreen';
import type { RootStackParamList } from './types/navigation';

// TODO: Navigation Container
const Stack = createNativeStackNavigator<RootStackParamList>(
  {
    screens: {
    Login: LoginScreen,
    Registration: RegistrationScreen,
    Profile: ProfileScreen,
    },
  }
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        setIsLoggedIn(true);
        console.log("User is logged in:", user.email);

      } else {

        setIsLoggedIn(false);
        console.log("No user is logged in");

      }
    });

    // TODO: research how to convert this code to use a useContext hook (better practice)
    
  }, []);

  return (

    <NavigationContainer>
      { isLoggedIn ? (
        // If the user is logged in, show the Profile screen
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      ) : (
        // If the user is not logged in, show the Login screen
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
        
      )}
    </NavigationContainer>

  );
}

// 1. setup the navigation for when a user is logged out
// 2. setup the navigation for when a user is logged in
// 3. listen to whether a user is logged in or not