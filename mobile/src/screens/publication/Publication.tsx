import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import VectorImage from 'react-native-vector-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import BetweenLinesText from '../../components/common/BetweenLinesText';
import styless from './styles';

const Publication = ({navigation}: {navigation: any}) => {
  const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    description: {
      color: 'white',
      lineHeight: 25,
      fontSize: 15,
      marginTop: 10,
    },
    amenitiesContainer: {
      flexDirection: 'row',
      marginVertical: 20,
    },
    amenity: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    amenityLogo: {
      height: 40,
      width: 40,
      marginBottom: 5,
    },
    image: {
      width: '100%',
      height: hp('35%'),
      borderRadius: 5,
      marginVertical: 15,
    },
    button: {
      backgroundColor: '#263238',
      justifyContent: 'center',
      padding: 9,
      marginHorizontal: 12,
      borderRadius: 5,
      width: wp(45),
      flexDirection: 'row',
      marginVertical: 15,
      marginRight: 4,
    },
    input: {
      margin: 15,
      backgroundColor: '#263238',
      width: 210,
      height: 30,
      borderRadius: 10,
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    },
  });
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#A0D7FF', '#1A7CC3']}
          style={styless.container}>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.input}>Alquiler Permanente</Text>
          </View>
          <View>
            <Text style={styles.title}>
              Hermoso Chalet en barrio Los Palmares
            </Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={styles.amenitiesContainer}>
            <View style={styles.amenity}>
              <View style={{flex: 1}}>
                <VectorImage
                  style={styles.amenityLogo}
                  source={require('../../assets/amenities_dimensions.svg')}
                />
              </View>
              <Text style={{color: 'white'}}>45m</Text>
            </View>
            <View style={styles.amenity}>
              <View>
                <VectorImage
                  style={styles.amenityLogo}
                  source={require('../../assets/amenities_bathrooms.svg')}
                />
              </View>
              <Text style={{color: 'white'}}>1 Baño</Text>
            </View>
            <View style={styles.amenity}>
              <View>
                <VectorImage
                  style={styles.amenityLogo}
                  source={require('../../assets/amenities_bedrooms.svg')}
                />
              </View>
              <Text style={{color: 'white'}}>2 Dormitorios</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Galería de Fotos</Text>
            <Image
              style={styles.image}
              source={{
                uri: 'https://www.moabita.com/wp-content/uploads/2019/01/9990d49424134b32f5a0e99568b1d20d-1.jpg',
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Ubicación</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={{color: 'white'}}>San Francisco, Córdoba</Text>
              <TouchableOpacity style={styles.button}>
                <Icon
                  style={{marginRight: 3, flex: 1}}
                  name='location-pin'
                  size={20}
                  color='#FF5050'
                />
                <Text style={{color: 'white', fontWeight: 'bold', flex: 3}}>
                  Ver en el mapa
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 6}}>
            <Text style={styles.title}>Características:</Text>
            <Text style={{color: 'white', marginTop: 6}}>
              - 3 dormitorios con placard
            </Text>
            <Text style={{color: 'white'}}>- Cocina amplia</Text>
            <Text style={{color: 'white'}}>- Patio gigante con asador</Text>
            <Text style={{color: 'white'}}>- Living Comedor</Text>
            <Text style={{color: 'white'}}>- Calefacción centralizada</Text>
            <Text style={{color: 'white'}}>- Garage amplio para 2 autos</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <Text style={styles.title}>Detalle:</Text>
            <Text style={styles.title}> 23.450</Text>
            <Text style={{color: 'white', marginHorizontal: wp(5)}}>+</Text>
            <Text style={styles.title}>$3.000</Text>
            <Text style={{color: 'white', marginLeft: wp(5)}}>Expensas</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: hp(2),
              alignItems: 'center',
            }}>
            <Text style={styles.title}>Monto total:</Text>
            <Text
              style={
                (styles.title,
                {
                  color: '#7DF853',
                  marginHorizontal: wp(5),
                  fontSize: 25,
                  fontWeight: 'bold',
                })
              }>
              $26.450
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 6,
              justifyContent: 'center',
            }}>
            <Text style={styles.title}>Fecha de publicación:</Text>
            <Text
              style={
                (styles.title,
                {
                  color: 'white',
                  marginHorizontal: wp(3),
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 4,
                })
              }>
              12-03-2020
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('VisitProperty')}>
              <Icon
                style={{marginRight: 3, flex: 1}}
                name='calendar-today'
                size={20}
                color='#7ED1FF'
              />
              <Text style={{color: 'white', fontWeight: 'bold', flex: 3}}>
                Visitar Propiedad
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MCIcon
                style={{marginRight: 3, flex: 1}}
                name='sign-real-estate'
                size={20}
                color='#7ED1FF'
              />
              <Text style={{color: 'white', fontWeight: 'bold', flex: 3}}>
                Solicitar Alquiler
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Publication;
