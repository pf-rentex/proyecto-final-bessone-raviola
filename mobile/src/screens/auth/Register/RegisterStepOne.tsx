import React from 'react';
import {Text, View} from 'react-native';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
import GlassyButton from '../../../components/buttons/GlassyButton';
import Footer from '../../../components/auth/Footer';
import BetweenLinesText from '../../../components/common/BetweenLinesText';

const RegisterStepOne = ({navigation}) => {
  const goNextStep = () => {
    navigation.navigate('SignupStep2');
  };

  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
      <View style={[{flex: 1, justifyContent: 'center', alignSelf: 'center'}]}>
        <VectorImage source={require('../../../assets/logo.svg')} />
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <BetweenLinesText text='Register' isTitle={true} />

        <Text style={styles.subtitle}>What describes you best?</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <GlassyButton
            text='Real Estate Agency'
            onClicked={goNextStep}
            children={
              <VectorImage
                source={require('../../../assets/real_estate.svg')}
              />
            }
          />
          <GlassyButton
            text='Owner'
            onClicked={goNextStep}
            children={
              <VectorImage source={require('../../../assets/owner.svg')} />
            }
          />
          <GlassyButton
            text='Tenant'
            onClicked={goNextStep}
            children={
              <VectorImage source={require('../../../assets/tenant.svg')} />
            }
          />
        </View>
      </View>
      <Footer
        action={() => navigation.navigate('Login')}
        text='Already Registered?'
        linkText='Login'
      />
    </LinearGradient>
  );
};

export default RegisterStepOne;
