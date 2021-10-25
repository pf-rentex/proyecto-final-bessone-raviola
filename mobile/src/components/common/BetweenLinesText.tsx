import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
    },
    line: {
      borderWidth: 1,
      height: 0,
      borderEndWidth: 0,
      borderStartWidth: 0,
      borderBottomWidth: 0,
      borderColor: '#000',
      flex: 1,
    },
    text: {
      color: '#414141',
      fontSize: hp('1.5%'),
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      marginHorizontal: wp('1.4%'),
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      paddingHorizontal: wp('4%'),
      letterSpacing: 2,
      fontSize: hp('3%'),
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.withHorizontalLine}>
      <View style={styles.line} />
      <Text style={isTitle ? styles.title : styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default BetweenLinesText;
