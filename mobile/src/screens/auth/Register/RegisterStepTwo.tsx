import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import FacebookIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BetweenLinesText from '../../../components/common/BetweenLinesText';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {UserType} from "./RegisterStepOne";
import {ILoginFormData} from "../Login";

interface IRegisterStepTwoProps {
  userType: UserType;
  navigation: any;
  route: any;
}
export interface IRegisterFormData {
  email: string;
  password: string;
  repeatPassword: string;
  userType: UserType;
}

const initialFormData = {
  email: '',
  password: '',
  repeatPassword: '',
  userType: UserType.realEstate,
}

const RegisterStepTwo = ({navigation, route}: IRegisterStepTwoProps) => {
  const [form, setForm] = useState<IRegisterFormData>(initialFormData);

  const [keyboardStatus, setKeyboardStatus] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    const { userType } = route.params;
    if (userType) {
      setForm({...form, userType});
    }
    setKeyboardListeners();
    return function cleanup() {
      setKeyboardStatus(undefined);
    };
  }, []);

  const setKeyboardListeners = () => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
  };

  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={[styles.container, {paddingHorizontal: wp(12)}]}>
      {!keyboardStatus && (
        <View style={styles.header}>
          <VectorImage
            source={require('../../../assets/horizontal_logo.svg')}
          />
        </View>
      )}

      <View style={{justifyContent: 'center', marginTop: 40}}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          value={name}
          onChangeText={txt => setName(txt)}
          placeholder='Name'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholder='Email'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={password}
          secureTextEntry={true}
          onChangeText={txt => setPassword(txt)}
          placeholder='Password'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={repeatPassword}
          textContentType='password'
          secureTextEntry={true}
          onChangeText={txt => setRepeatPassword(txt)}
          placeholder='Repeat password'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>

        <View style={styles.mainCTAContainer}>
          <TouchableOpacity style={styles.mainCTA}>
            <Text style={styles.mainCTAText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      {!keyboardStatus && (
        <>
          <BetweenLinesText text='Or sign up using' />

          <View style={styles.socialCTAContainer}>
            <TouchableOpacity style={styles.socialCTA}>
              <View style={styles.socialCTAGoogleIcon}>
                <GoogleIcon name='google' size={20} color='white' />
              </View>
              <Text style={styles.socialCTAText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialCTA}>
              <FacebookIcon name='facebook' size={35} color='#111111' />
              <Text style={styles.socialCTAText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </LinearGradient>
  );
};

export default RegisterStepTwo;
