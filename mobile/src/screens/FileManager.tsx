import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GlassyButton from '../components/buttons/GlassyButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';

const FileManager = ({navigation}: {navigation: {navigate: Function}}) => {
  const onPickFile = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      navigation.navigate('DocumentPreviewer', {
        items: res,
      });
    } catch (e) {
      // error
    }
  };
  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
      <GlassyButton
        text='Escanear'
        onClicked={() => {
          navigation.navigate('Scanner');
        }}
        children={
          <Ionicons name='scan' size={30} color={'rgba(7,41,57,0.77)'} />
        }
      />
      <GlassyButton
        text='Importar'
        onClicked={() => onPickFile()}
        children={
          <Ionicons
            name='document-attach'
            size={30}
            color={'rgba(22,57,73,0.77)'}
          />
        }
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FileManager;
