import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
    // justifyContent: 'center',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#263238',
    paddingVertical: hp('1.4%'),
    paddingHorizontal: wp('2%'),
    color: 'white',
    fontSize: hp('2.3%'),
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: hp('2%'),
  },
  searchIcon: {
    paddingVertical: hp('2.1%'),
    paddingHorizontal: wp('3.5%'),
    color: 'white',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    fontSize: hp('2.3%'),
    backgroundColor: '#263238',
    marginTop: hp('2%'),
  },
  loader: {
    flex: 2,
  },
});
