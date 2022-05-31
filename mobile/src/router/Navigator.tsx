import * as React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
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
import ComplaintDetails from '../screens/complaints/ComplaintDetails';
import CreateComplaint from '../screens/complaints/CreateComplaint';
import Complaints from '../screens/complaints/Complaints';
import RequestForm from '../screens/rent/RequestForm';
import VisitProperty from '../screens/visit/VisitProperty';

const Stack = createNativeStackNavigator();

interface INavigatorProps {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const headerConfig: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#1b495b',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const Navigator = ({isAuthenticated, isLoading}: INavigatorProps) => {
  if (isLoading) {
    return <Loader size={80} />;
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
          <Stack.Screen
            name='Complaints'
            component={Complaints}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='ComplaintDetails'
            component={ComplaintDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='CreateComplaint'
            component={CreateComplaint}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='VisitProperty'
            component={VisitProperty}
            options={() => ({
              ...headerConfig,
              title: 'Organizar visita',
            })}
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
