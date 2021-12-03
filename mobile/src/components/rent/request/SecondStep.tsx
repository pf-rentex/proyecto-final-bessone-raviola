import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Attachment from '../../common/Attachment/Attachment';

const SecondStep = () => {
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
    circle: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: Dimensions.get('window').width * 0.1,
      height: Dimensions.get('window').width * 0.1,
      backgroundColor: '#EA4D4D',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  let [name, setName] = useState<string>('');
  let [email, setEmail] = useState<string>('');
  let [dni, setDNI] = useState<string>('');
  let [birthday, setBirthday] = useState<string>('');
  let [address, setAddress] = useState<string>('');
  let [phone, setPhone] = useState<string>('');

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={name}
          onChangeText={txt => setName(txt)}
          placeholder='Nombre'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholder='Email'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={dni}
          onChangeText={txt => setDNI(txt)}
          placeholder='DNI'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={birthday}
          onChangeText={txt => setBirthday(txt)}
          placeholder='Fecha de nacimiento'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={address}
          onChangeText={txt => setAddress(txt)}
          placeholder='Domicilio'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={phone}
          onChangeText={txt => setPhone(txt)}
          placeholder='Telefono'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', flex: 1, paddingHorizontal: wp('4%')}}>
            Período:
          </Text>
          <TextInput placeholder='Inicio' style={styles.input}></TextInput>
          <TextInput placeholder='Fin' style={styles.input}></TextInput>
        </View>
      </View>
      <View style={{marginTop: hp('2%')}}>
        <Text style={styles.title}>Adjunte 3 Garantes</Text>
        <View style={{flexDirection: 'row'}}>
          <Attachment name='garante_perez_12052021.pdf' size='216.32kb' />
        </View>
      </View>
    </View>
  );
};

export default SecondStep;
