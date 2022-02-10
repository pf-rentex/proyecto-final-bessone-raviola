import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IContractProps {
  number: string;
  address: string;
  tenant: string;
  phone: string;
  startDate: string;
  expirationDate: string;
}

const Contract = ({
  number,
  address,
  tenant,
  phone,
  startDate,
  expirationDate,
}: IContractProps) => {
  const styles = StyleSheet.create({
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
  return (
    <View style={styles.contract}>
      <View style={styles.contractHeader}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: 'bold'}}>Contrato Nro:</Text> {number}
        </Text>
      </View>
      <View style={styles.contractInfo}>
        <Text style={{padding: hp(0.5)}}>
          <Text style={{fontWeight: 'bold'}}>Domicilio:</Text>
          {address}
        </Text>
        <Text style={{padding: hp(0.5)}}>
          <Text style={{fontWeight: 'bold'}}>Inquilino:</Text>
          {tenant}
        </Text>
        <Text style={{padding: hp(0.5)}}>
          <Text style={{fontWeight: 'bold'}}>Tel:</Text>
          {phone}
        </Text>
        <View style={{marginTop: hp(1)}}>
          <Text style={{color: 'green', alignSelf: 'flex-end'}}>
            Pagos al día
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{padding: hp(0.5), fontSize: hp(1.3)}}>
            <Text style={{fontWeight: 'bold'}}>Inicio:</Text> {startDate}
          </Text>
          <Text
            style={{
              padding: hp(0.5),
              fontSize: hp(1.3),
            }}>
            <Text style={{fontWeight: 'bold'}}>Próximo vencimiento:</Text>
            {expirationDate}
          </Text>
        </View>
      </View>
      <View style={styles.contractActions}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: hp(0.5),
          }}>
          <MCIcon name='magnify' size={wp(4)} />
          <Text
            style={{
              paddingHorizontal: hp(1),
              fontSize: wp(3),
            }}>
            Ver detalle
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: hp(0.5),
            paddingHorizontal: wp(6),
            marginHorizontal: hp(1),
            borderLeftWidth: wp(0.2),
            borderRightWidth: wp(0.2),
            borderColor: '#6C88A3',
          }}>
          <MCIcon name='face-profile' size={wp(4)} />
          <Text
            style={{
              paddingHorizontal: hp(1),
              fontSize: wp(3),
            }}>
            Ficha Inquilino
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: hp(0.5),
          }}>
          <Icon name='dollar' size={wp(4)} />
          <Text style={{paddingHorizontal: hp(1), fontSize: wp(3)}}>
            Ver pagos
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Contract;
