import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {connect} from 'react-redux';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getProperties} from '../../actions/properties';
import Loader from '../../components/common/Loader';
import Listing from '../../components/properties/Listing';
import {ScrollView} from 'react-native-gesture-handler';
import {IProperty} from '../../reducers/properties';
import Filters from './Filters';

interface ISearchProps {
  getProperties: Function;
  properties: Array<IProperty>;
  isLoading: boolean;
}

const Search = ({getProperties, properties, isLoading}: ISearchProps) => {
  useEffect(() => {
    getProperties();
  }, []);

  const [filtersVisible, setFiltersVisible] = useState(false);

  return (
    <ScrollView>
      <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name='filter'
            size={20}
            style={{flex: 1}}
            color='#263238'
            onPress={() => setFiltersVisible(!filtersVisible)}
          />

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
        {isLoading ? (
          <View style={styles.loader}>
            <Loader size={80} color='#20323A' />
          </View>
        ) : (
          <View>
            {properties.map((property, index) => {
              return <Listing key={index} />;
            })}
          </View>
        )}

        <Filters
          filtersVisible={filtersVisible}
          setFiltersVisible={setFiltersVisible}
        />
      </LinearGradient>
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => ({
  properties: state.properties.properties,
  isLoading: state.properties.isLoading,
});

export default connect(mapStateToProps, {getProperties})(Search);
