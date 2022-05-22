import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import VectorImage from 'react-native-vector-image';

const Listing = ({navigation}: {navigation: any}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      marginTop: hp('1.5%'),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    image: {
      width: '100%',
      height: hp('35%'),
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    title: {
      paddingVertical: 10,
      marginTop: 25,
      color: 'black',
      fontSize: 20,
      fontWeight: '700',
    },
    location: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    locationIcon: {
      marginRight: 5,
    },
    price: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
      backgroundColor: 'white',
      position: 'absolute',
      top: hp('31%'),
      padding: 10,
    },
    amenities: {
      flexDirection: 'row',
      borderTopWidth: 0.5,
      borderTopColor: 'gray',
      paddingVertical: 15,
    },
    amenity: {
      flexDirection: 'row',
      marginHorizontal: 10,
    },
    amenityLogo: {
      paddingHorizontal: 10,
    },
    actionsContainer: {
      backgroundColor: '#69C9FF',
      marginBottom: hp('1.5%'),
      // paddingVertical: 5,
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
    },
    actions: {
      paddingVertical: 15,
      alignItems: 'center',
      flexDirection: 'row',
    },
    button: {
      backgroundColor: '#50B5FF',
      justifyContent: 'center',
      padding: 10,
      marginHorizontal: 8,
      borderRadius: 5,
      flex: 1,
      flexDirection: 'row',
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.moabita.com/wp-content/uploads/2019/01/9990d49424134b32f5a0e99568b1d20d-1.jpg',
          }}
        />
        <Text style={styles.title}>Hermoso Chalet</Text>
        <View style={styles.location}>
          <Icon
            style={styles.locationIcon}
            name='location-pin'
            size={20}
            color='#FF5050'
          />
          <Text style={{color: 'gray'}}>San Francisco, Córdoba</Text>
        </View>
        <View style={styles.price}>
          <Text style={{fontWeight: 'bold', color: '#50B5FF', fontSize: 20}}>
            $651.100.000
          </Text>
        </View>
        <View style={styles.amenities}>
          <View style={styles.amenity}>
            <View style={styles.amenityLogo}>
              <VectorImage
                source={require('../../assets/amenities_dimensions.svg')}
              />
            </View>
            <Text>45m</Text>
          </View>
          <View style={styles.amenity}>
            <View style={styles.amenityLogo}>
              <VectorImage
                source={require('../../assets/amenities_bedrooms.svg')}
              />
            </View>
            <Text>2 Dormitorios</Text>
          </View>
          <View style={styles.amenity}>
            <View style={styles.amenityLogo}>
              <VectorImage
                source={require('../../assets/amenities_bathrooms.svg')}
              />
            </View>
            <Text>1 Baño</Text>
          </View>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Icon name='search' size={20} color='white' />
            <Text style={{color: 'white', fontWeight: 'bold'}}>VER MÁS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('VisitProperty')}>
            <Icon name='calendar-today' size={20} color='white' />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                paddingLeft: 5,
              }}>
              VISITAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MCIcon name='sign-real-estate' size={20} color='white' />
            <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 5}}>
              ALQUILAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Listing;
