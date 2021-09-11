import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface IFooterProps {
  action: Function;
  text: string;
  linkText: string;
}

const Footer = ({action, text, linkText}: IFooterProps) => {

  const styles = StyleSheet.create({
    footer: {
      flex: 1,
    },
    footerContainer: {
      flexDirection: "row",
      alignSelf: 'center',
    },
    footerText: {
      textAlign: 'center',
      color: '#222222',
      fontSize: 18,
    },
    footerLink: {
      paddingHorizontal: 8,
      color: '#2B99FF',
      fontWeight: 'bold',
      fontSize: 20,
    }
  })

  return (
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{text}
          </Text>
          <TouchableOpacity onPress={() => action()}>
            <Text style={styles.footerLink}> {linkText}</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Footer;
