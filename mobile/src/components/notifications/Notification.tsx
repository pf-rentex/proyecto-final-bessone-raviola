import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {INotificationItem} from '../../screens/notifications/Notifications';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Notification = (props: INotificationItem) => {
  const {title, description, date} = props;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2d5578',
      borderRadius: wp(2),
      paddingHorizontal: wp(3),
      marginVertical: hp(0.5),
    },
    dataContainer: {
      flex: 1,
      padding: wp(2),
    },
    time: {
      fontSize: hp(1.3),
      fontWeight: 'bold',
      color: '#e8e8e8',
      marginVertical: hp(1),
    },
    title: {
      fontSize: hp(1.8),
      paddingBottom: hp(0.8),
      fontWeight: 'bold',
      color: '#e4f4ff',
    },
    description: {
      fontSize: hp(1.6),
      color: '#93eff8',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.time}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
      <View>
        <Icon name='delete-sweep' size={24} color={'#e5e5e5'} />
      </View>
    </View>
  );
};
export default Notification;
