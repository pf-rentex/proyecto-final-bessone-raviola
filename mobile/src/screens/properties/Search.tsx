import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {connect} from 'react-redux';
import {TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getProperties} from '../../actions/properties';

interface ISearchProps {
  getProperties: Function;
  properties: Array<IProperty>;
  isLoading: boolean;
}

const Search = ({getProperties, properties, isLoading}: ISearchProps) => {
  useEffect(() => {
    getProperties();
  }, []);
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
      {isLoading ? (
        <View>
          <Text>loading...</Text>
        </View>
      ) : (
        <View>
          {properties.map((property, index) => {
            return <Text key={index}>{property.city}</Text>;
          })}
        </View>
      )}
    </LinearGradient>
  );
};

const mapStateToProps = (state: any) => ({
  properties: state.properties.properties,
  isLoading: state.properties.isLoading,
});

export default connect(mapStateToProps, {getProperties})(Search);
