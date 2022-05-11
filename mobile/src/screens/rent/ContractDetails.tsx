import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default ContractDetails;
