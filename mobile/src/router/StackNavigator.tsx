import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Onboarding from '../screens/auth/Onboarding';
import RegisterStepOne from '../screens/auth/Register/RegisterStepOne';
import RegisterStepTwo from '../screens/auth/Register/RegisterStepTwo';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='RegisterStepOne'
          component={RegisterStepOne}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='SignupStep2'
          component={RegisterStepTwo}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#057699',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
