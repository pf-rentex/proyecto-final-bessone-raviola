import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    margin: 22,
  },
  headerLabel: {
    backgroundColor: '#222',
    paddingHorizontal: wp(4),
    borderRadius: 8,
  },
  labelText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  userName: {
    fontSize: wp(7),
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'column',
    borderRadius: 25,
  },
  itemHeader: {
    fontSize: wp(4),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: hp(0.5),
  },
  itemText: {
    fontSize: wp(5),
    color: '#00496e',
    textAlign: 'center',
    paddingVertical: hp(0.5),
  },
  editCTA: {
    flexDirection: 'row',
    paddingVertical: hp(1.5),
    marginTop: hp(3),
    backgroundColor: '#333',
    justifyContent: 'center',
    borderRadius: 5,
  },
  mainCTAText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontSize: hp('2%'),
  },
});
