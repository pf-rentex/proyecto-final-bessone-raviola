import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export enum ClaimStatus {
  addressed = 'Atendido',
  inProgress = 'En curso',
  cancelled = 'Cancelado',
}

const ClaimDetails = ({route}: any) => {
  const {icon, title, category, date, status} = route.params
    ? route.params
    : '';

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      height: hp(100),
    },
    title: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: wp(7),
    },
    titleContainer: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: hp(15),
    },
    iconContainer: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: Dimensions.get('window').width * 0.13,
      height: Dimensions.get('window').width * 0.13,
      backgroundColor: '#263238',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(3),
    },
    infoContainer: {
      flex: 1,
      paddingLeft: wp(10),
    },
    infoText: {color: 'white', marginBottom: hp(1), fontSize: wp(4)},
    button: {
      backgroundColor: '#20323A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      width: wp(40),
      marginVertical: hp(1),
      marginHorizontal: wp(1),
      height: hp(5),
      borderRadius: 5,
      flexDirection: 'row',
    },
    actionButton: {
      backgroundColor: '#20323A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      width: wp(30),
      marginVertical: hp(1),
      marginHorizontal: wp(1),
      borderRadius: 5,
      flexDirection: 'row',
    },
    descriptionContainer: {
      // flex: 1,
      paddingLeft: wp(10),
      height: hp(30),
    },

    actionsContainer: {
      // flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      height: hp(8),
    },
    navigationContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      height: hp(8),
    },
  });
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#325A77', '#03253E']}
          style={styles.container}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
              <MCIcon name={icon} size={wp(8)} color='white' />
            </View>
            <Text style={styles.title}>{title}</Text>
            <MCIcon
              name='pencil-circle'
              style={{color: '#57A6ED', marginHorizontal: wp(3)}}
              size={wp(8)}
              color='white'
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Categoria: {category}</Text>
            <Text style={styles.infoText}>
              Estado:{' '}
              <Text style={{color: 'yellow', fontWeight: 'bold'}}>
                {status}
              </Text>
            </Text>
            <Text style={styles.infoText}>Fecha de carga: {date}</Text>
            <Text style={styles.infoText}>
              Fecha de visita programada: 13/01/2022
            </Text>
            <TouchableOpacity style={styles.button}>
              <MCIcon name='calendar-edit' size={20} color='white' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                REPROGRAMAR VISITA
              </Text>
            </TouchableOpacity>
            <Text style={styles.infoText}>
              Domicilio propiedad: Belgrano 2624
            </Text>
            <Text style={styles.infoText}>
              Técnico responsable: Claudio Hernán Bessone
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>Descripción</Text>
              <MCIcon
                name='pencil-circle'
                style={{color: '#57A6ED', marginHorizontal: wp(3)}}
                size={wp(8)}
                color='white'
              />
            </View>
            <Text style={{color: 'white', fontSize: wp(4)}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              volutpat lacinia dui, id porta tortor. Praesent eu faucibus odio,
              ut tempus dui. Suspendisse vehicula, erat eleifend finibus
              tristique, est lacus placerat ante, sed tempor erat metus a
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc ullamcorper neque sit.
            </Text>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <MCIcon name='check-circle' size={20} color='#56CD70' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                RESOLVER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MCIcon name='close-circle' size={20} color='#FF5353' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                CANCELAR
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navigationContainer}>
            <TouchableOpacity style={styles.button}>
              <MCIcon name='arrow-left-bold' size={20} color='white' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                RECLAMO ANTERIOR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MCIcon name='arrow-right-bold' size={20} color='white' />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                SIGUIENTE RECLAMO
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default ClaimDetails;
