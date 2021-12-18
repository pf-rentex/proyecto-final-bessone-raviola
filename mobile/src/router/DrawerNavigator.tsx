import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screens/auth/Login';
import Search from '../screens/properties/Search';
import Onboarding from '../screens/auth/Onboarding';
import RequestForm from '../screens/rent/RequestForm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import DocumentViewer from '../screens/DocumentViewer';

const Drawer = createDrawerNavigator();

interface IDrawerProps {
  isAuthenticated: boolean;
}

const DrawerNavigator = ({isAuthenticated}: IDrawerProps) => {
  if (isAuthenticated) {
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
        <Drawer.Screen
          key='RequestForm'
          name='RequestForm'
          component={RequestForm}
          initialParams={{guarantorFiles: [], dniFiles: [], receiptFiles: []}}
          options={{
            drawerIcon: ({focused}) => (
              <Ionicons
                name='home'
                size={24}
                color={focused ? '#5FACF2' : 'white'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  } else {
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
          key='DocumentViewer'
          name='Gestionar Documentos'
          component={DocumentViewer}
          options={{
            drawerIcon: ({focused}) => (
              <Ionicons
                name='folder-open'
                size={24}
                color={focused ? '#5FACF2' : 'white'}
              />
            ),
          }}
        />
        <Drawer.Screen
          key='RequestForm'
          name='RequestForm'
          component={RequestForm}
          options={{
            drawerIcon: ({focused}) => (
              <Ionicons
                name='home'
                size={24}
                color={focused ? '#5FACF2' : 'white'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(DrawerNavigator);
