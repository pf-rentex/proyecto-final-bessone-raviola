import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FacebookIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Footer from '../../components/auth/Footer';
import BetweenLinesText from '../../components/common/BetweenLinesText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {login} from '../../actions/auth';
import {connect} from 'react-redux';
import {clearErrors, getErrors} from '../../actions/error';
import {IError} from '../../reducers/error';
import {LOGIN_FAIL} from '../../actions/types';

interface ILoginProps {
  login: Function;
  loadUser: Function;
  error: IError;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  clearErrors: Function;
  getErrors: Function;
  navigation: any;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

const initialFormData: ILoginFormData = {
  email: '',
  password: '',
};

const Login = ({
  navigation,
  login,
  error,
  isAuthenticated,
  isAuthenticating,
  clearErrors,
  getErrors,
  loadUser,
}: ILoginProps) => {
  const [form, setForm] = useState<ILoginFormData>(initialFormData);

  const [keyboardStatus, setKeyboardStatus] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    setKeyboardListeners();
    clearErrors();

    return function cleanup() {
      setKeyboardStatus(undefined);
    };
  }, [clearErrors]);

  useEffect(() => {
    // If authenticated redirect
    if (isAuthenticated) {
      navigation.navigate('UserProfile');
    }
  }, [navigation, isAuthenticated]);

  const setKeyboardListeners = () => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
  };

  const onEmailChange = (text: string) => {
    setForm({...form, email: text});
  };
  const onPasswordChange = (text: string) => {
    setForm({...form, password: text});
  };

  const onSubmit = () => {
    if (isValid()) {
      login(form, navigation);
    } else {
      getErrors('Rellena todos los campos', 400, LOGIN_FAIL);
    }
  };

  const isValid = (): boolean => {
    return form.email.length > 0 && form.password.length > 0;
  };

  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
      {!keyboardStatus && (
        <View style={styles.mainLogoContainer}>
          <VectorImage source={require('../../assets/logo.svg')} />
        </View>
      )}

      <View
        style={{
          marginTop: keyboardStatus ? hp(2) : hp(3),
          flex: 10,
          marginHorizontal: wp('10%'),
          justifyContent: 'center',
        }}>
        <BetweenLinesText text='Login' isTitle={true} />

        <TextInput
          value={form.email}
          onChangeText={onEmailChange}
          placeholder='Email'
          placeholderTextColor='gray'
          style={styles.input}
        />
        <TextInput
          value={form.password}
          textContentType='password'
          secureTextEntry={true}
          onChangeText={onPasswordChange}
          placeholder='Password'
          placeholderTextColor='gray'
          style={styles.input}
        />
        {error.id === LOGIN_FAIL && error.msg.length > 0 && (
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
            <Text style={styles.mainCTAText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <BetweenLinesText text='Or sign in using' />

        <View style={styles.socialCTAContainer}>
          <TouchableOpacity style={styles.socialCTA}>
            <View style={styles.socialCTAGoogleIcon}>
              <GoogleIcon name='google' size={15} color='white' />
            </View>
            <Text style={styles.socialCTAText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialCTA}>
            <FacebookIcon name='facebook' size={30} color='#111111' />
            <Text style={styles.socialCTAText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!keyboardStatus && (
        <Footer
          action={() => navigation.navigate('RegisterStepOne')}
          text="Don't have an account?"
          linkText='Register'
        />
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
  login,
  clearErrors,
  getErrors,
})(Login);
