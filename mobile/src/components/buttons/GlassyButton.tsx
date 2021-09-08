import React, {ReactNode} from 'react';
import LinearGradient from "react-native-linear-gradient";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface IGlassyButtonProps {
  text: string;
  children: ReactNode;
  onClicked: Function;
}

const GlassyButton = ({text, children, onClicked}: IGlassyButtonProps) => {

  const styles = StyleSheet.create({
    container: {
      margin: 15,
    },
    background: {
      width: wp(24),
      height: wp(24),
      margin: 10,
      borderRadius: 10,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 15,
      flexWrap: 'wrap',
      marginTop: 10
    }
  });

  const colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.1)'];

  return (
      <TouchableOpacity activeOpacity={0.5}
                        onPress={() => onClicked()}
                        style={styles.container}>
        <LinearGradient colors={colors}
                        useAngle={true}
                        angleCenter={{x: 0.5, y: 0.5}}
                        angle={-45}
                        style={styles.background}>
          {children}
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
  );
};

export default GlassyButton;
