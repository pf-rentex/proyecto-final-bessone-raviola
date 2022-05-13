import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Attachment from '../../components/common/Attachment/Attachment';

const ContractDetails = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    title: {
      color: 'white',
      fontSize: wp(7),
      fontWeight: 'bold',
      textAlign: 'left',
    },
    formText: {
      color: 'white',
      marginBottom: wp(3),
    },
  });

  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#A0D7FF', '#1A7CC3']}
          style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Contrato 1012958</Text>
            <MCIcon
              name='download-circle'
              size={wp(10)}
              color='#294458'
              style={{textAlign: 'right'}}
            />
          </View>
          <View
            style={{
              backgroundColor: '#294458',
              borderRadius: 3,
              padding: hp(1),
              width: wp('50%'),
              alignSelf: 'center',
              marginVertical: wp(3),
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp(4),
              }}>
              Información del inquilino
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Nombre:</Text>
              Edgardo Alberto Perez
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>DNI:</Text>
              27.588.572
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Fecha de nacimiento:</Text>
              12/03/1983
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Email:</Text>
              edgardoperez@gmail.com
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Teléfono:</Text>
              356415928172
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Garantías:</Text>
            </Text>
            <Attachment
              name='Garanía 1.pdf'
              size='512kb'
              handleDelete={() => {}}
            />
            <Attachment
              name='Garanía 2.pdf'
              size='512kb'
              handleDelete={() => {}}
            />
            <Attachment
              name='Garanía 3.pdf'
              size='512kb'
              handleDelete={() => {}}
            />
          </View>
          <View
            style={{
              backgroundColor: '#294458',
              borderRadius: 3,
              padding: hp(1),
              width: wp('50%'),
              alignSelf: 'center',
              marginVertical: wp(3),
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp(4),
              }}>
              Información del contrato
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#294458',
              borderRadius: 3,
              padding: hp(1),
              width: wp('50%'),
              marginVertical: wp(3),
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp(4),
              }}>
              INFORMACION GENERAL
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Tarifa mensual:</Text>
              $14.200
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Fecha de inicio:</Text>
              01/08/2015
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Fecha de vencimiento:</Text>
              01/08/2021
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Tiempo restante:</Text>3 meses
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Expensas:</Text>
              $800
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Dirección:</Text>
              General Paz 6815
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Tipo de alquiler:</Text>
              Permanente
            </Text>
            <Text style={styles.formText}>
              <Text style={{fontWeight: 'bold'}}>Estado:</Text>
              Activo
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#294458',
              borderRadius: 3,
              padding: hp(1),
              width: wp('75%'),
              marginVertical: wp(3),
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp(4),
              }}>
              CONTRATO DE LOCACION
            </Text>
          </View>
          <Attachment
            name='locación_gral_paz.pdf'
            size='512kb'
            handleDelete={() => {}}
          />
          <Attachment
            name='locación_gral_paz.pdf'
            size='512kb'
            handleDelete={() => {}}
          />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default ContractDetails;
