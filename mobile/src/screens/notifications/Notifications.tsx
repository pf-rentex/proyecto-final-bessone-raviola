import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {format} from 'timeago.js';
import Notification from '../../components/notifications/Notification';

export interface INotificationItem {
  id: string;
  title: string;
  description: string;
  date: string;
}
const Notifications = () => {
  const styles = StyleSheet.create({
    container: {
      padding: hp(2),
      flex: 1,
      minHeight: hp(100),
    },
  });

  const notifications: INotificationItem[] = [
    {
      id: 'ATW1295',
      title: 'Haz recibido una solicitud de servicio',
      description:
        'A Juan Manuel Ramos le interesa el inmueble en General Paz 3124',
      date: format('2020-01-01', 'en-US'),
    },
    {
      id: 'As1R95',
      title: 'Reclamo Panama 391',
      description: 'Se ha registrado un reclamo de plomería para el inmueble.',
      date: format('2020-01-01', 'en-US'),
    },
    {
      id: 'AT6195',
      title: 'Contrato Vencido',
      description: 'El contrato de Jose Carlos Pérez está por expirar.',
      date: format('2020-01-01', 'en-US'),
    },
  ];

  return (
    <View>
      <ScrollView>
        <LinearGradient
          colors={['#89c4f1', '#178de5']}
          style={styles.container}>
          {notifications.map(({id, title, description, date}) => (
            <Notification
              key={id}
              title={title}
              description={description}
              date={date}></Notification>
          ))}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Notifications;
