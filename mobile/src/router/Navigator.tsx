import * as React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Onboarding from '../screens/auth/Onboarding';
import RegisterStepOne from '../screens/auth/Register/RegisterStepOne';
import RegisterStepTwo from '../screens/auth/Register/RegisterStepTwo';
import DrawerNavigator from './DrawerNavigator';
import UserProfile from '../screens/user/UserProfile';
import Loader from '../components/common/Loader';
import ScannerComponent from '../components/Scanner';
import DocumentViewer from '../screens/DocumentViewer';
import Publication from '../screens/publication/Publication';
import RequestForm from '../screens/rent/RequestForm';

const Stack = createNativeStackNavigator();

interface INavigatorProps {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const Navigator = ({isAuthenticated, isLoading}: INavigatorProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
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
          <Stack.Screen
            name='Onboarding'
            component={Onboarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='UserProfile'
            component={UserProfile}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#005679',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name='DocumentViewer' component={DocumentViewer} />
          <Stack.Screen
            name='Publication'
            component={Publication}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
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
          <Stack.Screen name='DocumentViewer' component={DocumentViewer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, {})(Navigator);
