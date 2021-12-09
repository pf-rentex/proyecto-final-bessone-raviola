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
}

const Attachment = ({name, size}: IAttachmentProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1E4663',
      height: hp('10%'),
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
    circle: {
      borderRadius:
        Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ) / 2,
      width: Dimensions.get('window').width * 0.1,
      height: Dimensions.get('window').width * 0.1,
      backgroundColor: '#EA4D4D',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{name}</Text>
          <Text style={{color: '#6DE4FE'}}>{size}</Text>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <TouchableHighlight style={styles.circle}>
          <Icon name='close' size={20} color='white' />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Attachment;
