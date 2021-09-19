import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from '../styles';

const OnboardingTenant = () => {
  let [name, setName] = useState<string>('');
  let [email, setEmail] = useState<string>('');
  let [dni, setDNI] = useState<string>('');
  let [birthday, setBirthday] = useState<string>('');
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
    </View>
  );
};

export default OnboardingTenant;
