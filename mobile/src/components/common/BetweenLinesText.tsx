import React from 'react';
import {StyleSheet, Text, View} from "react-native";

interface IBetweenLinesText {
  text: string;
  isTitle?: boolean;
}

const BetweenLinesText = ({text, isTitle = false}: IBetweenLinesText) => {

  const styles = StyleSheet.create({
    withHorizontalLine: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 65,
    },
    line: {
      borderWidth: 1,
      height: 0,
      borderEndWidth: 0,
      borderStartWidth: 0,
      borderBottomWidth: 0,
      borderColor: '#000',
      flex: 1
    },
    text: {
      color: '#414141',
      fontSize: 15,
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      marginHorizontal: 12,
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      paddingHorizontal: 22,
      letterSpacing: 2,
      fontSize: 27,
      textAlign: 'center',
    },
  });

  return (
      <View style={styles.withHorizontalLine}>
        <View style={styles.line}></View>
        <Text style={isTitle ? styles.title : styles.text}>{text}</Text>
        <View style={styles.line}></View>
      </View>
  );
};

export default BetweenLinesText;
