import React, {useState, useEffect} from 'react';
import {TextInput, View, ActivityIndicator} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/Octicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import isCuitRegistered from '../../../services/Afip';

const OnboardingRealEstate = () => {
  let [name, setName] = useState<string>('');
  let [cuit, setCUIT] = useState<string>('');
  let [address, setAddress] = useState<string>('');
  let [phone, setPhone] = useState<string>('');

  const [verified, setVerified] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<boolean>(false);

  useEffect(() => {
    setVerified(false);
    setVerificationStatus(false);

    if (cuit.length >= 11) {
      const verify = async () => {
        setVerifying(true);
        const status = await isCuitRegistered(cuit);
        setVerifying(false);
        setVerified(true);
        setVerificationStatus(status);
      };
      if (!verifying) {
        verify();
      }
    }
  }, [cuit]);

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={txt => setName(txt)}
        placeholder='Nombre'
        placeholderTextColor='gray'
        style={styles.input}
      />
      <View style={styles.inputCuit}>
        <TextInput
          value={cuit}
          onChangeText={txt => setCUIT(txt)}
          maxLength={11}
          placeholder='CUIT'
          placeholderTextColor='gray'
          style={[styles.input, {flex: 3}]}
        />
        {verifying && (
          <View
            style={{
              flex: 1,
            }}>
            <ActivityIndicator size="small" color="grey" />
          </View>
        )}
        {!verifying && verified && (
          <View style={styles.inputVerificationSlot}>
            {verificationStatus && (
              <Icon name="verified" size={30} color="#3b83f6" />
            )}
            {!verificationStatus && (
              <FontAwesome5Icon name="times-circle" size={30} color="#f84444" />
            )}
          </View>
        )}
      </View>
      <TextInput
        value={address}
        onChangeText={txt => setAddress(txt)}
        placeholder='Domicilio'
        placeholderTextColor='gray'
        style={styles.input}
      />
      <TextInput
        value={phone}
        onChangeText={txt => setPhone(txt)}
        placeholder='Telefono'
        placeholderTextColor='gray'
        style={styles.input}
      />
    </View>
  );
};

export default OnboardingRealEstate;
