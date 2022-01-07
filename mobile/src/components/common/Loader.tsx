import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const Loader = ({size}: any) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={size} color='#20323A' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loader;
