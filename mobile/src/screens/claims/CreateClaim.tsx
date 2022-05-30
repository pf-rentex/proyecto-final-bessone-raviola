import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CreateClaim = () => {
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
    input: {
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: '#5CC0F1',
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('2%'),
      color: 'white',
      fontSize: hp('2.3%'),
      margin: hp('1%'),
      borderRadius: 6,
    },
    dateInput: {
      backgroundColor: 'white',
      paddingVertical: hp('1.3%'),
      paddingHorizontal: wp('2%'),
      width: wp('60%'),
      color: 'black',
      fontSize: hp('2.3%'),
      marginVertical: hp('1%'),
      borderBottomRightRadius: 6,
      borderTopRightRadius: 6,
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
      marginVertical: wp(1),
    },
    backIconContainer: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: Dimensions.get('window').width * 0.1,
      height: Dimensions.get('window').width * 0.1,
      backgroundColor: '#263238',
      justifyContent: 'center',
      alignItems: 'center',
      //   marginHorizontal: wp(3),
      marginVertical: wp(3),
    },
    dateInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    calendarIcon: {
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('2%'),
      borderTopLeftRadius: 6,
      color: 'black',
      borderBottomLeftRadius: 6,
      backgroundColor: 'white',
    },
    descriptionInput: {
      backgroundColor: '#f5f5f5',
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('2%'),
      color: 'black',
      width: wp('80%'),
      fontSize: hp('2.3%'),
      margin: hp('1%'),
      borderRadius: 6,
    },
    actionsContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      height: hp(8),
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
  });

  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#325A77', '#03253E']}
          style={styles.container}>
          <View style={styles.backIconContainer}>
            <MCIcon
              name='arrow-left'
              size={wp(5)}
              color='white'
              onPress={() => navigation.navigate('Claims')}
            />
          </View>
          <View style={{marginBottom: hp(3)}}>
            <Text style={styles.title}>Título</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={styles.title}>Categoría</Text>
            <View style={{flexDirection: 'row', paddingVertical: hp(3)}}>
              <View style={{alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <MCIcon name='lightning-bolt' size={wp(8)} color='white' />
                </View>
                <Text style={{color: 'white'}}>Electricidad</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <MCIcon name='water' size={wp(8)} color='white' />
                </View>
                <Text style={{color: 'white'}}>Plomeria</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.iconContainer}>
                  <MCIcon name='tools' size={wp(8)} color='white' />
                </View>
                <Text style={{color: 'white'}}>Infraestructura</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Fecha de programación de visita</Text>
            <View style={styles.dateInputContainer}>
              <MCIcon
                style={styles.calendarIcon}
                name='calendar-month'
                size={25}
              />
              <TextInput style={styles.dateInput} />
            </View>
          </View>
          <View>
            <Text style={styles.title}>Descripción</Text>
            <View style={styles.dateInputContainer}>
              <TextInput
                style={styles.descriptionInput}
                multiline
                numberOfLines={8}
              />
            </View>
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
                CONFIRMAR
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
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default CreateClaim;
