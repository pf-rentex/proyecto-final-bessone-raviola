import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Complaint from '../../components/complaints/Complaint';
import {useNavigation} from '@react-navigation/native';

export enum ComplaintStatus {
  addressed = 'Atendido',
  inProgress = 'En curso',
  cancelled = 'Cancelado',
}

const Complaints = () => {
  let complaints = [
    {
      icon: 'lightning-bolt',
      title: 'Falla toma de corriente',
      category: 'Electricidad',
      date: '01/06/2022',
      status: ComplaintStatus.inProgress,
    },
    {
      icon: 'water',
      title: 'Gotera canilla baño',
      category: 'Plomería',
      date: '01/06/2022',
      status: ComplaintStatus.addressed,
    },
    {
      icon: 'tools',
      title: 'Pared agrietada',
      category: 'Infraestructura',
      date: '01/06/2022',
      status: ComplaintStatus.cancelled,
    },
  ];
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      // height: hp(100),
    },
    title: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: wp(7),
    },
  });
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#325A77', '#03253E']}
          style={styles.container}>
          <View>
            <Text style={styles.title}>Reclamos</Text>
          </View>
          {complaints.map((complaint, index) => {
            return (
              <Complaint
                key={index}
                icon={complaint.icon}
                title={complaint.title}
                category={complaint.category}
                date={complaint.date}
                status={complaint.status}
              />
            );
          })}
          <View style={{alignItems: 'flex-end', marginVertical: hp(6)}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateComplaint')}
              style={{
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                bottom: 10,
                right: 10,
                height: 70,
                backgroundColor: '#2685D0',
                borderRadius: 100,
              }}>
              <MCIcon name='plus' size={30} color='white' />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Complaints;
