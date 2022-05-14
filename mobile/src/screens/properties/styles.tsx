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
    flex: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#263238',
    paddingVertical: hp('1.3%'),
    paddingHorizontal: wp('2%'),
    color: 'white',
    fontSize: hp('2.3%'),
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: hp('2%'),
  },
  searchIcon: {
    paddingVertical: hp('1.8%'),
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

  modalView: {
    margin: 20,
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
