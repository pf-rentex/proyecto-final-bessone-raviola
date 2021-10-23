import {checkContributor} from '../api';
import {ToastAndroid} from 'react-native';

const isCuitRegistered = async (cuit: string) => {
  const {data} = await checkContributor(cuit);

  ToastAndroid.showWithGravityAndOffset(
    data.result.isValid
      ? 'Te encuentras registrado en AFIP!'
      : 'Al parecer, no se encuentra registrado como persona habilitada para alquilar propiedades en el padrón de AFIP.',
    ToastAndroid.LONG,
    ToastAndroid.TOP,
    25,
    50,
  );

  return data?.result?.isValid ?? false;
};

export default isCuitRegistered;
