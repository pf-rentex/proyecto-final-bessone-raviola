import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Attachment from '../../common/Attachment/Attachment';
import AttachmentRequest from '../../common/Attachment/AttachmentRequest';

const ThirdStep = () => {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: hp('3%'),
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: '#f5f5f5',
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('4%'),
      color: 'black',
      fontSize: hp('2.3%'),
      margin: hp('1%'),
      borderRadius: 6,
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Otro dato'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          placeholder='Otro dato'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          placeholder='Otro dato'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          placeholder='Otro dato'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
      </View>
      <View style={{marginTop: hp('3%')}}>
        <Text style={styles.title}>Adjunte X</Text>
        <View style={{flexDirection: 'column'}}>
          <Attachment name='garante_perez_12052021.pdf' size='216.32kb' />
          <AttachmentRequest />
        </View>
      </View>
    </View>
  );
};

export default ThirdStep;
