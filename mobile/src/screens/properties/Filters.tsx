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

enum RentTypes {
  Temporary = 'Temporal',
  Permanent = 'Permanente',
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

  const [rentType, setRentType] = useState(RentTypes.Temporary);
  const [freeCancellation, setFreeCancellation] = useState(true);
  const [allowPets, setAllowPets] = useState(false);

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
            <View style={styles.filtersHeader}>
              <Text style={styles.filtersTitle}>Filtros de búsqueda</Text>
            </View>
            <View style={styles.filtersContent}>
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
                <Text style={styles.filtersTitle}>Rango de precios (ARS)</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                  }}>
                  <TextInput
                    style={[
                      styles.textInput,
                      {borderTopLeftRadius: 5, borderBottomLeftRadius: 5},
                    ]}>
                    <FAIcon name='dollar' color={'gray'} size={15}></FAIcon>
                    10000
                  </TextInput>
                  <View style={styles.verticalSeparator}></View>
                  <TextInput
                    style={[
                      styles.textInput,
                      {borderTopRightRadius: 5, borderBottomRightRadius: 5},
                    ]}>
                    <FAIcon name='dollar' color={'gray'} size={15}></FAIcon>
                    20000
                  </TextInput>
                </View>
              </View>

              <View style={{marginBottom: 25}}>
                <Text style={styles.filtersTitle}>Tipo de alquiler</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    justifyContent: 'center',
                  }}>
                  <Pressable
                    onPress={() => {
                      setRentType(RentTypes.Temporary);
                    }}
                    style={[
                      styles.button,
                      {
                        backgroundColor:
                          rentType === RentTypes.Temporary
                            ? '#8CD3FC'
                            : '#efefef',
                      },
                    ]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {rentType === RentTypes.Temporary && (
                        <Icon
                          name='checkcircle'
                          color='#263238'
                          size={15}></Icon>
                      )}
                      <Text
                        style={{
                          color:
                            rentType === RentTypes.Temporary ? 'white' : 'gray',
                          fontWeight:
                            rentType === RentTypes.Temporary
                              ? 'bold'
                              : 'normal',
                          paddingHorizontal: 5,
                        }}>
                        Temporal
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      setRentType(RentTypes.Permanent);
                    }}
                    style={[
                      styles.button,
                      {
                        backgroundColor:
                          rentType === RentTypes.Permanent
                            ? '#8CD3FC'
                            : '#efefef',
                      },
                    ]}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {rentType === RentTypes.Permanent && (
                        <Icon
                          name='checkcircle'
                          color='#263238'
                          size={15}></Icon>
                      )}
                      <Text
                        style={{
                          color:
                            rentType === RentTypes.Permanent ? 'white' : 'gray',
                          fontWeight:
                            rentType === RentTypes.Permanent
                              ? 'bold'
                              : 'normal',
                          paddingHorizontal: 5,
                        }}>
                        Permanente
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View
                style={{
                  marginBottom: 25,
                }}>
                <Text
                  style={[
                    styles.filtersTitle,
                    {
                      alignSelf: 'center',
                    },
                  ]}>
                  Alquiler temporal
                </Text>

                <Text style={styles.filtersTitle}>Fechas</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        width: wp(30),
                      },
                    ]}>
                    Check In
                  </TextInput>
                  <View style={styles.verticalSeparator}></View>
                  <TextInput
                    style={[
                      styles.textInput,
                      {
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        width: wp(30),
                      },
                    ]}>
                    Check Out
                  </TextInput>
                </View>
              </View>
              <View
                style={{
                  marginBottom: 25,
                }}>
                <Dropdown
                  label='Cantidad de personas'
                  data={data}
                  onSelect={setSelected}
                />
              </View>
              <View
                style={{
                  marginBottom: 25,
                }}>
                <Pressable
                  onPress={() => {
                    setFreeCancellation(!freeCancellation);
                  }}
                  style={[
                    styles.button,
                    {
                      backgroundColor: freeCancellation ? '#8CD3FC' : '#efefef',
                      width: wp(50),
                      marginBottom: 10,
                    },
                  ]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {freeCancellation && (
                      <Icon name='checkcircle' color='#263238' size={15}></Icon>
                    )}
                    <Text
                      style={{
                        color: freeCancellation ? 'white' : 'gray',
                        fontWeight: freeCancellation ? 'bold' : 'normal',
                        paddingHorizontal: 5,
                      }}>
                      Cancelación gratuita
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setAllowPets(!allowPets);
                  }}
                  style={[
                    styles.button,
                    {
                      backgroundColor: allowPets ? '#8CD3FC' : '#efefef',
                      width: wp(50),
                    },
                  ]}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {allowPets && (
                      <Icon name='checkcircle' color='#263238' size={15}></Icon>
                    )}
                    <Text
                      style={{
                        color: allowPets ? 'white' : 'gray',
                        fontWeight: allowPets ? 'bold' : 'normal',
                        paddingHorizontal: 5,
                      }}>
                      Permite mascotas
                    </Text>
                  </View>
                </Pressable>
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
