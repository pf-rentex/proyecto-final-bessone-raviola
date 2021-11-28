import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RequestForm = () => {
  const [steps, setSteps] = useState<Array<string>>([
    'Detalles de la propiedad',
    'Datos personales',
    'Detalles',
  ]);
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <Text>1</Text>;
      case 1:
        return <Text>1</Text>;
      case 2:
        return <Text>1</Text>;
      default:
        return 'desconocido';
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <LinearGradient colors={['#A0D7FF', '#1A7CC3']} style={styles.container}>
      <View>
        <Text style={styles.title}>Solicitar Alquiler</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableHighlight style={styles.circle}>
          <Text style={{color: 'white', fontSize: 18}}> {activeStep + 1} </Text>
        </TouchableHighlight>
        <Text style={{color: '#0B679A', fontSize: 18}}>
          {steps[activeStep]}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableHighlight style={styles.stepButton}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Ionicons
              name='arrow-forward-circle-sharp'
              size={24}
              color='#94C7E4'
              style={{flex: 1, paddingHorizontal: 20}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                letterSpacing: 0.5,
                flex: 2,
              }}>
              Siguiente
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </LinearGradient>
  );
};

export default RequestForm;
