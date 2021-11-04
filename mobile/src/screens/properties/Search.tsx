import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {connect} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon style={styles.searchIcon} name='search' size={20} color='gray' />
        <TextInput
          placeholder='Buscar'
          placeholderTextColor='gray'
          style={styles.searchInput}
        />
      </View>
    </LinearGradient>
  );
};

const mapStateToProps = (state: any) => ({
  properties: state.properties.properties,
});

export default connect(mapStateToProps, {})(Search);
