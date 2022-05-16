import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {TextInput, View, Text, Modal, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Dropdown from '../../components/common/Dropdown';

interface IFiltersProps {
  filtersVisible: boolean;
  setFiltersVisible: Function;
}

const Filters = ({filtersVisible, setFiltersVisible}: IFiltersProps) => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    {label: 'One', value: '1'},
    {label: 'Two', value: '2'},
    {label: 'Three', value: '3'},
    {label: 'Four', value: '4'},
    {label: 'Five', value: '5'},
  ];

  return (
    <ScrollView>
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
            {!!selected && (
              <Text>
                Selected: label = {selected.label} and value = {selected.value}
              </Text>
            )}
            <Dropdown
              label='Cantidad de habitaciones'
              data={data}
              onSelect={setSelected}
            />

            <Pressable onPress={() => setFiltersVisible(!filtersVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Filters;
