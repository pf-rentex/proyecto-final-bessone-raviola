import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    height: hp('100'),
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: hp(1),
    fontSize: hp(2),
    textTransform: 'uppercase',
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginBottom: hp(1),
  },
  button: {
    backgroundColor: '#263238',
    padding: wp('1.5'),
    borderRadius: 4,
    flexDirection: 'row',
    marginHorizontal: wp(2),
    marginVertical: hp(2),
  },
  infoText: {
    paddingStart: wp(1),
    marginVertical: hp(0.5),
  },
  datepickerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#f5f5f5',
    padding: wp(2),
    width: wp(50),
    marginVertical: hp(2),
    borderRadius: 4,
  },
  datepickerText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  schedulesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: hp(2),
    flexWrap: 'wrap',
  },
  scheduleTime: {
    width: wp(25),
    borderRadius: 5,
    alignItems: 'center',
    padding: wp(2),
    margin: hp(0.5),
  },
  scheduleText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
