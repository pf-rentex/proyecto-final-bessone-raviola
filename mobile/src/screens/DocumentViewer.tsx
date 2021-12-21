import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FileViewer from 'react-native-file-viewer';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';

import {genId} from '../utils/utils';
import ScannerComponent from '../components/Scanner';
import {useNavigation} from '@react-navigation/native';

const DocumentViewer = ({route}: any) => {
  const {fileType} = route.params ? route.params : '';
  const navigation = useNavigation();
  const [documents, setDocuments] = useState<any[]>([]);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [showScanner, setShowScanner] = useState<boolean>(false);

  const addNewItems = (items: any[]) => {
    let newDocs = [...new Set([...documents, ...items])];
    setDocuments(newDocs);
  };

  const onCancel = () => {
    setDocuments([]);
  };

  const onAddMoreItems = async () => {
    setAddModal(true);
  };

  const onImportFiles = async () => {
    try {
      setAddModal(false);
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });

      setDocuments([...documents, ...res]);
    } catch (e) {
      // error
    }
  };

  const onClearItem = (idx: number) => {
    setDocuments(documents.filter((_, i) => i !== idx));
  };

  const onConfirm = () => {
    navigation.navigate('RequestForm', {
      [fileType]: documents ? documents : [],
    });
  };

  const onScanned = (items: any[]) => {
    setShowScanner(false);
    addNewItems(items);
    setAddModal(false);
  };

  const viewFile = (uri: string) => {
    FileViewer.open(uri)
      .then(() => {
        console.log('success');
        // success
      })
      .catch(error => {
        console.log('error!');
        // error
      });
  };

  if (showScanner) {
    return <ScannerComponent onContinue={onScanned} />;
  }
  return (
    <LinearGradient colors={['#15ABFF', '#C9F0FD']} style={styles.container}>
      <Modal
        transparent={true}
        animationType='fade'
        visible={addModal || documents.length === 0}
        onRequestClose={() => setAddModal(!addModal)}>
        <Pressable
          style={{
            flex: 1,
          }}
          onPress={() => setAddModal(!addModal)}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => {
                setShowScanner(!showScanner);
              }}
              style={styles.modalButtonContainer}>
              <Ionicons name='scan' size={hp(5)} color={'#089fe5'} />
              <Text style={styles.modalButtonText}>Escanear</Text>
            </TouchableOpacity>
            <View style={styles.modalVerticalLine} />
            <TouchableOpacity
              onPress={onImportFiles}
              style={styles.modalButtonContainer}>
              <Ionicons
                name='md-document-attach-outline'
                size={hp(5)}
                color={'#089fe5'}
              />
              <Text style={styles.modalButtonText}>Importar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
      <FlatList
        data={documents}
        numColumns={3}
        renderItem={item => (
          <>
            <TouchableOpacity
              style={styles.item}
              onPress={() => (item.item.uri ? viewFile(item.item.uri) : null)}>
              {item.item.type.indexOf('image/') > -1 && (
                <Image source={{uri: item.item.uri}} style={styles.preview} />
              )}
              {item.item.type.indexOf('image/') === -1 && (
                <View style={styles.attachmentContainer}>
                  <Ionicons name='attach' size={wp(15)} color={'#79d0f8'} />
                  <Text
                    numberOfLines={1}
                    style={{
                      color: '#fff',
                    }}>
                    {item.item.name}
                  </Text>
                </View>
              )}
              <TouchableOpacity
                onPress={() => onClearItem(documents.indexOf(item.item))}
                style={styles.removeBtnContainer}>
                <FontAwesomeIcon name='remove' size={wp(5)} color={'#dc0606'} />
              </TouchableOpacity>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={item => genId(item.id)}
      />
      {documents.length > 0 && (
        <View style={styles.btnFixedContainer}>
          <View style={styles.btnFlexContainer}>
            <TouchableOpacity
              onPress={() => onCancel()}
              style={[styles.btn, styles.rounded]}>
              <FontAwesomeIcon name='close' size={hp('3')} color='red' />
              <Text style={styles.ctaText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onAddMoreItems()}
              style={[styles.btn, styles.rounded]}>
              <FontAwesomeIcon
                name='plus'
                size={hp('3')}
                color={'rgb(121,208,248)'}
              />
              <Text style={styles.ctaText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onConfirm()}
              style={[styles.btn, styles.rounded]}>
              <FontAwesomeIcon
                name='check-circle'
                size={hp('3')}
                color={'rgb(89,177,58)'}
              />
              <Text style={styles.ctaText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
    elevation: 8,
    borderRadius: 20,
    marginVertical: hp(40),
    margin: wp('20'),
  },
  modalButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    paddingTop: hp(1),
    fontSize: wp(3),
    fontWeight: 'bold',
  },
  modalVerticalLine: {
    height: '80%',
    width: 1,
    backgroundColor: 'rgba(51,51,51,0.85)',
  },
  item: {
    backgroundColor: '#222',
    borderRadius: wp(2),
    height: wp(30),
    maxWidth: wp(30),
    flex: 1,
    padding: wp(1),
    justifyContent: 'center',
    margin: wp(2),
  },
  btnFixedContainer: {
    position: 'absolute',
    bottom: hp(6),
    width: wp(100),
  },
  btnFlexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    borderRadius: wp(2),
    backgroundColor: 'rgba(6,30,42,0.83)',
  },
  ctaText: {
    color: '#fff',
    fontSize: wp(4),
    paddingHorizontal: wp(1),
  },
  preview: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  attachmentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('1'),
  },
  removeBtnContainer: {
    position: 'absolute',
    top: hp(1),
    right: hp(1),
    width: wp(6),
    height: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  rounded: {
    borderRadius: hp(50),
  },
});

export default DocumentViewer;
