import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import FacebookIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BetweenLinesText from '../../../components/common/BetweenLinesText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {UserType} from './RegisterStepOne';
import {connect} from 'react-redux';
import {loadUser, signup} from '../../../actions/auth';
import {REGISTER_FAIL} from '../../../actions/types';
import {clearErrors, getErrors} from '../../../actions/error';
import {IError} from '../../../reducers/error';

interface IRegisterStepTwoProps {
  userType: UserType;
  navigation: any;
  route: any;
  authenticate: Function;
  error: IError;
  isAuthenticating: boolean;
  getErrors: Function;
  clearErrors: Function;
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
};

const RegisterStepTwo = ({
  navigation,
  route,
  authenticate,
  error,
  isAuthenticating,
  getErrors,
  clearErrors,
}: IRegisterStepTwoProps) => {
  const [form, setForm] = useState<IRegisterFormData>(initialFormData);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const [keyboardStatus, setKeyboardStatus] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    const {userType} = route.params;
    if (userType) {
      setForm({...form, userType});
    }
    clearErrors();
    setKeyboardListeners();
    return function cleanup() {
      setKeyboardStatus(undefined);
    };
  }, [clearErrors, form, route.params]);

  const setKeyboardListeners = () => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
  };

  useEffect(() => {
    setPasswordsMatch(form.password === form.repeatPassword);
  }, [form.password, form.repeatPassword]);

  const onSubmit = () => {
    if (isValid()) {
      authenticate(form, navigation);
    } else {
      const errorMessage = passwordsMatch
        ? 'Rellena todos los campos'
        : 'Las contraseñas no coinciden';
      getErrors(errorMessage, 400, REGISTER_FAIL);
    }
  };

  const isValid = (): boolean => {
    return form.email.length > 0 && form.password.length > 0 && passwordsMatch;
  };

  return (
    <LinearGradient
      colors={['#15ABFF', '#C9F0FD']}
      style={[styles.container, {paddingHorizontal: wp(12)}]}>
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
          style={styles.input}
        />
        <TextInput
          value={form.password}
          secureTextEntry={true}
          onChangeText={txt => setForm({...form, password: txt})}
          placeholder='Password'
          placeholderTextColor='gray'
          style={styles.input}
        />
        <TextInput
          value={form.repeatPassword}
          textContentType='password'
          secureTextEntry={true}
          onChangeText={txt => setForm({...form, repeatPassword: txt})}
          placeholder='Repeat password'
          placeholderTextColor='gray'
          style={styles.input}
        />

        {error.id === REGISTER_FAIL && error.msg.length > 0 && (
          <Text
            style={{
              color: '#ba091d',
              marginTop: hp(2),
            }}>
            {error.msg}
          </Text>
        )}

        <View style={styles.mainCTAContainer}>
          <TouchableOpacity style={styles.mainCTA} onPress={onSubmit}>
            {isAuthenticating && (
              <ActivityIndicator
                style={{
                  left: wp(-15),
                }}
                color='#fff'
              />
            )}
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
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated,
  isAuthenticating: state.auth.isAuthenticating,
});

export default connect(mapStateToProps, {
  authenticate: signup,
  clearErrors,
  getErrors,
  loadUser,
})(RegisterStepTwo);
