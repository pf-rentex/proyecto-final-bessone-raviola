import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  button: {
    width: wp(100),
    position: 'absolute',
    height: hp(6),
    backgroundColor: '#204153',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: hp(2),
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});

interface IStickyButtonProps {
  position: 'top' | 'bottom';
  text: string;
  icon?: JSX.Element;
  callback: () => void;
}

const StickyButton = ({position, text, icon, callback}: IStickyButtonProps) => {
  return (
    <TouchableOpacity
      onPress={callback}
      style={[
        styles.button,
        {
          top: position === 'top' ? 0 : undefined,
          bottom: position === 'bottom' ? 0 : undefined,
        },
      ]}>
      <View style={styles.content}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StickyButton;
