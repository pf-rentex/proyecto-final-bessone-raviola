import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';

import Permissions from 'react-native-permissions';
import PDFScanner from '@woonivers/react-native-document-scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraRoll from '@react-native-community/cameraroll';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {genId} from '../utils/utils';

interface IFile {
  fileName: string;
  fileSize: number;
  width: number;
  height: number;
  type: string;
  uri: string;
}

const ScannerComponent = ({onContinue}: {onContinue: Function}) => {
  const pdfScannerElement = useRef(null);
  const [data, setData] = useState<{croppedImage?: string}>({});
  const [allowed, setAllowed] = useState(false);
  const [torch, toggleTorch] = useState(false);
  const [camera, toggleCamera] = useState(false);

  useEffect(() => {
    async function requestCamera() {
      const result = await Permissions.request(
        Platform.OS === 'android'
          ? 'android.permission.CAMERA'
          : 'ios.permission.CAMERA',
      );
      if (result === 'granted') {
        setAllowed(true);
      }
    }
    requestCamera();
  }, []);

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const onPressSave = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }
    if (data.croppedImage) {
      await CameraRoll.save(data.croppedImage);
      ToastAndroid.showWithGravityAndOffset(
        'Imagen guardada en la galería',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        150,
      );
    }
  };

  const onRetry = () => {
    setData({});
  };
  const onPressContinue = () => {
    const item = [
      {
        uri: data.croppedImage,
        type: 'image/jpg',
        id: genId('scanned'),
      },
    ];
    onContinue(item);
  };

  const handleOnPress = () => {
    // @ts-ignore
    pdfScannerElement?.current?.capture();
  };

  if (!allowed) {
    console.log('You must accept camera permission');
    return (
      <View style={styles.permissions}>
        <Text>You must accept camera permission</Text>
      </View>
    );
  }

  if (data.croppedImage) {
    return (
      <>
        <Image source={{uri: data.croppedImage}} style={styles.preview} />
        <View style={styles.btnFixedContainer}>
          <View style={styles.btnFlexContainer}>
            <TouchableOpacity
              onPress={onRetry}
              style={[styles.btn, styles.rounded]}>
              <Text style={styles.buttonText}>Reintentar</Text>
              <Ionicons name='camera' size={hp(3)} color={'rgb(17,72,97)'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressContinue}
              style={[styles.btn, styles.rounded]}>
              <Text style={styles.buttonText}>Continuar</Text>
              <FontAwesome5Icon
                name='arrow-circle-right'
                size={hp(3)}
                color={'rgb(17,72,97)'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressSave} style={styles.btn}>
              <Ionicons name='download' size={hp(3)} color='black' />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
  return (
    <>
      <PDFScanner
        ref={pdfScannerElement}
        style={styles.scanner}
        onPictureTaken={setData}
        overlayColor='rgba(121,208,248,0.7)'
        enableTorch={torch}
        useFrontCam={camera}
        quality={1}
        detectionCountBeforeCapture={50}
        detectionRefreshRateInMS={100}
      />
      <TouchableOpacity onPress={handleOnPress} style={styles.shutter} />
      <View style={styles.btnFixedContainer}>
        <View style={styles.btnFlexContainer}>
          {Platform.OS === 'ios' && (
            <TouchableOpacity
              onPress={() => toggleCamera(!camera)}
              style={[styles.btn, styles.rounded]}>
              <Ionicons
                name='camera-reverse'
                size={24}
                color={camera ? 'white' : 'black'}
              />
            </TouchableOpacity>
          )}
          {Platform.OS === 'android' && <View style={{width: wp(50)}} />}
          <TouchableOpacity
            onPress={() => toggleTorch(!torch)}
            style={[styles.btn, styles.rounded]}>
            <Ionicons
              name='flashlight'
              size={24}
              color={torch ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnFixedContainer: {
    position: 'absolute',
    bottom: hp(5),
    width: wp(100),
    height: hp(5),
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
    backgroundColor: 'rgba(107,203,253,0.83)',
  },
  scanner: {
    flex: 1,
    aspectRatio: undefined,
  },
  rounded: {
    borderRadius: hp(50),
  },
  shutter: {
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 12,
    height: 100,
    width: 100,
    bottom: hp(5),
  },
  buttonText: {
    color: '#111',
    fontSize: wp(4),
    paddingHorizontal: wp(1),
  },
  previewContainer: {
    backgroundColor: 'rgba(19,36,47,0.92)',
    // flex: 1,
  },
  preview: {
    borderRadius: 10,
    flex: 1,
    resizeMode: 'center',
  },
  permissions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScannerComponent;
