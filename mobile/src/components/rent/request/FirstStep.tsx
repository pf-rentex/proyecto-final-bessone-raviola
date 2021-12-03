import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import VectorImage from 'react-native-vector-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FirstStep = () => {
  const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    description: {
      color: 'white',
      lineHeight: 25,
      fontSize: 15,
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
      marginVertical: 30,
    },
    button: {
      backgroundColor: '#263238',
      justifyContent: 'center',
      padding: 10,
      marginHorizontal: 8,
      borderRadius: 5,
      width: wp(50),
      flexDirection: 'row',
      marginVertical: 15,
    },
  });
  return (
    <View>
      <View>
        <Text style={styles.title}>Hermoso Chalet</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={styles.amenitiesContainer}>
        <View style={styles.amenity}>
          <View style={{flex: 1}}>
            <VectorImage
              style={styles.amenityLogo}
              source={require('../../../assets/amenities_dimensions.svg')}
            />
          </View>
          <Text style={{color: 'white'}}>45m</Text>
        </View>
        <View style={styles.amenity}>
          <View>
            <VectorImage
              style={styles.amenityLogo}
              source={require('../../../assets/amenities_bathrooms.svg')}
            />
          </View>
          <Text style={{color: 'white'}}>1 Baño</Text>
        </View>
        <View style={styles.amenity}>
          <View>
            <VectorImage
              style={styles.amenityLogo}
              source={require('../../../assets/amenities_bedrooms.svg')}
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>San Francisco, Córdoba</Text>
          <TouchableOpacity style={styles.button}>
            <Icon
              style={{marginRight: 5, flex: 1}}
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
      <View style={{marginVertical: 20}}>
        <Text style={styles.title}>Características:</Text>
        <Text style={{color: 'white'}}>- 3 dormitorios con placard</Text>
        <Text style={{color: 'white'}}>- 3 dormitorios con placard</Text>
        <Text style={{color: 'white'}}>- 3 dormitorios con placard</Text>
        <Text style={{color: 'white'}}>- 3 dormitorios con placard</Text>
        <Text style={{color: 'white'}}>- 3 dormitorios con placard</Text>
        <Text style={{color: 'white'}}>- 3 dormitorios con placard</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
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
          marginVertical: hp(5),
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
    </View>
  );
};

export default FirstStep;
