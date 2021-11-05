import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screens/auth/Login';
import Search from '../screens/properties/Search';
import Onboarding from '../screens/auth/Onboarding';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType='front'
      initialRouteName='Profile'
      screenOptions={{
        activeTintColor: '#e91e63',
        drawerInactiveTintColor: 'white',
        itemStyle: {marginVertical: 10},
        drawerStyle: {
          backgroundColor: '#20323A',
        },
      }}>
      <Drawer.Screen
        key='Login'
        name='Login'
        component={Login}
        options={{
          drawerIcon: ({focused}) => (
            <MaterialCommunityIcons
              name='face'
              size={24}
              color={focused ? '#5FACF2' : 'white'}
            />
          ),
        }}
      />
      <Drawer.Screen
        key='Onboarding'
        name='Onboarding'
        component={Onboarding}
        options={{
          drawerIcon: ({focused}) => (
            <Ionicons
              name='notifications'
              size={24}
              color={focused ? '#5FACF2' : 'white'}
            />
          ),
        }}
      />
      <Drawer.Screen
        key='Search'
        name='Search'
        component={Search}
        options={{
          drawerIcon: ({focused}) => (
            <Ionicons
              name='search'
              size={24}
              color={focused ? '#5FACF2' : 'white'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
