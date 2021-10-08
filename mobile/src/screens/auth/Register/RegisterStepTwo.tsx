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
import {connect} from "react-redux";
import {loadUser, setSignupError, signup} from "../../../actions/auth";

interface IRegisterStepTwoProps {
  userType: UserType;
  navigation: any;
  route: any;
  authenticate: Function;
  setRegisterErrors: Function;
  setSignupError: Function;
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

const RegisterStepTwo = ({navigation, route, authenticate, setSignupError}: IRegisterStepTwoProps) => {
  const [form, setForm] = useState<IRegisterFormData>(initialFormData);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [triggered, setTriggered] = useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const [keyboardStatus, setKeyboardStatus] = useState<boolean | undefined>(undefined);

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

  useEffect(() => {
    setPasswordsMatch(form.password === form.repeatPassword)
  }, [form.password, form.repeatPassword])

  const onSubmit = () => {
    // setTriggered(true);
    if (isValid()) {
      setSubmitting(true);
      authenticate(form, navigation);
    } else {
      setSignupError('Rellena todos los campos')
    }
  }

  const isValid = (): boolean => {
    return form.email.length > 0 && form.password.length > 0 && passwordsMatch;
  }

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
          value={form.email}
          onChangeText={txt => setForm({...form, email: txt})}
          placeholder='Email'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={form.password}
          secureTextEntry={true}
          onChangeText={txt => setForm({...form, password: txt})}
          placeholder='Password'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={form.repeatPassword}
          textContentType='password'
          secureTextEntry={true}
          onChangeText={txt => setForm({...form, repeatPassword: txt})}
          placeholder='Repeat password'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>

        <View style={styles.mainCTAContainer}>
          <TouchableOpacity style={styles.mainCTA} onPress={onSubmit}>
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

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,
    {authenticate: signup, setSignupError, loadUser})(RegisterStepTwo);
