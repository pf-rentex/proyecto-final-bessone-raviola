import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Contract from '../../components/rent/Contract';

const Contracts = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    title: {
      color: 'white',
      fontSize: wp(7),
      fontWeight: 'bold',
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchInput: {
      flex: 1,
      backgroundColor: '#263238',
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('2%'),
      color: 'white',
      fontSize: hp('2.3%'),
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6,
      marginTop: hp('2%'),
    },
    searchIcon: {
      paddingVertical: hp('1.8%'),
      paddingHorizontal: wp('3.5%'),
      color: 'white',
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      fontSize: hp('2.3%'),
      backgroundColor: '#263238',
      marginTop: hp('2%'),
    },
    contract: {
      marginVertical: hp(1),
    },
    contractHeader: {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      padding: hp(1),
      backgroundColor: '#383838',
    },
    contractInfo: {
      padding: hp(1),
      backgroundColor: '#BCDBF9',
    },
    contractActions: {
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
      padding: hp(1),
      backgroundColor: '#8BB1CD',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  let contracts = [
    {
      number: '3355189541',
      address: 'Entre Ríos (N) 618',
      tenant: 'Claudio Hernán Bessone',
      phone: '3564-561587',
      startDate: '16/01/2022',
      expirationDate: '16/01/2022',
    },
    {
      number: '3355189541',
      address: 'Entre Ríos (N) 618',
      tenant: 'Claudio Hernán Bessone',
      phone: '3564-561587',
      startDate: '16/01/2022',
      expirationDate: '16/01/2022',
    },
    {
      number: '3355189541',
      address: 'Entre Ríos (N) 618',
      tenant: 'Claudio Hernán Bessone',
      phone: '3564-561587',
      startDate: '16/01/2022',
      expirationDate: '16/01/2022',
    },
    {
      number: '3355189541',
      address: 'Entre Ríos (N) 618',
      tenant: 'Claudio Hernán Bessone',
      phone: '3564-561587',
      startDate: '16/01/2022',
      expirationDate: '16/01/2022',
    },
  ];
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#A0D7FF', '#1A7CC3']}
          style={styles.container}>
          <View>
            <Text style={styles.title}>Mis Contratos</Text>
            <View style={styles.searchInputContainer}>
              <Icon
                style={styles.searchIcon}
                name='search'
                size={20}
                color='gray'
              />
              <TextInput
                placeholder='Buscar'
                placeholderTextColor='gray'
                style={styles.searchInput}
              />
            </View>
          </View>
          {contracts.map((contract, index) => {
            return (
              <Contract
                key={index}
                number={contract.number}
                address={contract.address}
                tenant={contract.tenant}
                phone={contract.phone}
                startDate={contract.startDate}
                expirationDate={contract.expirationDate}
              />
            );
          })}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Contracts;
