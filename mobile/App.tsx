import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import StackNavigator from "./src/router/StackNavigator";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#00c1ff',
  };

  return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
         <StackNavigator />
      </SafeAreaView>
  );
};


export default App;
