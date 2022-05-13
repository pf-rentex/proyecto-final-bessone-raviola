import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Attachment from '../../components/common/Attachment/Attachment';
import {Button} from 'react-native';

const ContractDetails = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    title: {
      color: 'white',
      fontSize: wp(6),
      fontWeight: 'bold',
      textAlign: 'left',
    },
    formText: {
      color: 'white',
      marginBottom: wp(3),
    },
    downloadButton: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: wp(10),
      height: wp(10),
      backgroundColor: '#294458',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(1),
    },
    button: {
      backgroundColor: '#20323A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      marginHorizontal: 5,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'row',
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
            <TouchableHighlight
              style={styles.downloadButton}
              onPress={() => {}}>
              <Icon name='download' size={20} color='#5CB9FF' />
            </TouchableHighlight>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: wp(3),
            }}>
            <View
              style={{
                flex: 1,
                borderBottomColor: '#294458',
                borderBottomWidth: 1,
                marginHorizontal: wp(2),
              }}
            />
            <View
              style={{
                flex: 3,
                backgroundColor: '#294458',
                borderRadius: 3,
                padding: hp(1),
                width: wp('50%'),
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
                borderBottomColor: '#294458',
                borderBottomWidth: 1,
                marginHorizontal: wp(2),
              }}
            />
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
              date={new Date().toLocaleDateString()}
              handleDelete={() => {}}
            />
            <Attachment
              name='Garanía 2.pdf'
              size='512kb'
              date={new Date().toLocaleDateString()}
              handleDelete={() => {}}
            />
            <Attachment
              name='Garanía 3.pdf'
              size='512kb'
              date={new Date().toLocaleDateString()}
              handleDelete={() => {}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: wp(3),
            }}>
            <View
              style={{
                flex: 1,
                borderBottomColor: '#294458',
                borderBottomWidth: 1,
                marginHorizontal: wp(2),
              }}
            />
            <View
              style={{
                flex: 3,
                backgroundColor: '#294458',
                borderRadius: 3,
                padding: hp(1),
                width: wp('50%'),
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
                flex: 1,
                borderBottomColor: '#294458',
                borderBottomWidth: 1,
                marginHorizontal: wp(2),
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#294458',
              borderRadius: 3,
              padding: hp(1),
              width: wp(40),
              marginVertical: wp(3),
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp(3),
              }}>
              INFORMACIÓN GENERAL
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
              width: wp('40%'),
              marginVertical: wp(3),
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: wp(3),
              }}>
              CONTRATO DE LOCACIÓN
            </Text>
          </View>
          <View style={{marginBottom: hp(2)}}>
            <Attachment
              name='locación_gral_paz.pdf'
              size='512kb'
              date={new Date().toLocaleDateString()}
              handleDelete={() => {}}
            />
            <Attachment
              name='locación_gral_paz.pdf'
              size='512kb'
              date={new Date().toLocaleDateString()}
              handleDelete={() => {}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button}>
              <EntypoIcon name='cycle' size={20} color='#5CB9FF' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                RENOVAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <EntypoIcon name='circle-with-cross' size={20} color='#EA4D4D' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                RESCINDIR
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default ContractDetails;
