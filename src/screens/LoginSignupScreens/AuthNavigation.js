import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './SignUpScreen';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {

  return (
    <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="welcomepage" component={WelcomeScreen} 
            options= {{
                headerShown: false,
            }}
        />
        <Stack.Screen name="signup" component={SignUpScreen} 
            options= {{
                headerShown: false,
            }}
        />
        <Stack.Screen name="login" component={LoginScreen} 
            options= {{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
  )
}

export default AuthNavigation
