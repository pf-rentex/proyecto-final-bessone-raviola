import React, {useState} from 'react';
import {TextInput, View, ActivityIndicator} from 'react-native';
import styles from '../styles';

const OnboardingRealEstate = () => {
  let [name, setName] = useState<string>('');
  let [cuit, setCUIT] = useState<string>('');
  let [address, setAddress] = useState<string>('');
  let [phone, setPhone] = useState<string>('');

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={txt => setName(txt)}
        placeholder='Nombre'
        placeholderTextColor='gray'
        style={styles.input}></TextInput>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '80%'}}>
          <TextInput
            value={cuit}
            onChangeText={txt => setCUIT(txt)}
            placeholder='CUIT'
            placeholderTextColor='gray'
            style={[styles.input, {marginRight: 0}]}></TextInput>
        </View>
        <View
          style={{
            width: '20%',
          }}>
          <ActivityIndicator
            style={{
              marginRight: 30,
              marginTop: 20,
            }}
            size='small'
            color='grey'
          />
        </View>
      </View>
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
    </View>
  );
};

export default OnboardingRealEstate;
