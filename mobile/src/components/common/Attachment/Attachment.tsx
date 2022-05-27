import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface IAttachmentProps {
  name: string;
  size: string;
  date?: string;
  handleDelete: Function;
}

const Attachment = ({name, size, date, handleDelete}: IAttachmentProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1E4663',
      height: hp('8%'),
      borderRadius: 6,
      flex: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: hp('2%'),
    },
    deleteButton: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: wp(8),
      height: wp(8),
      backgroundColor: '#EA4D4D',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(1),
    },
    downloadButton: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: wp(8),
      height: wp(8),
      backgroundColor: '#6DE4FE',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: wp(1),
    },
  });
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#6DE4FE', marginRight: wp(5)}}>{size}</Text>
            <Text style={{color: '#6DE4FE'}}>{date}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <TouchableHighlight style={styles.downloadButton} onPress={() => {}}>
          <Icon name='download' size={20} color='white' />
        </TouchableHighlight>
        <TouchableHighlight style={styles.deleteButton} onPress={handleDelete}>
          <Icon name='close' size={20} color='white' />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Attachment;
