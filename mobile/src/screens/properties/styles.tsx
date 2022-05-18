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

  button: {
    alignItems: 'center',
    borderRadius: 5,
    padding: hp(1.5),
    marginLeft: wp(3),
    width: wp(30),
  },

  filtersHeader: {
    backgroundColor: '#263238',
    padding: 10,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },

  filtersContent: {
    flexDirection: 'column',
    paddingVertical: hp(2),
    alignItems: 'center',
  },

  filtersTitle: {
    color: 'white',
    fontWeight: 'bold',
  },

  textInput: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    textAlign: 'center',
    height: hp(5),
    width: wp(25),
  },
  verticalSeparator: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
});
