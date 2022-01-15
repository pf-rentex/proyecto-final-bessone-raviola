import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ComplaintStatus} from '../../screens/complaints/Complaints';
import {useNavigation} from '@react-navigation/native';

interface IComplaintProps {
  icon: string;
  title: string;
  category: string;
  date: string;
  status: string;
}

const Complaint = ({icon, title, category, date, status}: IComplaintProps) => {
  const styles = StyleSheet.create({
    listing: {
      backgroundColor: '#2685D0',
      height: hp(20),
      borderRadius: 10,
      flexDirection: 'row',
      marginVertical: hp(1),
    },
    claimIcon: {
      backgroundColor: '#20323A',
      flex: 1,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    claimInfo: {
      flex: 2,
      padding: 10,
    },
    claimTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: wp(5),
    },
    claimActions: {
      flexDirection: 'row',
      marginVertical: hp(0.8),
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

  const navigation = useNavigation();
  const [statusColor, setStatusColor] = useState('green');
  useEffect(() => {
    switch (status) {
      case ComplaintStatus.addressed:
        setStatusColor('lightgreen');
        break;
      case ComplaintStatus.inProgress:
        setStatusColor('yellow');
        break;
      case ComplaintStatus.cancelled:
        setStatusColor('red');
        break;
    }
  }, [status]);

  return (
    <View style={styles.listing}>
      <View style={styles.claimIcon}>
        <MCIcon name={icon} size={wp(20)} color='white' />
      </View>
      <View style={styles.claimInfo}>
        <Text style={styles.claimTitle}>{title}</Text>
        <Text style={{color: 'white', marginVertical: hp(0.8)}}>
          Categoría: {category}
        </Text>
        <Text style={{color: 'white', marginVertical: hp(0.8)}}>
          Fecha de carga: {date}
        </Text>
        <Text style={{color: 'white', marginVertical: hp(0.8)}}>
          Estado:{' '}
          <Text style={{color: statusColor, fontWeight: 'bold'}}>
            {status.toUpperCase()}
          </Text>
        </Text>
        <View style={styles.claimActions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('ComplaintDetails', {
                icon,
                title,
                category,
                date,
                status,
              });
            }}>
            <MCIcon name='magnify' size={20} color='white' />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                paddingLeft: 5,
              }}>
              DETALLES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MCIcon name='delete' size={20} color='white' />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                paddingLeft: 5,
              }}>
              ELIMINAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Complaint;
