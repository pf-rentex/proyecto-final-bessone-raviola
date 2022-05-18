import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';
import StickyButton from '../../components/buttons/StickyButton';

const VisitProperty = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [schedules] = useState([
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '04:30 PM',
    '05:00 PM',
  ]);
  const [selectedSchedule, setSelectedSchedule] = useState(schedules[0]);
  const [parsedLocalDate, setParsedLocalDate] = useState(
    date.toLocaleDateString(),
  );

  const selectSchedule = (schedule: string) => {
    setSelectedSchedule(schedule);
  };

  useEffect(() => {
    setParsedLocalDate(date.toLocaleDateString());
  }, [date]);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <LinearGradient
          colors={['#A0D7FF', '#1A7CC3']}
          style={styles.container}>
          <Text style={styles.title}>Propiedad</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.subtitle}>Ubicación</Text>

              <Text style={styles.infoText}>San Francisco - Córdoba</Text>
              <Text style={styles.infoText}>Av. Rivadavia 2012</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}>
                <Icon
                  style={{marginRight: wp(2), flex: 1}}
                  name='location-pin'
                  size={20}
                  color='#FF5050'
                />
                <Text style={{color: 'white', fontWeight: 'bold', flex: wp(1)}}>
                  Ver en el mapa
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  flexDirection: 'row',
                  borderWidth: 2,
                },
              ]}>
              <Icon name="search" size={24} color={'#7bf3ff'} />
              <Text style={styles.buttonText}>Ver más detalles</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.subtitle}>Seleccionar Fecha y Hora</Text>
            <TouchableOpacity
              style={styles.datepickerContainer}
              onPress={() => setOpen(true)}>
              <Text style={styles.datepickerText}>{parsedLocalDate}</Text>
              <FontAwesome5Icon
                name="calendar-alt"
                size={20}
                color={'#204153'}
              />
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>

          <Text style={styles.subtitle}>Horarios Disponibles</Text>

          <View style={styles.schedulesContainer}>
            {schedules.map((schedule, index) => {
              const isSelected = schedule === selectedSchedule;

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => selectSchedule(schedule)}
                  style={[
                    styles.scheduleTime,
                    {
                      backgroundColor: isSelected ? '#1b495b' : 'white',
                      elevation: isSelected ? 2 : 0,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.scheduleText,
                      {
                        color: isSelected ? 'white' : '#1b495b',
                      },
                    ]}>
                    {schedule}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View>
            <Text style={styles.subtitle}>Mensaje (Opcional)</Text>
            <TextInput
              numberOfLines={4}
              multiline
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontSize: 16,
                borderRadius: 4,
              }}
              placeholder='Hola, quisiera visitar la propiedad cuanto antes'
            />
          </View>
        </LinearGradient>
      </ScrollView>
      <StickyButton
        position="bottom"
        text="Enviar solicitud"
        callback={() => {}}
        icon={<Icon name="send" size={24} color={'#7bf3ff'} />}
      />
    </View>
  );
};

export default VisitProperty;
