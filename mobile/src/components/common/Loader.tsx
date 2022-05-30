import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Loader = ({size, color}: any) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={size} color={color} />
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
