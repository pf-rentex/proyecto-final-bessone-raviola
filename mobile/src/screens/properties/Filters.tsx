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
            <View
              style={{
                flexDirection: 'column',
                paddingVertical: hp(2),
                alignItems: 'center',
              }}>
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
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{
                      backgroundColor: '#efefef',
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      paddingHorizontal: 20,
                      textAlign: 'center',
                      height: hp(5),
                      width: wp(25),
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
                      textAlign: 'center',
                      height: hp(5),
                      width: wp(25),
                    }}>
                    <FAIcon name='dollar' color={'gray'} size={15}></FAIcon>
                    20000
                  </TextInput>
                </View>
              </View>

              <View style={{marginBottom: 25}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Tipo de alquiler
                </Text>
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
                    style={{
                      backgroundColor:
                        rentType === RentTypes.Temporary
                          ? '#8CD3FC'
                          : '#efefef',
                      width: wp(30),
                      alignItems: 'center',
                      borderRadius: 5,
                      padding: hp(1.5),
                    }}>
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
                    style={{
                      backgroundColor:
                        rentType === RentTypes.Permanent
                          ? '#8CD3FC'
                          : '#efefef',
                      width: wp(30),
                      alignItems: 'center',
                      borderRadius: 5,
                      padding: hp(1.5),
                      marginLeft: wp(3),
                    }}>
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
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Alquiler temporal
                </Text>

                <Text style={{color: 'white', fontWeight: 'bold'}}>Fechas</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{
                      backgroundColor: '#efefef',
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      paddingHorizontal: 20,
                      textAlign: 'center',
                      height: hp(5),
                      width: wp(30),
                    }}>
                    Check In
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
                      textAlign: 'center',
                      height: hp(5),
                      width: wp(30),
                    }}>
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
                  onPress={() => {}}
                  style={{
                    backgroundColor: '#8CD3FC',
                    width: wp(50),
                    alignItems: 'center',
                    borderRadius: 5,
                    padding: hp(1.5),
                    marginBottom: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name='checkcircle' color='#263238' size={15}></Icon>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        paddingHorizontal: 5,
                      }}>
                      Cancelación gratuita
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => {}}
                  style={{
                    backgroundColor: '#efefef',
                    width: wp(50),
                    alignItems: 'center',
                    borderRadius: 5,
                    padding: hp(1.5),
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {/* <Icon name='checkcircle' color='#263238' size={15}></Icon> */}
                    <Text
                      style={{
                        color: 'gray',
                        // fontWeight: 'bold',
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
