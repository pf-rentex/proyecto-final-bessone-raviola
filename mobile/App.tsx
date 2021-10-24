import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import StackNavigator from './src/router/StackNavigator';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#00c1ff',
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <StackNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
