import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import OnboardingRealEstate from './Onboarding/OnboardingRealEstate';
import OnboardingTenant from './Onboarding/OnboardingTenant';
import OnboardingOwner from './Onboarding/OnboardingOwner';

const Onboarding = () => {
  let [userType] = useState<string>('realEstate');

  const renderContent = (userType: string) => {
    switch (userType) {
      case 'realEstate':
        return <OnboardingRealEstate />;
      case 'owner':
        return <OnboardingOwner />;
      case 'tenant':
        return <OnboardingTenant />;
      default:
        return <OnboardingTenant />;
    }
  };

  const renderLogo = (userType: string) => {
    switch (userType) {
      case 'realEstate':
        return require('../../assets/real_estate.svg');
      case 'owner':
        return require('../../assets/owner.svg');
      case 'tenant':
        return require('../../assets/tenant.svg');
      default:
        return require('../../assets/tenant.svg');
    }
  };

  const renderMsg = (userType: string) => {
    switch (userType) {
      case 'realEstate':
        return (
          <Text style={styles.onboardingMsg}>
            Estás a un paso de poder administrar todos tus inmuebles, sólo
            necesitamos un poco más de información sobre tu negocio!
          </Text>
        );
      case 'owner':
        return (
          <Text style={styles.onboardingMsg}>
            Estas a un paso de poder publicar y administrar tus propiedades!
            Sólo necesitamos un poco más de información acerca de ti
          </Text>
        );
      case 'tenant':
        return (
          <Text style={styles.onboardingMsg}>
            Estas a un paso de encontrar tu hogar ideal! Sólo necesitamos un
            poco más de información acerca de ti
          </Text>
        );
      default:
        return (
          <Text style={styles.onboardingMsg}>
            Estas a un paso de encontrar tu hogar ideal! Sólo necesitamos un
            poco más de información acerca de ti
          </Text>
        );
    }
  };

  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
      <View style={styles.header}>
        <VectorImage
          style={styles.onboardingLogo}
          source={renderLogo(userType)}
        />
        <Text style={styles.onboardingTitle}>Bienvenido!</Text>
        <View style={styles.divider} />
        {renderMsg(userType)}
      </View>

      <View style={styles.onboardingBox}>
        {renderContent(userType)}

        <View style={styles.mainCTAContainer}>
          <TouchableOpacity style={styles.mainCTA}>
            <Text style={styles.mainCTAText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Onboarding;
