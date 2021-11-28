import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    backgroundColor: '#327EB5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(3),
  },
  actions: {
    bottom: hp(-3),
    width: wp(100),
    position: 'absolute',
  },
  stepButton: {
    height: Dimensions.get('window').width * 0.13,
    backgroundColor: '#263238',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(3),
  },
});
