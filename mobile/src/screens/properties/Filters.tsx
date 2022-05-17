import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {TextInput, View, Text, Modal, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Dropdown from '../../components/common/Dropdown';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';

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
            <View style={{flexDirection: 'column', paddingVertical: hp(2)}}>
              {/* {!!selected && (
                <Text>
                  Selected: label = {selected.label} and value ={' '}
                  {selected.value}
                </Text>
              )} */}
              <Dropdown
                label='Cantidad de habitaciones'
                data={data}
                onSelect={setSelected}
              />

              <View style={{marginVertical: 25}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Rango de precios (ARS)
                </Text>
                <View style={{flexDirection: 'row', paddingVertical: 10}}>
                  <TextInput
                    style={{
                      backgroundColor: '#efefef',
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      paddingHorizontal: 20,
                      height: hp(5),
                    }}>
                    <FAIcon name='dollar' color={'gray'} size={15}></FAIcon>
                    10000
                  </TextInput>
                  <View
                    style={{
                      height: '100%',
                      width: 1,
                      backgroundColor: '#909090',
                    }}></View>
                  <TextInput
                    style={{
                      backgroundColor: '#efefef',
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      paddingHorizontal: 20,
                      height: hp(5),
                    }}>
                    <FAIcon name='dollar' color={'gray'} size={15}></FAIcon>
                    20000
                  </TextInput>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => setFiltersVisible(!filtersVisible)}
                style={{
                  backgroundColor: '#8CD3FC',
                  width: '50%',
                  alignItems: 'center',
                  borderBottomStartRadius: 20,
                  padding: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name='checkcircle' color='#263238' size={20}></Icon>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      paddingHorizontal: 5,
                    }}>
                    APLICAR
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => setFiltersVisible(!filtersVisible)}
                style={{
                  backgroundColor: '#264C6F',
                  width: '50%',
                  alignItems: 'center',
                  borderBottomEndRadius: 20,
                  padding: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name='closecircle' color='#FF5050' size={20}></Icon>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      paddingHorizontal: 5,
                    }}>
                    CANCELAR
                  </Text>
                </View>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Filters;
