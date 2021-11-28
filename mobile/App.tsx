import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Navigator from './src/router/Navigator';
import {Provider} from 'react-redux';
import store from './src/store';
import {loadUser} from './src/actions/auth';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#00c1ff',
  };

  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
