import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import FacebookIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from "./LoginStyles";

const Login = () => {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');
  const [keyboardStatus, setKeyboardStatus] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    })
  }, []);

  return (
      <LinearGradient colors={['#15ABFF', '#C9F0FD']}
                      style={styles.container}>
        {!keyboardStatus &&
        <View style={styles.mainLogoContainer}>
            <VectorImage source={require('../../assets/logo.svg')}/>
        </View>
        }

        <View style={{marginTop: keyboardStatus ? 50 : 100, flex: 12, justifyContent: 'center',}}>
          <View style={styles.withHorizontalLine}>
            <View style={styles.line}></View>
            <Text style={styles.title}>Login</Text>
            <View style={styles.line}></View>
          </View>
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

          <View style={styles.withHorizontalLine}>
            <View style={styles.line}></View>
            <Text style={{
              color: 'black',
              fontSize: 18,
              marginHorizontal: 12,
            }}>Or Sign in with
            </Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.socialCTAContainer}>
            <TouchableOpacity style={styles.socialCTA}>
              <View style={styles.socialCTAGoogleIcon}>
                <GoogleIcon name="google"
                            size={20}
                            color="white"/>
              </View>
              <Text style={styles.socialCTAText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialCTA}>
              <FacebookIcon name="facebook"
                            size={35}
                            color="#111111"/>
              <Text style={styles.socialCTAText}>Facebook</Text>
            </TouchableOpacity>
          </View>

        </View>
        {!keyboardStatus &&
        <View style={styles.footer}>
            <View style={styles.footerContainer}>
                <Text style={{
                  textAlign: 'center',
                  color: '#222222',
                  fontSize: 20,
                }}>Don't Have an account?
                </Text>
                <Text style={{color: '#2B99FF', fontSize: 20}}> Register</Text>
            </View>
        </View>
        }
      </LinearGradient>
  );
}

export default Login;
