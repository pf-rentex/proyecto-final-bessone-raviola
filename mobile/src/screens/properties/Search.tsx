import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {connect} from 'react-redux';
import {TextInput, View, Text, Modal, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getProperties} from '../../actions/properties';
import Loader from '../../components/common/Loader';
import Listing from '../../components/properties/Listing';
import {ScrollView} from 'react-native-gesture-handler';
import {IProperty} from '../../reducers/properties';

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
            color='#263238'
            style={{flex: 1}}
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
            <Loader size={80} />
          </View>
        ) : (
          <View>
            {properties.map((property, index) => {
              return <Listing key={index} />;
            })}
          </View>
        )}

        <Modal
          animationType='slide'
          transparent={true}
          visible={filtersVisible}
          onRequestClose={() => {
            setFiltersVisible(!filtersVisible);
          }}>
          <View>
            <LinearGradient
              colors={['#52809A', '#17262D']}
              style={styles.modalView}>
              <View
                style={{
                  backgroundColor: '#263238',
                  padding: 10,
                  width: '100%',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Filtros de búsqueda
                </Text>
              </View>
              <Text>Hello World!</Text>
              <Pressable onPress={() => setFiltersVisible(!filtersVisible)}>
                <Text>Hide Modal</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </Modal>
      </LinearGradient>
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => ({
  properties: state.properties.properties,
  isLoading: state.properties.isLoading,
});

export default connect(mapStateToProps, {getProperties})(Search);
