import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Attachment from '../../common/Attachment/Attachment';
import AttachmentRequest from '../../common/Attachment/AttachmentRequest';

interface ISecondStepProps {
  data: any;
  onChange: Function;
  handleFileDelete: Function;
}

const SecondStep = ({data, onChange, handleFileDelete}: ISecondStepProps) => {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: hp('3%'),
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: hp('1%'),
    },
    input: {
      backgroundColor: '#f5f5f5',
      paddingVertical: hp('1.4%'),
      paddingHorizontal: wp('4%'),
      color: 'black',
      fontSize: hp('2.3%'),
      margin: hp('1%'),
      borderRadius: 6,
      flex: 1,
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

  const {
    name,
    lastName,
    email,
    dni,
    birthDate,
    phone,
    startDate,
    endDate,
    guarantorFiles,
    dniFiles,
    receiptFiles,
  } = data;

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={name || ''}
          onChangeText={txt => onChange('name', txt)}
          placeholder='Nombre'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={lastName || ''}
          onChangeText={txt => onChange('lastName', txt)}
          placeholder='Apellido'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={email || ''}
          onChangeText={txt => onChange('email', txt)}
          placeholder='Email'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={dni || ''}
          onChangeText={txt => onChange('dni', txt)}
          placeholder='DNI'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={birthDate || ''}
          onChangeText={txt => onChange('birthDate', txt)}
          placeholder='Fecha de nacimiento'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <TextInput
          value={phone || ''}
          onChangeText={txt => onChange('phone', txt)}
          placeholder='Telefono'
          placeholderTextColor='gray'
          style={styles.input}></TextInput>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', flex: 1, paddingHorizontal: wp('4%')}}>
            Período:
          </Text>
          <TextInput
            value={startDate || ''}
            placeholder='Inicio'
            style={styles.input}
            onChangeText={txt => onChange('startDate', txt)}></TextInput>
          <TextInput
            value={endDate || ''}
            placeholder='Fin'
            style={styles.input}
            onChangeText={txt => onChange('endDate', txt)}></TextInput>
        </View>
      </View>
      <View style={{marginTop: hp('3%')}}>
        <Text style={styles.title}>Adjunte 3 Garantes</Text>
        <View style={{flexDirection: 'column'}}>
          {guarantorFiles &&
            guarantorFiles.map((guarantorFile: any, index: any) => {
              return (
                <Attachment
                  key={index}
                  name={guarantorFile.name || guarantorFile.id}
                  size={`${guarantorFile.size || '2253647'} Kb`}
                  handleDelete={() =>
                    handleFileDelete('guarantorFiles', guarantorFile.name)
                  }
                />
              );
            })}
          {/* <Attachment name='garante_perez_12052021.pdf' size='216.32kb' /> */}
          <AttachmentRequest fileType='guarantorFiles' />
        </View>
      </View>
      <View style={{marginTop: hp('3%')}}>
        <Text style={styles.title}>Adjunte foto de su DNI</Text>
        <View style={{flexDirection: 'column'}}>
          {dniFiles &&
            dniFiles.map((dniFile: any, index: any) => {
              return (
                <Attachment
                  key={index}
                  name={dniFile.name}
                  size={`${dniFile.size} Kb`}
                  handleDelete={() =>
                    handleFileDelete('dniFiles', dniFile.name)
                  }
                />
              );
            })}
          {/* <Attachment name='garante_perez_12052021.pdf' size='216.32kb' /> */}
          <AttachmentRequest fileType='dniFiles' />
        </View>
      </View>
      <View style={{marginTop: hp('3%')}}>
        <Text style={styles.title}>Adjunte recibos de sueldo</Text>
        <View style={{flexDirection: 'column'}}>
          {receiptFiles &&
            receiptFiles.map((receiptFile: any, index: any) => {
              return (
                <Attachment
                  key={index}
                  name={receiptFile.name}
                  size={`${receiptFile.size} Kb`}
                  handleDelete={() =>
                    handleFileDelete('receiptFiles', receiptFile.name)
                  }
                />
              );
            })}
          {/* <Attachment name='garante_perez_12052021.pdf' size='216.32kb' /> */}
          <AttachmentRequest fileType='receiptFiles' />
        </View>
      </View>
    </View>
  );
};

export default SecondStep;
