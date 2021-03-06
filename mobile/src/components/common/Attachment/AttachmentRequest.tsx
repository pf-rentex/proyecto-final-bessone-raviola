import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const AttachmentRequest = ({fileType, redirectView}: any) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(30,70,99,0.5)',
      height: hp('10%'),
      borderRadius: 6,
      borderStyle: 'dashed',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('DocumentViewer', {fileType, redirectView});
      }}>
      <View style={styles.container}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Adjuntar o Escanear archivo
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default AttachmentRequest;
