import React, {useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FirstStep from '../../components/rent/request/FirstStep';
import SecondStep from '../../components/rent/request/SecondStep';
import ThirdStep from '../../components/rent/request/ThirdStep';

const RequestForm = ({route}: any) => {
  useEffect(() => {
    if (route.params) {
      if (
        route.params.guarantorFiles &&
        route.params.guarantorFiles.length > 0
      ) {
        setGuarantorFiles(route.params.guarantorFiles);
      }
      if (route.params.dniFiles && route.params.dniFiles.length > 0) {
        setDniFiles(route.params.dniFiles);
      }
      if (route.params.receiptFiles && route.params.receiptFiles.length > 0) {
        setReceiptFiles(route.params.receiptFiles);
      }
    }
  }, [route]);

  const [steps, setSteps] = useState<Array<string>>([
    'Detalles de la propiedad',
    'Datos personales',
    'Detalles',
  ]);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [guarantorFiles, setGuarantorFiles] = useState<Array<any>>([]);
  const [dniFiles, setDniFiles] = useState<Array<any>>([]);
  const [receiptFiles, setReceiptFiles] = useState<Array<any>>([]);

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <FirstStep />;
      case 1:
        return (
          <SecondStep
            guarantorFiles={guarantorFiles}
            dniFiles={dniFiles}
            receiptFiles={receiptFiles}
          />
        );
      case 2:
        return <ThirdStep />;
      default:
        return 'desconocido';
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#A0D7FF', '#1A7CC3']}
          style={styles.container}>
          <View>
            <Text style={styles.title}>Solicitar Alquiler</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight style={styles.circle}>
              <Text style={{color: 'white', fontSize: 18}}>
                {' '}
                {activeStep + 1}{' '}
              </Text>
            </TouchableHighlight>
            <Text style={{color: '#0B679A', fontSize: 18}}>
              {steps[activeStep]}
            </Text>
          </View>
          <View style={{marginVertical: 20}}>{getStepContent(activeStep)}</View>
        </LinearGradient>
      </ScrollView>
      <View style={styles.actions}>
        <TouchableHighlight style={styles.stepButton} onPress={handleBack}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                letterSpacing: 0.5,
                flex: 5,
              }}>
              Anterior
            </Text>
            <Ionicons
              name='arrow-back-circle-sharp'
              size={24}
              color='#EA4D4D'
              style={{flex: 1}}
            />
          </View>
        </TouchableHighlight>
        {activeStep !== 2 ? (
          <TouchableHighlight style={styles.stepButton} onPress={handleNext}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Ionicons
                name='arrow-forward-circle-sharp'
                size={24}
                color='#94C7E4'
                style={{flex: 1}}
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
        ) : (
          <TouchableHighlight style={styles.sendButton}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Ionicons
                name='send'
                size={24}
                color='#21526D'
                style={{flex: 1}}
              />
              <Text
                style={{
                  color: '#18405C',
                  fontSize: 18,
                  letterSpacing: 0.5,
                  flex: 2,
                }}>
                Enviar
              </Text>
            </View>
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
};

export default RequestForm;
