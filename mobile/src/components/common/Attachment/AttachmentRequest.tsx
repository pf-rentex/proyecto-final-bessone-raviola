import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AttachmentRequest = (navigation: any) => {
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
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('DocumentViewer');
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Adjuntar o Escanear archivo
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default AttachmentRequest;
