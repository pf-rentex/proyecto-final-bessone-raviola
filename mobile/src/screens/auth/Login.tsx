import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import FacebookIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
import Footer from "../../components/auth/Footer";
import BetweenLinesText from "../../components/common/BetweenLinesText";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Login = ({navigation}) => {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');
  const [keyboardStatus, setKeyboardStatus] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setKeyboardListeners();
    return function cleanup() {
      setKeyboardStatus(undefined);
    }
  }, []);

  const setKeyboardListeners = () => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
  }

  return (
      <LinearGradient colors={['#15ABFF', '#C9F0FD']}
                      style={styles.container}>
        {!keyboardStatus &&
        <View style={styles.mainLogoContainer}>
            <VectorImage source={require('../../assets/logo.svg')}/>
        </View>
        }

        <View style={{marginTop: keyboardStatus ? hp(2) : hp(3), flex: 10, justifyContent: 'center',}}>

          <BetweenLinesText text="Login"
                            isTitle={true}/>

          <TextInput
              value={email}
              onChangeText={(txt) => setEmail(txt)}
              placeholder='Email'
              placeholderTextColor='gray'
              style={styles.input}>
          </TextInput>
          <TextInput
              value={password}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={(txt) => setPassword(txt)}
              placeholder='Password'
              placeholderTextColor='gray'
              style={styles.input}>
          </TextInput>

          <View style={styles.mainCTAContainer}>
            <TouchableOpacity style={styles.mainCTA}>
              <Text style={styles.mainCTAText}>Log in</Text>
            </TouchableOpacity>
          </View>

          <BetweenLinesText text="Or sign in using"/>

          <View style={styles.socialCTAContainer}>

            <TouchableOpacity style={styles.socialCTA}>
              <View style={styles.socialCTAGoogleIcon}>
                <GoogleIcon name="google"
                            size={15}
                            color="white"/>
              </View>
              <Text style={styles.socialCTAText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialCTA}>
              <FacebookIcon name="facebook"
                            size={30}
                            color="#111111"/>
              <Text style={styles.socialCTAText}>Facebook</Text>
            </TouchableOpacity>
          </View>

        </View>
        {!keyboardStatus && <Footer action={() => navigation.navigate('RegisterStepOne')}
                                    text="Don't have an account?"
                                    linkText="Register"
        />}
      </LinearGradient>
  );
}

export default Login;
